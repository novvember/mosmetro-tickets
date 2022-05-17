import Ticket from "./Ticket.js";

export default class SimpleTicket extends Ticket {

  _getAverageCost({metroTrips, tatTrips}) {
    if(this._isValidForMetro === false && metroTrips > 0) return null;
    if(this._isValidForTat === false && tatTrips > 0) return null;

    const tripsPerPeriod = metroTrips + tatTrips;
    if (tripsPerPeriod === 0) return 0;

    const tripsPerDay = tripsPerPeriod / this._period;
    const tripPeriod = 1 / tripsPerDay;

    // Определение количества дней до следующего билета...
    // ... через ограничение по истекшему времени
    const ticketPeriodByDays = Math.ceil(this._dayLimit / tripPeriod) * tripPeriod;
    // ... через ограничение по кончившимся поездка
    const ticketPeriodByTrips = tripPeriod * this._tripLimit;
    const ticketPeriod = Math.min(ticketPeriodByDays, ticketPeriodByTrips);

    const ticketsPerDay = 1 / ticketPeriod;
    const ticketsPerPeriod = ticketsPerDay * this._period;
    const costPerPeriod = ticketsPerPeriod * this._price;
    return +costPerPeriod.toFixed(2);
  }
}
