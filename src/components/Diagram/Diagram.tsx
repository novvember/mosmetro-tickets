import Axis from '../Axis/Axis';
import './Diagram.css';

function Diagram() {
  return (
    <div className="diagram">

      {/* Горизонтальная ось */}
      <Axis isX className="diagram__axis_type_x" />
      <Axis isY className="diagram__axis_type_y" />




      {/* Вертикальная ось */}

      {/* <p className="plot__axis-label plot__axis-label_axis_y">
        Поездки на{' '}
        <span
          className="plot__transport-name plot__transport-name_type_tram"
          title="Трамвай"
        >
          трамваях,
        </span>{' '}
        <span
          className="plot__transport-name plot__transport-name_type_bus"
          title="Автобус"
        >
          автобусах,
        </span>{' '}
        <span
          className="plot__transport-name plot__transport-name_type_trolley"
          title="Троллейбус"
        >
          троллейбусах
        </span>{' '}
        за месяц
      </p> */}
      {/* <div className="plot__scale-labels plot__scale-labels_axis_y"> </div> */}

{/* Поле */}
      <div className="plot__cells diagram__field"></div>

{/* Цифра в шкале */}
      <template className="template__plot__scale-number">
        <p className="plot__scale-number">#</p>
      </template>

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
