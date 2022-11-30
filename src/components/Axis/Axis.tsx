import classNames from 'classnames';
import './Axis.css';

function Axis({ isX = false, isY = false, className }: any) {
  const min = 0;
  const max = 70;
  const step = 5;

  const numbers = new Array((max - min) / step + 1)
    .fill(0)
    .map((_, i) => 0 + i * step);

  return (
    <div
      className={classNames(
        'axis',
        className,
        { axis_type_x: isX },
        { axis_type_y: isY },
      )}
    >
      <span className="axis__label">
        Поездки на{' '}
        <span data-type="metro" title="Метро">
          метро
        </span>{' '}
        за месяц
      </span>

      <div className="axis__scale">
        {numbers.map((number) => {
          return (
            <span className="axis__scale-number" key={number}>
              {number}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Axis;
