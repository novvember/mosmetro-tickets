import { ticketGroupsConfig } from '../utils/ticketsData';

import appConfig from '../utils/appConfig';
import Field from '../utils/Field';

import AppConfig from '../types/AppConfig';
import FieldType from '../types/Field';
import SelectedTickets from '../types/SelectedTickets';
import TicketGroupConfig from '../types/TicketGroupConfig';
import Tickets from '../types/Tickets';
import { TICKETS_TYPES } from './action-types';
import { AnyAction } from 'redux';
import Ticket from '../utils/Ticket';

export interface TicketsState {
  field: FieldType | null;
  loading: boolean;
  minCost: number | null;
  maxCost: number | null;
  appConfig: AppConfig;
  tickets: Tickets | null;
  selectedTickets: SelectedTickets | null;
  ticketGroupsConfigs: TicketGroupConfig[];
}

const initialState = {
  field: null,
  loading: true,
  minCost: null,
  maxCost: null,
  appConfig: appConfig,
  tickets: null,
  selectedTickets: null,
  ticketGroupsConfigs: ticketGroupsConfig,
};

export default function ticketsReducer(
  state: TicketsState = initialState,
  action: AnyAction,
): TicketsState {
  switch (action.type) {
    case TICKETS_TYPES.INITIALIZE: {
      const { tickets, selectedTickets } = action.payload;

      const { field, minCost, maxCost } = new Field(
        tickets,
        selectedTickets,
        state.appConfig,
      );

      return {
        ...state,
        loading: false,
        tickets,
        selectedTickets,
        field,
        minCost,
        maxCost,
      };
    }

    case TICKETS_TYPES.SELECT: {
      const { tickets } = state;
      if (!tickets) return state;

      const { id, isSelected } = action.payload;

      const selectedTickets: SelectedTickets = {
        ...state.selectedTickets,
        [id]: isSelected,
      };

      const dependencies = tickets[id].config.dependencies;

      if (dependencies) {
        for (let ticketId of dependencies) {
          const ticketConfig = tickets[ticketId].config;

          if (isSelected && Ticket.isCompound(ticketConfig)) {
            const areAllTrue = [
              ticketConfig.useForMetro,
              ticketConfig.useForTat,
            ]
              .map((ticketId) => selectedTickets[ticketId])
              .every((state) => state === true);

            if (!areAllTrue) continue;
          }

          selectedTickets[ticketId] = isSelected;
        }
      }

      const { field, minCost, maxCost } = new Field(
        tickets,
        selectedTickets,
        state.appConfig,
      );

      return {
        ...state,
        selectedTickets: selectedTickets,
        field,
        minCost,
        maxCost,
      };
    }
    default:
      return state;
  }
}
