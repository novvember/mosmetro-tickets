import Ticket from "./Ticket.js";

export default class TicketWithTripLimit extends Ticket {
  constructor(ticketParams) {
    super(ticketParams);
    this._expireLimitPerDay = this._tripLimit / this._dayLimit;
    this._field = this._fillField();
  }

  _fillField() {
    for (let x = 0; x <= this._maxXNumber; x++) {
      for (let y = 0; y <= this._maxYNumber; y++) {
        this._field[x][y] = this._getAverageCost({metroTrips: x, tatTrips: y});
      }
    }
  }

  _getAverageCost({metroTrips, tatTrips}) {
    const tripsPerPeriod = metroTrips + tatTrips;
    let tripsPerDay = tripsPerPeriod / this._period;

    // Проверка на сгорание поездок
    if(tripsPerDay < this._expireLimitPerDay) tripsPerDay = this._expireLimitPerDay;

    const ticketsPerDay = tripsPerDay / this._tripLimit;
    const ticketsPerPeriod = ticketsPerDay * this._period;
    const costPerDay = ticketsPerDay * this._price;
    const costPerPeriod = costPerDay * this._period;

    return costPerPeriod;
  }
}
