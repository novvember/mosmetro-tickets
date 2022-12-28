import Tickets from '../types/Tickets';
import SelectedTickets from '../types/SelectedTickets';
import TicketId from '../types/TicketId';
import { TICKETS_TYPES } from './action-types';

function initializeTickets(tickets: Tickets, selectedTickets: SelectedTickets) {
  return {
    type: TICKETS_TYPES.INITIALIZE,
    payload: {
      tickets,
      selectedTickets,
    },
  };
}

function startCalculation() {
  return {
    type: TICKETS_TYPES.START_CALCULATION,
  };
}

function selectTickets(id: TicketId, isSelected: boolean) {
  return {
    type: TICKETS_TYPES.SELECT,
    payload: {
      id,
      isSelected,
    },
  };
}

export const ticketsActions = {
  initializeTickets,
  startCalculation,
  selectTickets,
};
