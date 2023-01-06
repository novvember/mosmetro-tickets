import Cell from '../types/Cell';
import TicketId from '../types/TicketId';
import GlobalField from '../types/GlobalField';
import TicketsSelected from '../types/TicketsSelected';
import TicketsFields from '../types/TicketFields';
import { AppConfigState } from '../store/appConfigSlice';
import TicketsConfigs from '../types/TicketsConfigs';

export default class Field {
  protected readonly appConfig: AppConfigState;
  protected readonly ticketsConfigs: TicketsConfigs;
  protected readonly ticketsFields: TicketsFields;
  protected readonly ticketsSelected: TicketsSelected;
  field: GlobalField;
  minCost: number;
  maxCost: number;

  constructor(
    ticketsConfigs: TicketsConfigs,
    ticketsFields: TicketsFields,
    ticketsSelected: TicketsSelected,
    appConfig: AppConfigState,
  ) {
    this.ticketsConfigs = ticketsConfigs;
    this.ticketsFields = ticketsFields;
    this.appConfig = appConfig;
    this.ticketsSelected = ticketsSelected;
    this.field = this.getInitialField();
    this.minCost = Infinity;
    this.maxCost = -Infinity;
    this.calculate();
  }

  protected getInitialField() {
    const initialField: GlobalField = [];

    for (let y = 0; y <= this.appConfig.fieldMax; y++) {
      initialField[y] = [];

      for (let x = 0; x <= this.appConfig.fieldMax; x++) {
        const cell: Cell = { metro: x, tat: y, variants: {} };

        for (let { id } of this.ticketsConfigs) {
          cell.variants[id] = this.ticketsFields[id][y][x];
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
      if (!this.ticketsSelected[id] || variants[id] === null) continue;

      if (variants[id]! < cost) {
        cost = variants[id]!;
        minId = id;
        name =
          this.ticketsConfigs.find((config) => config.id === id)?.name ?? '';
      }
    }

    return { cost, id: minId, name };
  }
}
