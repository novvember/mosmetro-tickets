import Tickets from '../types/Tickets';
import {
  CompoundTicketConfig,
  SimpleTicketConfig,
} from '../types/TicketConfig';
import CompoundTicket from './CompoundTicket';
import appConfig from './appConfig';
import SimpleTicket from './SimpleTicket';

export default function buildTickets(
  ticketConfigs: Array<SimpleTicketConfig | CompoundTicketConfig>,
) {
  const tickets: Tickets = {};

  ticketConfigs
    .filter((ticket) => ticket.isIgnored === false)
    .forEach((ticket) => {
      const id = ticket.id;
      const isCompound = ticket.groupId === 'compound';

      if (!isCompound) {
        tickets[id] = new SimpleTicket(ticket as SimpleTicketConfig, appConfig);
      } else {
        tickets[id] = new CompoundTicket(
          ticket as CompoundTicketConfig,
          appConfig,
          tickets,
        );
      }
    });

  return tickets;
}
