import CalculatedTickets from '../types/CalculatedTickets';
import Cell from '../types/Cell';
import Config from '../types/Config';
import SelectedTickets from '../types/SelectedTickets';
import TicketId from '../types/TicketId';
import FieldType from '../types/Field';

export default class Field {
  protected readonly config: Config;
  protected readonly allTickets: CalculatedTickets;
  protected readonly selectedTickets: SelectedTickets;
  field: FieldType;
  minCost: number;
  maxCost: number;

  constructor(
    tickets: CalculatedTickets,
    selectedTickets: SelectedTickets,
    config: Config,
  ) {
    this.allTickets = tickets;
    this.config = config;
    this.selectedTickets = selectedTickets;
    this.field = this.getInitialField();
    this.minCost = Infinity;
    this.maxCost = -Infinity;
    this.calculate();
  }

  protected getInitialField() {
    const initialField: FieldType = [];

    for (let y = 0; y <= this.config.maxYNumber; y++) {
      initialField[y] = [];

      for (let x = 0; x <= this.config.maxXNumber; x++) {
        const cell: Cell = { metro: x, tat: y, variants: {} };

        for (let id in this.allTickets) {
          cell.variants[id] = this.allTickets[id].field[y][x];
        }

        initialField[y][x] = cell;
      }
    }
    return initialField;
  }

  protected calculate() {
    for (let y = 0; y <= this.config.maxYNumber; y++) {
      for (let x = 0; x <= this.config.maxXNumber; x++) {
        const minCost = this.getMinCost(this.field[y][x]);

        this.field[y][x].minCost = minCost;
        this.minCost = Math.min(minCost.cost, this.minCost);
        this.maxCost = Math.max(minCost.cost, this.maxCost);
      }
    }
  }

  protected getMinCost({ variants }: Cell) {
    let minCost = Infinity;
    let minConstId: TicketId = '';

    for (let id in variants) {
      if (!this.selectedTickets[id] || variants[id] === null) continue;

      if (variants[id]! < minCost) {
        minCost = variants[id]!;
        minConstId = id;
      }
    }

    return { cost: minCost, id: minConstId };
  }
}
