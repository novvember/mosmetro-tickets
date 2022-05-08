import Section from "../components/Section.js";
import Cell from "../components/Cell.js";
import Field from "../components/Field.js";

import SimpleTicket from "../components/SimpleTicket.js";

import {axisXScaleLabelsSelector,
        axisYScaleLabelsSelector,
        axisScaleLabelTemplateSelector,
        axisScaleLabelSelector,
        cellTemplateSelector,
        cellSelector,
        cellsSelector,
        fieldParams} from "../utils/constants.js";

import {getNumbers} from "../utils/utils.js";
import ticketParams from "../utils/ticketParams.js";


// Генерация осей графика
console.log('Создание и отрисовка осей графика...');

function getScaleLabel(textContent) {
  const element = document
                    .querySelector(axisScaleLabelTemplateSelector)
                    .content
                    .querySelector(axisScaleLabelSelector)
                    .cloneNode(true);
  element.textContent = textContent;
  return element;
}

const axisXScaleLabels = new Section({
  items: getNumbers(0, fieldParams.maxXNumber, 1),
  renderer: getScaleLabel,
}, axisXScaleLabelsSelector);
axisXScaleLabels.renderItems();

const axisYScaleLabels = new Section({
items: getNumbers(0, fieldParams.maxYNumber, 1),
renderer: getScaleLabel,
}, axisYScaleLabelsSelector);
axisYScaleLabels.renderItems();
console.log('...Готово');


// Генерация пустого поля графика
console.log('Создание и отрисовка пустого поля графика...');

function getCell({x, y}) {
  if (!cells[x]) cells[x] = {};
  cells[x][y] = new Cell({x, y}, {templateSelector: cellTemplateSelector, elementSelector: cellSelector});
  return cells[x][y].renderElement();
}

function getCoordinates(maxXNumber, maxYNumber) {
  const coordinates = [];
  for (let y = maxXNumber; y >= 0; y--) {
    for (let x = 0; x <= maxYNumber; x++) {
      coordinates.push({x, y});
    }
  }
  return coordinates;
}

const cells = {}; // Хранит все элементы ячеек

const cellsSection = new Section({
  items: getCoordinates(fieldParams.maxXNumber, fieldParams.maxYNumber),
  renderer: getCell,
}, cellsSelector);
cellsSection.renderItems();
console.log('...Готово');


// Создание экземпляров билетов
console.log('Создание билетов и расчет их полей...');

const tickets = {};

ticketParams
  .filter(params => params.isIgnored === false)
  .forEach(params => {
    const ticketId = params.id;
    tickets[ticketId] = new SimpleTicket(params, fieldParams);
    tickets[ticketId].fillField();

    console.log(tickets[ticketId]);
  });

console.log('...Готово');



// Создание поля графика
console.log('Создание и расчет поля графика...');

const field = new Field(tickets, cells);
field._calculate();
field._render();
console.log(field);

console.log('...Готово');
