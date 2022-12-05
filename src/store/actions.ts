import Tickets from '../types/Tickets';
import SelectedTickets from '../types/SelectedTickets';
import TicketId from '../types/TicketId';

function initialized(tickets: Tickets, selectedTickets: SelectedTickets) {
  return {
    type: 'INITIALIZED',
    payload: {
      tickets,
      selectedTickets,
    },
  };
}

function selected(id: TicketId, isSelected: boolean) {
  return {
    type: 'SELECTED',
    payload: {
      id,
      isSelected,
    },
  };
}

export { initialized, selected };
