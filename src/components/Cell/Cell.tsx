import CellType from '../../types/Cell';
import getCellStyle from '../../utils/getCellStyle';

import Tip from '../Tip/Tip';

import './Cell.css';

type CellProps = {
  cell: CellType;
  minCost: number | null;
  maxCost: number | null;
};

function Cell({ cell, minCost, maxCost }: CellProps) {
  return (
    <div
      className="cell"
      data-x=""
      data-y=""
      data-ticket={cell.minCost?.id ?? ''}
      data-cost={cell.minCost?.cost ?? 0}
    >
      <span
        className="cell__dot"
        style={getCellStyle(
          cell.minCost?.cost ?? 0,
          minCost ?? 0,
          maxCost ?? 1,
        )}
      ></span>

      <Tip cell={cell} />
    </div>
  );
}

export default Cell;
