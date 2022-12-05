import config from '../utils/config';
import Field from '../utils/Field';
import FieldType from '../types/Field';
import Config from '../types/Config';
import CalculatedTickets from '../types/CalculatedTickets';
import SelectedTickets from '../types/SelectedTickets';
import TicketGroup from '../types/TicketGroup';
import { ticketGroupsData } from '../utils/ticketsData';

type State = {
  field: FieldType | null;
  loading: boolean;
  minCost: number | null;
  maxCost: number | null;
  config: Config;
  tickets: CalculatedTickets | null;
  selectedTickets: SelectedTickets | null;
  ticketGroups: TicketGroup[];
};

const initialState = {
  field: null,
  loading: true,
  minCost: null,
  maxCost: null,
  config: config,
  tickets: null,
  selectedTickets: null,
  ticketGroups: ticketGroupsData,
};

export default function reducer(state: State = initialState, action: any) {
  switch (action.type) {
    case 'INITIALIZED':
      const { tickets, selectedTickets } = action.payload;

      const { field, minCost, maxCost } = new Field(
        tickets,
        selectedTickets,
        state.config,
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
