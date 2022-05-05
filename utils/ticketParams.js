const ticketParams = [
  // Единые на поездки
  {
    name: 'Единый на 1 поездку',
    id: 'allInOne_trips_1',
    price: 57,
    dayLimit: 5,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
  },
  {
    name: 'Единый на 2 поездки',
    id: 'allInOne_trips_2',
    price: 114,
    dayLimit: 5,
    tripLimit: 2,
    isValidForMetro: true,
    isValidForTat: true,
  },
  {
    name: 'Единый на 60 поездок',
    id: 'allInOne_trips_60',
    price: 1970,
    dayLimit: 45,
    tripLimit: 60,
    isValidForMetro: true,
    isValidForTat: true,
  },

  // Единые на дни
  {
    name: 'Единый на 1 сутки',
    id: 'allInOne_days_1',
    price: 230,
    dayLimit: 1,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
  },
  {
    name: 'Единый на 3 суток',
    id: 'allInOne_days_3',
    price: 438,
    dayLimit: 3,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
  },
  {
    name: 'Единый на 30 дней',
    id: 'allInOne_days_30',
    price: 2170,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
  },
  {
    name: 'Единый на 90 дней',
    id: 'allInOne_days_90',
    price: 5430,
    dayLimit: 90,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
  },
  {
    name: 'Единый на 365 дней',
    id: 'allInOne_days_365',
    price: 19500,
    dayLimit: 365,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
  },

  // Единый на календарный месяц
  {
    name: 'Единый на календарный месяц',
    id: 'allInOne_days_month',
    price: 2900,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
  },

  // Карта Тройка
  {
    name: 'Карта Тройка',
    id: 'troika',
    price: 40,
    dayLimit: 1825,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
  },
  // {
  //   name: 'Карта Тройка (пересадка 90 минут)',
  //   id: 'troika_90min',
  //   price: 62,
  //   dayLimit: 1825,
  //   tripLimit: 1,
  //   isValidForMetro: true,
  //   isValidForTat: true,
  // },

  // Банковские карты
  {
    name: 'Банковская карта',
    id: 'bankcard',
    price: 44,
    dayLimit: Infinity,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
  },

  // Билеты ТАТ
  {
    name: 'ТАТ на 30 дней',
    id: 'tat_days_30',
    price: 1180,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: false,
    isValidForTat: true,
  },

  // Сочетания билетов (?)
  // ТАТ 30 дней + Тройка-метро
  // ТАТ 30 дней + Единый 60 поездок
  //
];

export default ticketParams;