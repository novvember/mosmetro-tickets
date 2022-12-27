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
      const { id, isSelected } = action.payload;

      const selectedTickets = {
        ...state.selectedTickets,
        [id]: isSelected,
      };

      if (!state.tickets) return state;

      const { field, minCost, maxCost } = new Field(
        state.tickets,
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
