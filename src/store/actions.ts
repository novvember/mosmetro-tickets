import CalculatedTickets from '../types/CalculatedTickets';
import SelectedTickets from '../types/SelectedTickets';

function initialized(
  tickets: CalculatedTickets,
  selectedTickets: SelectedTickets,
) {
  return {
    type: 'INITIALIZED',
    payload: {
      tickets,
      selectedTickets,
    },
  };
}

export { initialized };
