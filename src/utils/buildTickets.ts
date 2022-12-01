import CalculatedTickets from '../types/CalculatedTickets';
import { CompoundTicket, SimpleTicket } from '../types/Ticket';
import CompoundCalculatedTicket from './CompoundCalculatedTicket';
import config from './config';
import SimpleCalculatedTicket from './SimpleCalculatedTicket';

export default function buildTickets(
  ticketsData: Array<SimpleTicket | CompoundTicket>,
) {
  const tickets: CalculatedTickets = {};

  ticketsData
    .filter((ticket) => ticket.isIgnored === false)
    .forEach((ticket) => {
      const id = ticket.id;
      const isCompound = ticket.groupId === 'compound';

      if (!isCompound) {
        tickets[id] = new SimpleCalculatedTicket(
          ticket as SimpleTicket,
          config,
        );
      } else {
        tickets[id] = new CompoundCalculatedTicket(
          ticket as CompoundTicket,
          config,
          tickets,
        );
      }

      tickets[id].calculate();
    });

  return tickets;
}
