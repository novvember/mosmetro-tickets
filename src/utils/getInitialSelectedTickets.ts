import CalculatedTickets from '../types/CalculatedTickets';
import SelectedTickets from '../types/SelectedTickets';

export default function getInitialSelectedTickets(tickets: CalculatedTickets) {
  const selectedTickets: SelectedTickets = {};

  for (let id in tickets) {
    selectedTickets[id] = tickets[id].data.isSelectedByDefault;
  }
  return selectedTickets;
}
