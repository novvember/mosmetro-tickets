import CalculatedTickets from '../types/CalculatedTickets';
import Config from '../types/Config';

type TicketId = keyof CalculatedTickets;

type SelectedTickets = {
  [key: TicketId]: boolean;
};

type Cell = {
  metro: number;
  tat: number;
  variants: {
    [key: TicketId]: number | null;
  };
  minCost?: {
    cost: number;
    id: TicketId;
  };
};

type FieldType = Array<Array<Cell>>;

export default class Field {
  allTickets: CalculatedTickets;
  config: Config;
  selectedTickets: SelectedTickets;
  field: FieldType;
  minCost: number;
  maxCost: number;

  constructor(tickets: CalculatedTickets, config: Config) {
    this.allTickets = tickets;
    this.config = config;
    this.selectedTickets = this.getInitialSelectedTickets();
    this.field = this.getInitialField();
    this.minCost = Infinity;
    this.maxCost = -Infinity;
  }

  getInitialSelectedTickets() {
    const selectedTickets: SelectedTickets = {};

    for (let id in this.allTickets) {
      selectedTickets[id] = this.allTickets[id].data.isSelectedByDefault;
    }
    return selectedTickets;
  }

  setSelectedTickets(seletedTickets: SelectedTickets) {
    this.selectedTickets = seletedTickets;
  }

  getInitialField() {
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

  calculate() {
    for (let y = 0; y <= this.config.maxYNumber; y++) {
      for (let x = 0; x <= this.config.maxXNumber; x++) {
        const minCost = this.getMinCost(this.field[y][x]);

        this.field[y][x].minCost = minCost;
        this.minCost = Math.min(minCost.cost, this.minCost);
        this.maxCost = Math.max(minCost.cost, this.maxCost);
      }
    }
  }

  getMinCost({ variants }: Cell) {
    let minCost = Infinity;
    let minConstId: TicketId = '';

    for (let id in variants) {
      // Проверка, выбрал ли этот билет для расчета
      if (!this.selectedTickets[id] || variants[id] === null) continue;

      if (variants[id]! < minCost) {
        minCost = variants[id]!;
        minConstId = id;
      }
    }

    return { cost: minCost, id: minConstId };
  }
}
