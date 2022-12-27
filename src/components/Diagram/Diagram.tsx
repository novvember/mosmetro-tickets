import Axis from '../Axis/Axis';
import Cell from '../Cell/Cell';
import Field from '../Field/Field';

import './Diagram.css';
import flatField from '../../utils/flatField';
import { useAppSelector } from '../../store';
import {
  fieldSelector,
  maxCostSelector,
  minCostSelector,
} from '../../store/selectors';

function Diagram() {
  const field = useAppSelector(fieldSelector);
  const minCost = useAppSelector(minCostSelector);
  const maxCost = useAppSelector(maxCostSelector);

  return (
    <div className="diagram">
      <Axis isX className="diagram__axis_type_x">
        Поездки на{' '}
        <span data-type="metro" title="Метро">
          метро
        </span>{' '}
        за месяц
      </Axis>

      <Axis isY className="diagram__axis_type_y">
        Поездки на{' '}
        <span data-type="tram" title="Трамвай">
          трамваях,
        </span>{' '}
        <span data-type="bus" title="Автобус">
          автобусах,
        </span>{' '}
        <span data-type="trolley" title="Троллейбус">
          троллейбусах
        </span>{' '}
        за месяц
      </Axis>

      <Field className="diagram__field">
        {field &&
          flatField(field).map((cell: any, i: number) => {
            return (
              <Cell cell={cell} key={i} minCost={minCost} maxCost={maxCost} />
            );
          })}
      </Field>
    </div>
  );
}

export default Diagram;
