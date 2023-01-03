import CompoundTicket from '../utils/CompoundTicket';
import SimpleTicket from '../utils/SimpleTicket';
import { SimpleTicketConfig, CompoundTicketConfig } from './TicketConfig';

export default interface TicketData {
  field: SimpleTicket['field'] | CompoundTicket['field'];
  config: SimpleTicketConfig | CompoundTicketConfig;
}
