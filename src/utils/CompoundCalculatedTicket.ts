import CalculatedTickets from '../types/CalculatedTickets';
import Config from '../types/Config';
import { CompoundTicket } from '../types/Ticket';
import CalculatedTicket from './CalculatedTicket';

export default class CompoundCalculatedTicket extends CalculatedTicket {
  useForMetro: CalculatedTicket;
  useForTat: CalculatedTicket;

  constructor(
    ticket: CompoundTicket,
    config: Config,
    simpleTickets: CalculatedTickets,
  ) {
    super(ticket, config);
    this.useForMetro = simpleTickets[ticket.useForMetro];
    this.useForTat = simpleTickets[ticket.useForTat];
  }

  getCost({ metroTrips, tatTrips }: { metroTrips: number; tatTrips: number }) {
    const metroCost = this.useForMetro.field[metroTrips][0];
    const tatCost = this.useForTat.field[0][tatTrips];
    if (metroCost === null || tatCost === null) return null;
    return metroCost + tatCost;
  }
}
