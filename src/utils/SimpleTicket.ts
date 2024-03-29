import { AppConfigState } from '../store/appConfigSlice';
import { SimpleTicketConfig } from '../types/TicketConfig';
import Ticket from './Ticket';

export default class SimpleTicket extends Ticket<SimpleTicketConfig> {
  constructor(ticket: SimpleTicketConfig, config: AppConfigState) {
    super(ticket, config);
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
    if (this.config.isValidForMetro === false && metroTrips > 0) return null;
    if (this.config.isValidForTat === false && tatTrips > 0) return null;

    const tripsPerPeriod = metroTrips + tatTrips;
    if (tripsPerPeriod === 0) return 0;

    const tripsPerDay = tripsPerPeriod / this.appConfig.daysInPeriod;
    const tripPeriod = 1 / tripsPerDay;

    // Определение количества дней до следующего билета...
    // ... через ограничение по истекшему времени
    const ticketPeriodByDays =
      Math.ceil(this.config.dayLimit / tripPeriod) * tripPeriod;
    // ... через ограничение по кончившимся поездка
    const ticketPeriodByTrips = tripPeriod * this.config.tripLimit;
    const ticketPeriod = Math.min(ticketPeriodByDays, ticketPeriodByTrips);

    const ticketsPerDay = 1 / ticketPeriod;
    const ticketsPerPeriod = ticketsPerDay * this.appConfig.daysInPeriod;
    const costPerPeriod = ticketsPerPeriod * this.config.price;
    return +costPerPeriod.toFixed(2);
  }
}
