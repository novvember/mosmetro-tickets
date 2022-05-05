import Ticket from "./Ticket.js";

export default class TicketWithTripLimit extends Ticket {
  constructor(ticketParams) {
    super(ticketParams);
    this._expireTripsPerDay = this._tripLimit / this._dayLimit;
  }

  fillField() {
    for (let x = 0; x <= this._maxXNumber; x++) {
      for (let y = 0; y <= this._maxYNumber; y++) {
        this._field[x][y] = this._getAverageCost({metroTrips: x, tatTrips: y});
      }
    }
  }

  _getAverageCost({metroTrips, tatTrips}) {
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
    return costPerPeriod;
  }
}
