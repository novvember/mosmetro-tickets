import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import {
  CompoundTicketConfig,
  SimpleTicketConfig,
} from '../types/TicketConfig';
import TicketsFields from '../types/TicketFields';
import TicketGroupConfig from '../types/TicketGroupConfig';
import TicketId from '../types/TicketId';
import TicketsSelected from '../types/TicketsSelected';
import buildTickets from '../utils/buildTickets';
import Ticket from '../utils/Ticket';
import { ticketGroupsConfig, ticketsConfigs } from '../utils/ticketsData';
import { ticketsConfigs as configs } from '../utils/ticketsData';

export interface TicketsState {
  fields: TicketsFields | null;
  selected: TicketsSelected | null;
  configs: Array<SimpleTicketConfig | CompoundTicketConfig> | null;
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
  async () => {
    return buildTickets(configs);
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
