import { CompoundTicketConfig } from '../types/TicketConfig';
import Ticket from './Ticket';
import TicketsFields from '../types/TicketFields';
import TicketField from '../types/TicketField';
import { AppConfigState } from '../store/appConfigSlice';

export default class CompoundTicket extends Ticket<CompoundTicketConfig> {
  readonly useForMetro: TicketField;
  readonly useForTat: TicketField;

  constructor(
    ticketConfig: CompoundTicketConfig,
    appConfig: AppConfigState,
    ticketsFields: TicketsFields,
  ) {
    super(ticketConfig, appConfig);
    this.useForMetro = ticketsFields[ticketConfig.useForMetro];
    this.useForTat = ticketsFields[ticketConfig.useForTat];
    super.calculate();
    this.field[0][0] = null;
  }

  protected getCost({
    metroTrips,
    tatTrips,
  }: {
    metroTrips: number;
    tatTrips: number;
  }) {
    const metroCost = this.useForMetro[0][metroTrips];
    const tatCost = this.useForTat[tatTrips][0];
    if (metroCost === null || tatCost === null) return null;
    return metroCost + tatCost;
  }
}
