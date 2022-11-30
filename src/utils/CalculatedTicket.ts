import { CompoundTicket, SimpleTicket } from '../types/Ticket';
import Config from '../types/Config';
import CompoundCalculatedTicket from './CompoundCalculatedTicket';

export default class CalculatedTicket {
  data: SimpleTicket | CompoundTicket;
  config: Config;
  field: Array<Array<number | null>>;

  constructor(ticket: SimpleTicket | CompoundTicket, config: Config) {
    this.data = ticket;
    this.config = config;
    this.field = this.getEmptyField();
  }

  protected getEmptyField() {
    const field: Array<Array<number | null>> = [];
    for (let y = 0; y <= this.config.maxYNumber; y++) {
      field[y] = [];
      for (let x = 0; x <= this.config.maxXNumber; x++) {
        field[y][x] = null;
      }
    }
    return field;
  }

  getCost({
    metroTrips,
    tatTrips,
  }: {
    metroTrips: number;
    tatTrips: number;
  }): number | null {
    return 0;
  }

  calculate() {
    for (let y = 0; y <= this.config.maxYNumber; y++) {
      for (let x = 0; x <= this.config.maxXNumber; x++) {
        this.field[y][x] = this.getCost({
          metroTrips: x,
          tatTrips: y,
        });
      }
    }
  }
}
