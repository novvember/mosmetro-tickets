import Cell from '../../types/Cell';
import './Tip.css';

function Tip({ cell }: { cell: Cell }) {
  const { metro, tat, minCost } = cell;
  const names = minCost ? minCost.name.split('+').map((s) => s.trim()) : null;

  return (
    <div className="tip">
      {names &&
        names.map((name, i) => {
          return (
            <p key={i} className="tip__ticket">
              {name}
            </p>
          );
        })}

      {names && <p className="tip__cost">{minCost?.cost.toFixed(0)} ₽/месяц</p>}

      <p className="tip__info">{metro} раз на метро</p>

      <p className="tip__info">{tat} раз на ТАТ</p>
    </div>
  );
}

export default Tip;
