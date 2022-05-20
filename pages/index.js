import Section from "../components/Section.js";
import Cell from "../components/Cell.js";
import Field from "../components/Field.js";

import SimpleTicket from "../components/SimpleTicket.js";
import CompoundTicket from "../components/CompoundTicket.js";
import Legend from "../components/Legend.js";

import {axisXScaleLabelsSelector,
        axisYScaleLabelsSelector,
        axisScaleLabelTemplateSelector,
        axisScaleLabelSelector,
        cellTemplateSelector,
        cellSelector,
        cellsSelector,
        fieldParams,
        legendSelector,
        legendLabelSelectors,
        legendGroupSelectors
      } from "../utils/constants.js";

import {getNumbers} from "../utils/utils.js";
import {ticketParams, ticketGroupParams} from "../utils/ticketParams.js";


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

const axisXScaleLabels = new Section(getScaleLabel, axisXScaleLabelsSelector);
axisXScaleLabels.renderItems(getNumbers(0, fieldParams.maxXNumber, 1));

const axisYScaleLabels = new Section(getScaleLabel, axisYScaleLabelsSelector);
axisYScaleLabels.renderItems(getNumbers(0, fieldParams.maxYNumber, 1));
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

const cellsSection = new Section(getCell, cellsSelector);
cellsSection.renderItems(getCoordinates(fieldParams.maxXNumber, fieldParams.maxYNumber));
console.log('...Готово');


// Создание экземпляров билетов
console.log('Создание билетов и расчет их полей...');

const tickets = {};

ticketParams
  .filter(params => params.isIgnored === false)
  .forEach(params => {
    const ticketId = params.id;
    const isCompound = params.groupId === 'compound';

    if (!isCompound) {
      tickets[ticketId] = new SimpleTicket(params, fieldParams);
    } else {
      tickets[ticketId] = new CompoundTicket(params, fieldParams, tickets);
    }

    tickets[ticketId].fillField();
    console.log(tickets[ticketId]);
  });

console.log('...Готово');


// Создание поля графика
console.log('Создание и расчет поля графика...');

const field = new Field(tickets, cells);
field.calculate();
field.render();
console.log(field);

console.log('...Готово');


// Создание формы с выбором билетов
console.log('Создание формы с выбором билетов...');

const ticketsLegend = new Legend(ticketParams, ticketGroupParams, legendLabelSelectors, legendGroupSelectors, handleSubmitLegend);

const ticketsLegendSection = new Section((data) => ticketsLegend.renderGroup(data), legendSelector);
ticketsLegendSection.renderItems(Object.keys(ticketGroupParams));

console.log('...Готово');


function handleSubmitLegend(seletedTickets) {
  field.setSelectedTickets(seletedTickets);
  field.calculate();
  field.render();
}
