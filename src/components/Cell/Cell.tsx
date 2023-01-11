import { useAppSelector } from '../../store';
import { selectMaxCost, selectMinCost } from '../../store/globalFieldSlice';
import { selectConfigByTicketId } from '../../store/ticketsSlice';
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
  const ticketId = cell.minCost?.id ?? '';
  const color = useAppSelector((state) => selectConfigByTicketId(state, ticketId))?.color ?? '';

  const style: React.CSSProperties = {
    '--color': color,
  } as React.CSSProperties;

  return (
    <div
      className="cell"
      style={style}
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
