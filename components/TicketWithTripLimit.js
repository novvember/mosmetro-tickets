import Ticket from "./Ticket.js";

export default class TicketWithTripLimit extends Ticket {
  constructor(ticketParams) {
    super(ticketParams);




    this._pricePerTrip = this._price / this._tripLimit;

    this._period = 30;


    this._field = this._buildField();
  }

  _buildField() {

  }





  _getAverageCost({metroTrips, tatTrips}) {
    const trips = metroTrips + tatTrips; // общее количество поездок
    if (trips === 0) return 0;




    const tripPeriod = this._period / trips; // период между поездками
    const daysWithTrips = [1];
    for (let i = 1; i < trips; i++) {
      daysWithTrips.push( daysWithTrips[daysWithTrips.length - 1] + tripPeriod);
    }

    const daysWithTicketBuy = [1];
    for (let i = 1; i < daysWithTrips.length; i++) {

    }





    let ticketsRequired = 0; // всего потребуется купить билетов







    return ticketsRequired * this._price;
  }
}


/**
 * Из старого файла
 */

let tripTimes = [1]; // Время поездок
let ticketTimes = []; // Время покупок билетов
let n = 0; // Счетчик поездок
let ticketQuantity; // Количество билетов
let tripPeriod;

    // Сброс
    tripTimes = [1];
    ticketTimes = [1];
    n = 1;
    ticketQuantity = 0;
    tripPeriod = month / (tat + metro); // Период между поездками

    // Время поездок
    for (i = 1; i < (tat + metro); i++) {
      tripTimes.push (tripTimes [tripTimes.length - 1] + tripPeriod );
    }

    // Время покупки билетов
    for (i = 1; i < tripTimes.length; i++) {

      // Если билет кончился по поездкам или по времени
      if (n >= numberOfTrips || (Math.floor (tripTimes[i]) - ticketTimes [ticketTimes.length - 1]) >= durationOfTicket) {
        ticketTimes.push (Math.floor (tripTimes[i]));
        n = 1;

      // Если билет еще не кончился и еще можно сделать поездку
      } else {
        n++;
      }
    }

    // Сколько целых билетов
    ticketQuantity = ticketTimes.length - 1;

    // Дробная часть последнего билета
    // Если поездки не сгорят, то считаем по поездкам
    if (Math.ceil( ((ticketTimes [ticketTimes.length - 1] + durationOfTicket) - tripTimes [tripTimes.length - n]) / tripPeriod ) >= numberOfTrips) {
      ticketQuantity += n / numberOfTrips;

    // Если поездки сгорят, то считаем по длительности билета
    } else {

      if ( (month - ticketTimes [ticketTimes.length - 1] + 1) > durationOfTicket) {
        ticketQuantity += 1;
      } else {
        ticketQuantity += (month - ticketTimes [ticketTimes.length - 1] + 1) / durationOfTicket;
      }
    }





    // Общая стоимость составит
    getTicketParam (id, 8)[tat][metro] = ticketQuantity * priceOfTicket;
