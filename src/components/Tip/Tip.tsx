import Cell from '../../types/Cell';
import './Tip.css';

function Tip({ cell }: { cell: Cell }) {
  const { metro, tat, minCost } = cell;

  return (
    <div className="tip">
      {minCost && (
        <>
          <p className="tip__ticket">{minCost.name}</p>
          <p className="tip__cost">{minCost?.cost.toFixed(0)} ₽/месяц</p>
        </>
      )}

      <p className="tip__info">{metro} раз на метро</p>
      <p className="tip__info">{tat} раз на ТАТ</p>
    </div>
  );
}

export default Tip;
