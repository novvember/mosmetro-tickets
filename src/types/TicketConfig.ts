import TicketId from './TicketId';

export interface TicketConfig {
  name: string;
  price: number | null;
  dayLimit: number | null;
  tripLimit: number | null;
  isValidForMetro: boolean;
  isValidForTat: boolean;
  id: string;
  groupId: string;
  isSelectedByDefault: boolean;
  isIgnored: boolean;
  dependencies?: TicketId[];
  color?: string;
}

export interface SimpleTicketConfig extends TicketConfig {
  groupId: Exclude<string, 'compound'>;
  price: number;
  dayLimit: number;
  tripLimit: number;
}

export interface CompoundTicketConfig extends TicketConfig {
  groupId: 'compound';
  price: null;
  dayLimit: null;
  tripLimit: null;
  useForMetro: string;
  useForTat: string;
}
