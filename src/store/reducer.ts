import appConfig from '../utils/appConfig';
import { ticketGroupsConfig } from '../utils/ticketsData';

import Field from '../utils/Field';
import State from '../types/State';

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

export default function reducer(
  state: State = initialState,
  action: any,
): State {
  switch (action.type) {
    case 'INITIALIZED': {
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

    case 'SELECTED': {
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
