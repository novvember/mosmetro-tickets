export default class Cell {
  /**
   * Класс отвечает за работу с ячейкой в графике
   */
  constructor({x, y}, {templateSelector, elementSelector}) {
    this._x = x;
    this._y = y;
    this._templateSelector = templateSelector;
    this._elementSelector = elementSelector;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector)
                              .content
                              .querySelector(this._elementSelector)
                              .cloneNode(true);
    return template;
  }

  renderElement() {
    this._element = this._getTemplate();
    this._element.dataset.x = this._x;
    this._element.dataset.y = this._y;
    return this._element;
  }

  setMinTicket(value) {
    this._element.dataset.minTicket = value;
  }

  setMinCost(value) {
    this._element.dataset.minCost = value;
  }

  setScaleGroup(currentValue, minValue, maxValue) {
    const scaleGroup = Math.floor(100 * (currentValue - minValue) / (maxValue - minValue));
    this._element.dataset.scaleGroup = `${scaleGroup}`;

    const minSize = 0;
    const maxSize = 60;
    const size = Math.sqrt(Math.pow(minSize, 2) + (scaleGroup / 100) * Math.pow(maxSize, 2));
    this._element.style.backgroundSize = `${size}%`;
  }
}
