import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import TicketsFields from '../types/TicketFields';
import TicketGroupConfig from '../types/TicketGroupConfig';
import TicketId from '../types/TicketId';
import TicketsConfigs from '../types/TicketsConfigs';
import TicketsSelected from '../types/TicketsSelected';
import CompoundTicket from '../utils/CompoundTicket';
import SimpleTicket from '../utils/SimpleTicket';
import Ticket from '../utils/Ticket';
import { ticketGroupsConfig, ticketsConfigs } from '../utils/ticketsData';
import { ticketsConfigs as configs } from '../utils/ticketsData';
import { selectAppConfig } from './appConfigSlice';

export interface TicketsState {
  fields: TicketsFields | null;
  selected: TicketsSelected | null;
  configs: TicketsConfigs;
  groupsConfigs: TicketGroupConfig[];
}

const initialState: TicketsState = {
  fields: null,
  selected: null,
  configs: ticketsConfigs,
  groupsConfigs: ticketGroupsConfig,
};

export const initializeTickets = createAsyncThunk(
  'tickets/initialize',
  async (_, { getState }) => {
    const state = getState() as AppState;
    const appConfig = selectAppConfig(state);
    const fields: TicketsFields = {};
    const selected: TicketsSelected = {};
    const filteredConfigs = configs.filter(
      (config) => config.isIgnored === false,
    );

    filteredConfigs.forEach((config) => {
      const id = config.id;
      const isCompound = Ticket.isCompound(config);

      const { field } = isCompound
        ? new CompoundTicket(config, appConfig, fields)
        : new SimpleTicket(config, appConfig);

      fields[id] = field;
      selected[id] = config.isSelectedByDefault;
    });

    return { fields, configs: filteredConfigs, selected };
  },
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    ticketsSelected(state, action) {
      if (!state.fields || !state.selected || !state.configs) return;

      const { id, isSelected } = action.payload;
      state.selected[id] = isSelected;

      const dependencies = selectLocalConfig(state, id)?.dependencies;

      if (dependencies) {
        for (let ticketId of dependencies) {
          const ticketConfig = selectLocalConfig(state, ticketId);
          if (!ticketConfig) continue;

          if (isSelected && Ticket.isCompound(ticketConfig)) {
            const areAllTrue = [
              ticketConfig.useForMetro,
              ticketConfig.useForTat,
            ]
              .map((ticketId) => state.selected![ticketId])
              .every((state) => state === true);

            if (!areAllTrue) continue;
          }

          state.selected[ticketId] = isSelected;
        }
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(initializeTickets.fulfilled, (state, action) => {
      const { fields, selected, configs } = action.payload;
      state.fields = fields;
      state.selected = selected;
      state.configs = configs;
    });
  },
});

export default ticketsSlice.reducer;

export const { ticketsSelected } = ticketsSlice.actions;

const selectLocalConfig = (state: TicketsState, ticketId: TicketId) =>
  state.configs?.find((config) => config.id === ticketId);

export const selectConfigByTicketId = (state: AppState, ticketId: TicketId) =>
  selectLocalConfig(state.tickets, ticketId);

export const selectTicketsConfigs = (state: AppState) => state.tickets.configs;

export const selectIsSelected = (state: AppState, ticketId: TicketId) =>
  state.tickets.selected?.[ticketId];

export const selectTicketGroupsConfigs = (state: AppState) =>
  state.tickets.groupsConfigs;

export const selectTicketsFields = (state: AppState) => state.tickets.fields;

export const selectTicketsSelected = (state: AppState) =>
  state.tickets.selected;
