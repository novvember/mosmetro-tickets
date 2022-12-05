import Tickets from '../types/Tickets';
import SelectedTickets from '../types/SelectedTickets';

export default function getInitialSelectedTickets(tickets: Tickets) {
  const selectedTickets: SelectedTickets = {};

  for (let id in tickets) {
    selectedTickets[id] = tickets[id].config.isSelectedByDefault;
  }
  return selectedTickets;
}
