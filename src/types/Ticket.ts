interface Ticket {
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
}

export interface GeneralTicket extends Ticket {
  price: number;
  dayLimit: number;
  tripLimit: number;
}

export interface CompoundTicket extends Ticket {
  price: null;
  dayLimit: null;
  tripLimit: null;
  useForMetro: string;
  useForTat: string;
}
