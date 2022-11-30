import Diagram from '../Diagram/Diagram';
import './Figure.css';

function Figure() {
  return (
    <section className="figure">

      <Diagram />

      


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

export default Figure;
