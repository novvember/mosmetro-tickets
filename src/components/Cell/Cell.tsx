import CellType from '../../types/Cell';
import Tip from '../Tip/Tip';
import './Cell.css';

type CellProps = {
  cell: CellType;
  minCost: number;
  maxCost: number;
};

function Cell({ cell, minCost, maxCost }: any) {
  return (
    <div
      className="cell"
      data-x=""
      data-y=""
      data-ticket={cell.minCost.id}
      data-cost={cell.minCost.cost}
    >
      <span
        className="cell__dot"
        style={getCellStyle(+cell.minCost.cost, minCost, maxCost)}
      ></span>

      <Tip cell={cell} />
    </div>
  );
}

function getCellStyle(value: any, min: any, max: any) {
  const ratio = (value - min) / (max - min);

  const minS = 0.01;
  const pivotS = 3.14 / 4;
  const maxS = 0.88;

  const s = ratio * (maxS - minS) + minS;

  if (s <= pivotS) {
    const x = 100 * Math.sqrt((4 * s) / 3.14);
    return {
      borderRadius: '50%',
      width: `${x.toFixed(1)}%`,
    };
  } else {
    const x = 100 * Math.sqrt((1 - s) / (4 - 3.14));
    return {
      borderRadius: `${x.toFixed(1)}%`,
      width: '100%',
    };
  }
}

export default Cell;
