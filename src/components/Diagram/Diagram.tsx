import './Diagram.css';

function Diagram() {
  return (
    <section className="canvas">

      
      <div className="plot">
        <p className="plot__axis-label plot__axis-label_axis_x">
          Поездки на{' '}
          <span
            className="plot__transport-name plot__transport-name_type_metro"
            title="Метро"
          >
            метро
          </span>{' '}
          за месяц
        </p>
        <div className="plot__scale-labels plot__scale-labels_axis_x"></div>
        <p className="plot__axis-label plot__axis-label_axis_y">
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
        </p>
        <div className="plot__scale-labels plot__scale-labels_axis_y"> </div>
        <div className="plot__cells"></div>
        <template className="template__plot__scale-number">
          <p className="plot__scale-number">#</p>
        </template>
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

      <form className="legend">
        <template className="template__legend-group">
          <fieldset className="legend-group">
            <h2 className="legend-group__title">#</h2>
            <ul className="legend-group__ticket-list"></ul>
          </fieldset>
        </template>

        <template className="template__legend-label">
          <li className="legend-label">
            <label className="legend-label__label">
              <input className="legend-label__checkbox" type="checkbox" />
              <span className="legend-label__title">#</span>
            </label>
          </li>
        </template>
      </form>
    </section>
  );
}

export default Diagram;
