import CompoundTicket from './CompoundTicket';
import appConfig from './appConfig';
import SimpleTicket from './SimpleTicket';
import TicketsConfigs from '../types/TicketsConfigs';
import TicketsFields from '../types/TicketFields';
import Ticket from './Ticket';
import TicketsSelected from '../types/TicketsSelected';

export default function buildTickets(configs: TicketsConfigs) {
  const fields: TicketsFields = {};
  const selected: TicketsSelected = {};
  const filteredConfigs = configs.filter(
    (config) => config.isIgnored === false,
  );

  filteredConfigs.forEach((config) => {
    const id = config.id;
    const isCompound = Ticket.isCompound(config);

    const { field } = isCompound
      ? new CompoundTicket(config, appConfig, fields)
      : new SimpleTicket(config, appConfig);

    fields[id] = field;
    selected[id] = config.isSelectedByDefault;
  });

  return { fields, configs: filteredConfigs, selected };
}
