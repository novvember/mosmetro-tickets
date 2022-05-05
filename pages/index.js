import Section from "../components/Section.js";
import Cell from "../components/Cell.js";

import TicketWithTripLimit from "../components/TicketWithTripLimit.js";

import { axisXScaleLabelsSelector,
        axisYScaleLabelsSelector,
        axisScaleLabelTemplateSelector,
        axisScaleLabelSelector,
        maxXNumber,
        maxYNumber,
        cellTemplateSelector,
        cellSelector,
        cellsSelector} from "../utils/constants.js";

import {getNumbers} from "../utils/utils.js";
import ticketParams from "../utils/ticketParams.js";



function getScaleLabel(textContent) {
  const element = document
                    .querySelector(axisScaleLabelTemplateSelector)
                    .content
                    .querySelector(axisScaleLabelSelector)
                    .cloneNode(true);
  element.textContent = textContent;
  return element;
}

function getCell({x, y}) {
  const cell = new Cell({x, y}, {templateSelector: cellTemplateSelector, elementSelector: cellSelector});
  return cell.renderElement();
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

const axisXScaleLabels = new Section({
    items: getNumbers(0, maxXNumber, 1),
    renderer: getScaleLabel,
  }, axisXScaleLabelsSelector);
axisXScaleLabels.renderItems();

const axisYScaleLabels = new Section({
  items: getNumbers(0, maxYNumber, 1),
  renderer: getScaleLabel,
}, axisYScaleLabelsSelector);
axisYScaleLabels.renderItems();

const cells = new Section({
  items: getCoordinates(maxXNumber, maxYNumber),
  renderer: getCell,
}, cellsSelector);
cells.renderItems();


const tickets = {};
for (let i = 0; i < 3; i++) {
  const ticketId = ticketParams[i].id;
  tickets[ticketId] = new TicketWithTripLimit(ticketParams[i]);
  tickets[ticketId].fillField();

  console.log(tickets[ticketId]);
}
