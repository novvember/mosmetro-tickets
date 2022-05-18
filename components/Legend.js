export default class Legend {
  constructor (ticketParams, ticketGroupParams, legendLabelSelectors, legendGroupSelectors) {
    this._ticketParams = ticketParams;

    this._ticketGroupParams = ticketGroupParams;

    this._legendLabelTemplateSelector = legendLabelSelectors.templateSelector;
    this._legendLabelSelector = legendLabelSelectors.labelSelector;
    this._legendLabelCheckboxSelector = legendLabelSelectors.checkboxSelector;
    this._legendLabelTitleSelector = legendLabelSelectors.titleSelector;

    this._legendGroupTemplateSelector = legendGroupSelectors.templateSelector;
    this._legendGroupSelector = legendGroupSelectors.groupSelector;
    this._legendGroupTitleSelector = legendGroupSelectors.titleSelector;
    this._legendTicketListSelector = legendGroupSelectors.ticketListSelector;
  }

  _getElementFromTemplate(templateSelector, elementSelector) {
    const element = document
      .querySelector(templateSelector)
      .content
      .querySelector(elementSelector)
      .cloneNode(true);
    return element;
  }


  _getTicketsByGroupId(groupId) {
    return this._ticketParams
      .filter(ticket => ticket.groupId === groupId);
  }


  _renderLabel(ticket) {
    const element = this._getElementFromTemplate(this._legendLabelTemplateSelector, this._legendLabelSelector);

    const checkbox = element.querySelector(this._legendLabelCheckboxSelector);
    const title = element.querySelector(this._legendLabelTitleSelector);

    element.classList.add(`ticket_id_${ticket.id}`);
    title.innerHTML = ticket.name;
    if (ticket.isSelectedByDefault) checkbox.checked = true;
    if (ticket.isIgnored) checkbox.disabled = true;

    return element;
  }


  renderGroup(groupId) {
    const element = this._getElementFromTemplate(this._legendGroupTemplateSelector, this._legendGroupSelector);

    const title = element.querySelector(this._legendGroupTitleSelector);
    const ticketList = element.querySelector(this._legendTicketListSelector);

    title.textContent = this._ticketGroupParams[groupId].title;

    this._getTicketsByGroupId(groupId).forEach(ticket => {
      ticketList.append(this._renderLabel(ticket));
    });

    return element;
  }
}
