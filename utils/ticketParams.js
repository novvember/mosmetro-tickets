const ticketParams = [
  // Единые на поездки
  {
    name: 'Единый на 1 поездку',
    price: 57,
    dayLimit: 5,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_1',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на 2 поездки',
    price: 114,
    dayLimit: 5,
    tripLimit: 2,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_2',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на 60 поездок',
    price: 1970,
    dayLimit: 45,
    tripLimit: 60,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_60',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Единые на дни
  {
    name: 'Единый на 1 сутки',
    price: 230,
    dayLimit: 1,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_1',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на 3 суток',
    price: 438,
    dayLimit: 3,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_3',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на 30 дней',
    price: 2170,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_30',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на 90 дней',
    price: 5430,
    dayLimit: 90,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_90',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на 365 дней',
    price: 19500,
    dayLimit: 365,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_365',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Единый на календарный месяц
  {
    name: 'Единый на календарный месяц',
    price: 2900,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_month',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Карта Тройка
  {
    name: 'Карта Тройка',
    price: 40,
    dayLimit: 1825,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'troika',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  // {
  //   name: 'Карта Тройка (пересадка 90 минут)',
  //   price: 62,
  //   dayLimit: 1825,
  //   tripLimit: 1,
  //   isValidForMetro: true,
  //   isValidForTat: true,
  //   id: 'troika_90min',
  //   isSelectedByDefault: true,
  //   isIgnored: true,
  // },

  // Банковские карты
  {
    name: 'Банковская карта',
    price: 44,
    dayLimit: Infinity,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'bankcard',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Билеты ТАТ
  {
    name: 'ТАТ на 30 дней',
    price: 1180,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: false,
    isValidForTat: true,
    id: 'tat_days_30',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Сочетания билетов (?)
  // ТАТ 30 дней + Тройка-метро
  // ТАТ 30 дней + Единый 60 поездок
  //
];

export default ticketParams;
