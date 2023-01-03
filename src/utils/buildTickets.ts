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
        const { field, config } = new SimpleTicket(
          ticket as SimpleTicketConfig,
          appConfig,
        );

        tickets[id] = { field, config };
      } else {
        const { field, config } = new CompoundTicket(
          ticket as CompoundTicketConfig,
          appConfig,
          tickets,
        );

        tickets[id] = { field, config };
      }
    });

  return tickets;
}
