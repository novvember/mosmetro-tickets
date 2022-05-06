export default class Ticket {
  constructor(ticketParams, fieldParams) {
    this._name = ticketParams.name;
    this._id = ticketParams.id;
    this._price = ticketParams.price;
    this._dayLimit = ticketParams.dayLimit;
    this._tripLimit = ticketParams.tripLimit;
    this._isValidForMetro = ticketParams.isValidForMetro;
    this._isValidForTat = ticketParams.isValidForTat;
    this._isSelectedByDefault = ticketParams.isSelectedByDefault;
    this._isIgnored = ticketParams.isIgnored;

    this._period = fieldParams.period;
    this._maxXNumber = fieldParams.maxXNumber;
    this._maxYNumber = fieldParams.maxYNumber;

    this._field = this._getEmptyField();
  }

  _getEmptyField() {
    const matrix = {};

    for (let x = 0; x <= this._maxXNumber; x++) {
      matrix[x] = {};
      for (let y = 0; y <= this._maxYNumber; y++) {
        matrix[x][y] = null;
      }
    }

    return matrix;
  }

  fillField() {
    for (let x = 0; x <= this._maxXNumber; x++) {
      for (let y = 0; y <= this._maxYNumber; y++) {
        this._field[x][y] = this._getAverageCost({metroTrips: x, tatTrips: y});
      }
    }
  }
}
