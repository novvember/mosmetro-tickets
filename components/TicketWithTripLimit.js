import Ticket from "./Ticket.js";

export default class TicketWithTripLimit extends Ticket {
  constructor(ticketParams) {
    super(ticketParams);
    this._expireTripsPerDay = this._tripLimit / this._dayLimit;
  }

  _getAverageCost({metroTrips, tatTrips}) {
    if(this._isValidForMetro === false && metroTrips > 0) return null;
    if(this._isValidForTat === false && tatTrips > 0) return null;

    const tripsPerPeriod = metroTrips + tatTrips;
    if (tripsPerPeriod === 0) return 0;

    const tripsPerDay = tripsPerPeriod / this._period;

    let ticketsPerDay = tripsPerDay / this._tripLimit;

    // Пересчет на время до следующего билета, если сгорают поездки
    if (tripsPerDay < this._expireTripsPerDay) {
      const tripPeriod = 1 / tripsPerDay;
      const ticketPeriod = Math.ceil(this._dayLimit / tripPeriod) * tripPeriod;
      ticketsPerDay = 1 / ticketPeriod;
    }

    const ticketsPerPeriod = ticketsPerDay * this._period;
    const costPerPeriod = ticketsPerPeriod * this._price;
    return costPerPeriod.toFixed(2);
  }
}
