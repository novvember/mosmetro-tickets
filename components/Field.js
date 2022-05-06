export default class Field {
  constructor(tickets) {
    this._tickets = tickets;
    this._selectedTickets = this._setSelectedTicketsByDefault();
    this._currentField = this._getInitialField();
  }

  _setSelectedTicketsByDefault() {
    const seletedTickets = {};
    for (let ticketId in this._tickets) {
      seletedTickets[ticketId] = this._tickets[ticketId]._isSelectedByDefault;
    }
    return seletedTickets;
  }

  _setSelectedTickets (seletedTickets) {
    this._selectedTickets = seletedTickets;
  }

  _calculate() {

  }

  _render() {

  }

  _clear() {

  }

  _getInitialField() {
    this._setFieldSizes();

    const initialField = {};

    // Записать значения всех билетов в ячейку
    for (let x = 0; x <= this._maxXNumber; x++) {
      initialField[x] = {};
      for (let y = 0; y <= this._maxYNumber; y++) {
        initialField[x][y] = {};
        initialField[x][y].ticketResults = {};
        for (let ticketId in this._tickets) {
          initialField[x][y].ticketResults[ticketId] = this._tickets[ticketId]._field[x][y];
        }
      }
    }
    return initialField;
  }

  _setFieldSizes() {
    // Поле первого в списке билета как образец размера
    const sampleField = this._tickets[Object.keys(this._tickets)[0]]._field;
    this._maxXNumber = Object.keys(sampleField).length - 1;
    this._maxYNumber = Object.keys(sampleField[0]).length - 1;
  }
}
