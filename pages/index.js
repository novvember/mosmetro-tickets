import Section from "../components/Section.js";

import { axisXScaleLabelsSelector,
        axisYScaleLabelsSelector,
        axisScaleLabelTemplateSelector,
        axisScaleLabelSelector,
        maxXNumber,
        maxYNumber} from "../utils/constants.js";





function getEvenNumbers(min, max) {
  const numbers = [];
  for (let number = min; number <= max; number += 2) {
    numbers.push(number);
  }
  return numbers;
}

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
    items: getEvenNumbers(0, maxXNumber),
    renderer: getScaleLabel,
  }, axisXScaleLabelsSelector);
axisXScaleLabels.renderItems();

const axisYScaleLabels = new Section({
  items: getEvenNumbers(0, maxYNumber),
  renderer: getScaleLabel,
}, axisYScaleLabelsSelector);
axisYScaleLabels.renderItems();

