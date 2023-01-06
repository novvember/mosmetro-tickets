import { AppConfigState } from '../store/appConfigSlice';
import {
  CompoundTicketConfig,
  SimpleTicketConfig,
} from '../types/TicketConfig';

export default abstract class Ticket<
  T extends SimpleTicketConfig | CompoundTicketConfig
> {
  readonly config: T;
  protected readonly appConfig: AppConfigState;
  readonly field: Array<Array<number | null>>;

  static isCompound(
    ticketConfig: SimpleTicketConfig | CompoundTicketConfig,
  ): ticketConfig is CompoundTicketConfig {
    return ticketConfig.groupId === 'compound';
  }

  constructor(ticket: T, appConfig: AppConfigState) {
    this.config = ticket;
    this.appConfig = appConfig;
    this.field = this.getEmptyField();
  }

  protected getEmptyField() {
    const field: Array<Array<number | null>> = [];
    for (let y = 0; y <= this.appConfig.fieldMax; y++) {
      field[y] = [];
      for (let x = 0; x <= this.appConfig.fieldMax; x++) {
        field[y][x] = null;
      }
    }
    return field;
  }

  protected abstract getCost({
    metroTrips,
    tatTrips,
  }: {
    metroTrips: number;
    tatTrips: number;
  }): number | null;

  protected calculate() {
    for (let y = 0; y <= this.appConfig.fieldMax; y++) {
      for (let x = 0; x <= this.appConfig.fieldMax; x++) {
        this.field[y][x] = this.getCost({
          metroTrips: x,
          tatTrips: y,
        });
      }
    }
  }
}
