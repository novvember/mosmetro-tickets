import CalculatedTicket from '../utils/CalculatedTicket';
import CompoundCalculatedTicket from '../utils/CompoundCalculatedTicket';
import SimpleCalculatedTicket from '../utils/SimpleCalculatedTicket';
import { CompoundTicket, SimpleTicket, Ticket } from './Ticket';

export default interface CalculatedTickets {
  [key: Ticket['id']]: SimpleCalculatedTicket | CompoundCalculatedTicket;
}
