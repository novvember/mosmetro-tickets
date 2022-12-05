import Tickets from '../types/Tickets';
import Cell from '../types/Cell';
import AppConfig from '../types/AppConfig';
import SelectedTickets from '../types/SelectedTickets';
import TicketId from '../types/TicketId';
import FieldType from '../types/Field';

export default class Field {
  protected readonly appConfig: AppConfig;
  protected readonly tickets: Tickets;
  protected readonly selectedTickets: SelectedTickets;
  field: FieldType;
  minCost: number;
  maxCost: number;

  constructor(
    tickets: Tickets,
    selectedTickets: SelectedTickets,
    appConfig: AppConfig,
  ) {
    this.tickets = tickets;
    this.appConfig = appConfig;
    this.selectedTickets = selectedTickets;
    this.field = this.getInitialField();
    this.minCost = Infinity;
    this.maxCost = -Infinity;
    this.calculate();
  }

  protected getInitialField() {
    const initialField: FieldType = [];

    for (let y = 0; y <= this.appConfig.fieldMax; y++) {
      initialField[y] = [];

      for (let x = 0; x <= this.appConfig.fieldMax; x++) {
        const cell: Cell = { metro: x, tat: y, variants: {} };

        for (let id in this.tickets) {
          cell.variants[id] = this.tickets[id].field[y][x];
        }

        initialField[y][x] = cell;
      }
    }
    return initialField;
  }

  protected calculate() {
    for (let y = 0; y <= this.appConfig.fieldMax; y++) {
      for (let x = 0; x <= this.appConfig.fieldMax; x++) {
        const minCost = this.getMinCost(this.field[y][x]);

        this.field[y][x].minCost = minCost;
        this.minCost = Math.min(minCost.cost, this.minCost);
        this.maxCost = Math.max(minCost.cost, this.maxCost);
      }
    }
  }

  protected getMinCost({ variants }: Cell) {
    let cost = Infinity;
    let minId: TicketId = '';
    let name: string = '';

    for (let id in variants) {
      if (!this.selectedTickets[id] || variants[id] === null) continue;

      if (variants[id]! < cost) {
        cost = variants[id]!;
        minId = id;
        name = this.tickets[id].config.name;
      }
    }

    return { cost, id: minId, name };
  }
}
