import Axis from '../Axis/Axis';
import './Diagram.css';

function Diagram() {
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

      {/* Поле */}
      <div className="plot__cells diagram__field"></div>

      {/* Ячейка */}
      <template className="template__plot__cell">
        <div
          className="plot__cell"
          data-x=""
          data-y=""
          data-min-ticket=""
          data-min-cost=""
        ></div>
      </template>
    </div>
  );
}

export default Diagram;
