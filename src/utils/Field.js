import Cell from './Cell';
import { maxXNumber, maxYNumber } from './config';

export default class Field {
  constructor(tickets, maxXNumber, maxYNumber) {
    this._tickets = tickets;
    this._selectedTickets = this._setSelectedTicketsByDefault();
    this._currentField = this._getInitialField();
    this._cells = {};
  }

  _setSelectedTicketsByDefault() {
    const seletedTickets = {};
    for (let ticketId in this._tickets) {
      seletedTickets[ticketId] = this._tickets[ticketId]._isSelectedByDefault;
    }
    return seletedTickets;
  }

  setSelectedTickets(seletedTickets) {
    this._selectedTickets = seletedTickets;
  }

  calculate() {
    this._fieldMinValue = Infinity;
    this._fieldMaxValue = -Infinity;

    for (let x = 0; x <= this._maxXNumber; x++) {
      for (let y = 0; y <= this._maxYNumber; y++) {
        const minCost = this._getMinCost(this._currentField[x][y].ticketValues);
        this._currentField[x][y].minCost = minCost;
        if (minCost.value < this._fieldMinValue)
          this._fieldMinValue = minCost.value;
        if (minCost.value > this._fieldMaxValue)
          this._fieldMaxValue = minCost.value;
      }
    }
  }

  _getMinCost(tickets) {
    let minCostValue = Infinity;
    let minConstTicketId = '';

    for (let ticketId in tickets) {
      // Проверка, выбрал ли этот билет для расчета
      if (this._selectedTickets[ticketId] === false) continue;

      if (tickets[ticketId] !== null && tickets[ticketId] < minCostValue) {
        minCostValue = tickets[ticketId];
        minConstTicketId = ticketId;
      }
    }

    return { value: minCostValue, ticketId: minConstTicketId };
  }

  render() {
    for (let x = 0; x <= this._maxXNumber; x++) {
      for (let y = 0; y <= this._maxYNumber; y++) {
        this._cells[x][y].setMinTicket(
          this._currentField[x][y].minCost.ticketId,
        );
        this._cells[x][y].setMinCost(this._currentField[x][y].minCost.value);
        this._cells[x][y].setScaleGroup(
          this._currentField[x][y].minCost.value,
          this._fieldMinValue,
          this._fieldMaxValue,
        );
      }
    }
  }

  _clear() {
    for (let x = 0; x <= this._maxXNumber; x++) {
      for (let y = 0; y <= this._maxYNumber; y++) {
        this._cells[x][y].setMinTicket('');
        this._cells[x][y].setMinCost('');
        // this._cells[x][y].setScaleGroup('');
      }
    }
  }

  _getInitialField() {
    this._setFieldSizes();

    const initialField = [];

    // Записать значения всех билетов в ячейку
    for (let x = 0; x <= this._maxXNumber; x++) {
      initialField[x] = [];
      for (let y = 0; y <= this._maxYNumber; y++) {
        initialField[x][y] = {};
        initialField[x][y].ticketValues = {};
        for (let ticketId in this._tickets) {
          initialField[x][y].ticketValues[ticketId] = this._tickets[
            ticketId
          ]._field[x][y];
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
