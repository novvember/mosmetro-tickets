import AppConfig from './AppConfig';
import Field from './Field';
import SelectedTickets from './SelectedTickets';
import TicketGroupConfig from './TicketGroupConfig';
import Tickets from './Tickets';

type State = {
  field: Field | null;
  loading: boolean;
  minCost: number | null;
  maxCost: number | null;
  appConfig: AppConfig;
  tickets: Tickets | null;
  selectedTickets: SelectedTickets | null;
  ticketGroupsConfigs: TicketGroupConfig[];
};

export default State;
