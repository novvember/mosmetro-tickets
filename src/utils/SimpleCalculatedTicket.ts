import { SimpleTicket } from '../types/Ticket';
import CalculatedTicket from './CalculatedTicket';

export default class SimpleCalculatedTicket extends CalculatedTicket {
  data!: SimpleTicket;

  getCost({ metroTrips, tatTrips }: { metroTrips: number; tatTrips: number }) {
    if (this.data.isValidForMetro === false && metroTrips > 0) return null;
    if (this.data.isValidForTat === false && tatTrips > 0) return null;

    const tripsPerPeriod = metroTrips + tatTrips;
    if (tripsPerPeriod === 0) return 0;

    const tripsPerDay = tripsPerPeriod / this.config.period;
    const tripPeriod = 1 / tripsPerDay;

    // Определение количества дней до следующего билета...
    // ... через ограничение по истекшему времени
    const ticketPeriodByDays =
      Math.ceil(this.data.dayLimit / tripPeriod) * tripPeriod;
    // ... через ограничение по кончившимся поездка
    const ticketPeriodByTrips = tripPeriod * this.data.tripLimit;
    const ticketPeriod = Math.min(ticketPeriodByDays, ticketPeriodByTrips);

    const ticketsPerDay = 1 / ticketPeriod;
    const ticketsPerPeriod = ticketsPerDay * this.config.period;
    const costPerPeriod = ticketsPerPeriod * this.data.price;
    return +costPerPeriod.toFixed(2);
  }
}
