import { useState } from 'react';
import Axis from '../Axis/Axis';
import Cell from '../Cell/Cell';
import Field from '../Field/Field';
import Cells from '../../utils/Field';
import * as config from '../../utils/config';
import './Diagram.css';

function Diagram() {
  const min = 0;
  const max = 70;
  const step = 5;

  // const [field, setField] = useState(createField());

  // console.log(field);

  // function createField() {
  //   const field = new Cells(tickets, config.maxXNumber, config.maxYNumber);
  //   field.calculate();
  //   return field;
  // }

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
        {/* {field._currentField.flat().map((cell) => {
          return <Cell />;
        })} */}
        <Cell />
      </Field>
    </div>
  );
}

export default Diagram;
