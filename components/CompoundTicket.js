import Ticket from "./Ticket.js";

export default class CompoundTicket extends Ticket {
  constructor(ticketParams, fieldParams, simpleTickets) {
    super(ticketParams, fieldParams);

    this._useForMetro = simpleTickets[ticketParams.useForMetro];
    this._useForTat = simpleTickets[ticketParams.useForTat];
  }

  _getAverageCost({metroTrips, tatTrips}) {
    return this._useForMetro._field[metroTrips][0] + this._useForTat._field[0][tatTrips];
  }
}
