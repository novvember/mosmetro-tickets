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
  const cost = cell.minCost?.cost ?? 0;
  const color = useAppSelector((state) => selectConfigByTicketId(state, ticketId))?.color ?? '';

  const colorStyle: React.CSSProperties = {
    '--color': color,
  } as React.CSSProperties;

  const dotStyle: React.CSSProperties = getCellStyle(
    cost,
    minCost,
    maxCost);

  return (
    <div
      className="cell"
      style={colorStyle}
    >

      {
        ticketId.length > 0 &&
        <>
          <span
            className="cell__dot"
            style={dotStyle}
          ></span>

          <Tip cell={cell} />
        </>
      }

    </div>
  );
}

export default Cell;
