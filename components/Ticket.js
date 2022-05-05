export default class Ticket {
  constructor(ticketParams) {
    this._name = ticketParams.name;
    this._id = ticketParams.id;
    this._price = ticketParams.price;
    this._dayLimit = ticketParams.dayLimit;
    this._tripLimit = ticketParams.tripLimit;
    this._isValidForMetro = ticketParams.isValidForMetro;
    this._isValidForTat = ticketParams.isValidForTat;
  }
}
