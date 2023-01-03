import { createSlice } from '@reduxjs/toolkit';
import AppConfig from '../../types/AppConfig';
import FieldType from '../../types/Field';
import SelectedTickets from '../../types/SelectedTickets';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import Tickets from '../../types/Tickets';
import appConfig from '../../utils/appConfig';
import Field from '../../utils/Field';
import Ticket from '../../utils/Ticket';
import { ticketGroupsConfig } from '../../utils/ticketsData';

export interface TicketsState {
  field: FieldType | null;
  isFieldLoading: boolean;
  areTicketsLoading: boolean;
  minCost: number | null;
  maxCost: number | null;
  appConfig: AppConfig;
  tickets: Tickets | null;
  selectedTickets: SelectedTickets | null;
  ticketGroupsConfigs: TicketGroupConfig[];
}

const initialState: TicketsState = {
  field: null,
  isFieldLoading: true,
  areTicketsLoading: false,
  minCost: null,
  maxCost: null,
  appConfig: appConfig,
  tickets: null,
  selectedTickets: null,
  ticketGroupsConfigs: ticketGroupsConfig,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    initialized(state, action) {
      const { tickets, selectedTickets } = action.payload;

      const { field, minCost, maxCost } = new Field(
        tickets,
        selectedTickets,
        state.appConfig,
      );

      state.isFieldLoading = false;
      state.tickets = tickets;
      state.selectedTickets = selectedTickets;
      state.field = field;
      state.maxCost = maxCost;
      state.minCost = minCost;
    },

    calculationStarted(state, action) {
      state.isFieldLoading = true;
    },

    ticketsSelected(state, action) {
      if (!state.tickets) return;
      if (!state.selectedTickets) return;

      const { id, isSelected } = action.payload;
      state.selectedTickets[id] = isSelected;

      const dependencies = state.tickets[id].config.dependencies;

      if (dependencies) {
        for (let ticketId of dependencies) {
          const ticketConfig = state.tickets[ticketId].config;

          if (isSelected && Ticket.isCompound(ticketConfig)) {
            const areAllTrue = [
              ticketConfig.useForMetro,
              ticketConfig.useForTat,
            ]
              .map((ticketId) => state.selectedTickets![ticketId])
              .every((state) => state === true);

            if (!areAllTrue) continue;
          }

          state.selectedTickets[ticketId] = isSelected;
        }
      }

      const { field, minCost, maxCost } = new Field(
        state.tickets as Tickets,
        state.selectedTickets,
        state.appConfig,
      );

      state.field = field;
      state.minCost = minCost;
      state.maxCost = maxCost;
      state.isFieldLoading = false;
    },
  },
});

export default ticketsSlice.reducer;

export const {
  initialized,
  calculationStarted,
  ticketsSelected,
} = ticketsSlice.actions;
