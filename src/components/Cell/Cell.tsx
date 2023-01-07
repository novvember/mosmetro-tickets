import { useAppSelector } from '../../store';
import { selectMaxCost, selectMinCost } from '../../store/globalFieldSlice';
import CellType from '../../types/Cell';
import getCellStyle from '../../utils/getCellStyle';

import Tip from '../Tip/Tip';

import './Cell.css';

type CellProps = {
  cell: CellType;
};

function Cell({ cell }: CellProps) {
  const minCost = useAppSelector(selectMinCost) ?? 0;
  const maxCost = useAppSelector(selectMaxCost) ?? 1;

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
          minCost,
          maxCost,
        )}
      ></span>

      <Tip cell={cell} />
    </div>
  );
}

export default Cell;
