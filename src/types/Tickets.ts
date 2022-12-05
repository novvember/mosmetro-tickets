import CompoundTicket from '../utils/CompoundTicket';
import SimpleTicket from '../utils/SimpleTicket';

export default interface Tickets {
  [key: string]: SimpleTicket | CompoundTicket;
}
