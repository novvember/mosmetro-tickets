import Tickets from '../types/Tickets';
import SelectedTickets from '../types/SelectedTickets';

function initialized(tickets: Tickets, selectedTickets: SelectedTickets) {
  return {
    type: 'INITIALIZED',
    payload: {
      tickets,
      selectedTickets,
    },
  };
}

export { initialized };
