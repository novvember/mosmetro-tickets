import { CompoundTicketConfig, SimpleTicketConfig } from './TicketConfig';
import TicketId from './TicketId';

type TicketsConfigs = Record<
  TicketId,
  SimpleTicketConfig | CompoundTicketConfig
>;

export default TicketsConfigs;
