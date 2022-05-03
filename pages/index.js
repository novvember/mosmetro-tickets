import Section from "../components/Section.js";

import { axisXScaleLabelsSelector,
        axisYScaleLabelsSelector,
        axisScaleLabelTemplateSelector,
        axisScaleLabelSelector,
        maxXNumber,
        maxYNumber} from "../utils/constants.js";

import {getNumbers} from "../utils/utils.js";



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
    items: getNumbers(0, maxXNumber, 1),
    renderer: getScaleLabel,
  }, axisXScaleLabelsSelector);
axisXScaleLabels.renderItems();

const axisYScaleLabels = new Section({
  items: getNumbers(0, maxYNumber, 1),
  renderer: getScaleLabel,
}, axisYScaleLabelsSelector);
axisYScaleLabels.renderItems();

