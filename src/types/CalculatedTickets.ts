import CalculatedTicket from '../utils/CalculatedTicket';
import { Ticket } from './Ticket';

export default interface CalculatedTickets {
  [key: Ticket['id']]: CalculatedTicket;
}
