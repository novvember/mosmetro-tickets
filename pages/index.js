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
        fieldParams,
        labelsSelector,
        ticketGroupTemplateSelector,
        ticketGroupSelector,
        ticketGroupTitleSelector,
        ticketsInGroupSelector,
        ticketTemplateSelector,
        ticketSelector,
        ticketCheckboxSelector,
        ticketTitleSelector} from "../utils/constants.js";

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

// Создание формы с выбором билетов
console.log('Создание формы с выбором билетов...');

function renderTicket(ticket) {
  const element = document
    .querySelector(ticketTemplateSelector)
    .content
    .querySelector(ticketSelector)
    .cloneNode(true);

  const checkbox = element.querySelector(ticketCheckboxSelector);
  const title = element.querySelector(ticketTitleSelector);

  element.classList.add(`ticket_id_${ticket.id}`);
  title.innerHTML = ticket.name;
  if (ticket.isSelectedByDefault) checkbox.checked = true;
  if (ticket.isIgnored) checkbox.disabled = true;

  return element;
}

function getTicketsByGroupId(groupId) {
  return ticketParams
    .filter(ticket => ticket.groupId === groupId);
}

function renderTicketGroup(groupId) {
  const element = document
                    .querySelector(ticketGroupTemplateSelector)
                    .content
                    .querySelector(ticketGroupSelector)
                    .cloneNode(true);

  const title = element.querySelector(ticketGroupTitleSelector);
  const ticketsInGroup = element.querySelector(ticketsInGroupSelector);

  title.textContent = ticketGroupParams[groupId].title;

  getTicketsByGroupId(groupId).forEach(ticket => {
    ticketsInGroup.append(renderTicket(ticket));
  });

  return element;
}

const ticketGroups = new Section(renderTicketGroup, labelsSelector);
ticketGroups.renderItems(Object.keys(ticketGroupParams));

console.log('...Готово');
