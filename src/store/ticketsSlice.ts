import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import AppConfig from '../types/AppConfig';
import GlobalField from '../types/GlobalField';
import TicketsFields from '../types/TicketFields';
import TicketGroupConfig from '../types/TicketGroupConfig';
import TicketId from '../types/TicketId';
import TicketsConfigs from '../types/TicketsConfigs';
import TicketsSelected from '../types/TicketsSelected';
import appConfig from '../utils/appConfig';
import buildTickets from '../utils/buildTickets';
import Ticket from '../utils/Ticket';
import { ticketGroupsConfig } from '../utils/ticketsData';
import { ticketsConfigs as configs } from '../utils/ticketsData';

export interface TicketsState {
  appConfig: AppConfig;
  ticketsFields: TicketsFields | null;
  ticketsSelected: TicketsSelected | null;
  ticketsConfigs: TicketsConfigs | null;
  ticketGroupsConfigs: TicketGroupConfig[];
}

const initialState: TicketsState = {
  appConfig: appConfig,
  ticketsFields: null,
  ticketsSelected: null,
  ticketsConfigs: null,
  ticketGroupsConfigs: ticketGroupsConfig,
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
      if (
        !state.ticketsFields ||
        !state.ticketsSelected ||
        !state.ticketsConfigs
      )
        return;

      const { id, isSelected } = action.payload;
      state.ticketsSelected[id] = isSelected;

      const dependencies = state.ticketsConfigs[id].dependencies;

      if (dependencies) {
        for (let ticketId of dependencies) {
          const ticketConfig = state.ticketsConfigs[ticketId];

          if (isSelected && Ticket.isCompound(ticketConfig)) {
            const areAllTrue = [
              ticketConfig.useForMetro,
              ticketConfig.useForTat,
            ]
              .map((ticketId) => state.ticketsSelected![ticketId])
              .every((state) => state === true);

            if (!areAllTrue) continue;
          }

          state.ticketsSelected[ticketId] = isSelected;
        }
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(initializeTickets.fulfilled, (state, action) => {
        const {
          ticketsFields,
          ticketsConfigs,
          ticketsSelected,
        } = action.payload;
        state.ticketsFields = ticketsFields;
        state.ticketsConfigs = ticketsConfigs;
        state.ticketsSelected = ticketsSelected;
      })
  },
});

export default ticketsSlice.reducer;

export const { ticketsSelected } = ticketsSlice.actions;

export const selectFieldMax = (state: AppState) =>
  state.tickets.appConfig.fieldMax;

export const selectFieldStep = (state: AppState) =>
  state.tickets.appConfig.fieldStep;

export const selectTicketsConfigs = (state: AppState) =>
  state.tickets.ticketsConfigs;

export const selectIsSelected = (state: AppState, ticketId: TicketId) =>
  state.tickets.ticketsSelected?.[ticketId];

export const selectTicketGroupsConfigs = (state: AppState) =>
  state.tickets.ticketGroupsConfigs;


