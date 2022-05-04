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
    this._element.classList.add(`${this._elementSelector.slice(1)}_${this._x}_${this._y}`);
    return this._element;
  }
}
