import Tickets from '../types/Tickets';
import AppConfig from '../types/AppConfig';
import { CompoundTicketConfig } from '../types/TicketConfig';
import Ticket from './Ticket';
import SimpleTicket from './SimpleTicket';

export default class CompoundTicket extends Ticket<CompoundTicketConfig> {
  readonly useForMetro: SimpleTicket | CompoundTicket;
  readonly useForTat: SimpleTicket | CompoundTicket;

  constructor(
    ticketConfig: CompoundTicketConfig,
    appConfig: AppConfig,
    simpleTickets: Tickets,
  ) {
    super(ticketConfig, appConfig);
    this.useForMetro = simpleTickets[ticketConfig.useForMetro];
    this.useForTat = simpleTickets[ticketConfig.useForTat];
    super.calculate();
  }

  protected getCost({
    metroTrips,
    tatTrips,
  }: {
    metroTrips: number;
    tatTrips: number;
  }) {
    const metroCost = this.useForMetro.field[0][metroTrips];
    const tatCost = this.useForTat.field[tatTrips][0];
    if (metroCost === null || tatCost === null) return null;
    return metroCost + tatCost;
  }
}
