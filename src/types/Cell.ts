import TicketId from './TicketId';

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

export default Cell;
