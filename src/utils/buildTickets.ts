import {
  CompoundTicketConfig,
  SimpleTicketConfig,
} from '../types/TicketConfig';
import CompoundTicket from './CompoundTicket';
import appConfig from './appConfig';
import SimpleTicket from './SimpleTicket';
import TicketsConfigs from '../types/TicketsConfigs';
import TicketsFields from '../types/TicketFields';
import Ticket from './Ticket';
import TicketsSelected from '../types/TicketsSelected';

export default function buildTickets(
  configs: Array<SimpleTicketConfig | CompoundTicketConfig>,
) {
  const ticketsFields: TicketsFields = {};
  const ticketsConfigs: TicketsConfigs = {};
  const ticketsSelected: TicketsSelected = {};

  configs
    .filter((config) => config.isIgnored === false)
    .forEach((config) => {
      const id = config.id;
      const isCompound = Ticket.isCompound(config);

      const { field } = isCompound
        ? new CompoundTicket(config, appConfig, ticketsFields)
        : new SimpleTicket(config, appConfig);

      ticketsFields[id] = field;
      ticketsConfigs[id] = config;
      ticketsSelected[id] = config.isSelectedByDefault;
    });

  return { ticketsFields, ticketsConfigs, ticketsSelected };
}
