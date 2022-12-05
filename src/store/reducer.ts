import appConfig from '../utils/appConfig';
import { ticketGroupsConfig } from '../utils/ticketsData';

import Field from '../utils/Field';

import FieldType from '../types/Field';
import AppConfig from '../types/AppConfig';
import Tickets from '../types/Tickets';
import SelectedTickets from '../types/SelectedTickets';
import TicketGroupConfig from '../types/TicketGroupConfig';

type State = {
  field: FieldType | null;
  loading: boolean;
  minCost: number | null;
  maxCost: number | null;
  appConfig: AppConfig;
  tickets: Tickets | null;
  selectedTickets: SelectedTickets | null;
  ticketGroupsConfigs: TicketGroupConfig[];
};

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

export default function reducer(state: State = initialState, action: any) {
  switch (action.type) {
    case 'INITIALIZED':
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

    default:
      return state;
  }
}
