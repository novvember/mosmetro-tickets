export const ticketParams = [
  // Единые на поездки
  {
    name: 'Единый на&nbsp;1&nbsp;поездку',
    price: 57,
    dayLimit: 5,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_1',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на&nbsp;2&nbsp;поездки',
    price: 114,
    dayLimit: 5,
    tripLimit: 2,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_2',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на&nbsp;60&nbsp;поездок',
    price: 1970,
    dayLimit: 45,
    tripLimit: 60,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_60',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Единые на дни
  {
    name: 'Единый на&nbsp;1&nbsp;сутки',
    price: 230,
    dayLimit: 1,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_1',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на&nbsp;3&nbsp;суток',
    price: 438,
    dayLimit: 3,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_3',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на&nbsp;30&nbsp;дней',
    price: 2170,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_30',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на&nbsp;90&nbsp;дней',
    price: 5430,
    dayLimit: 90,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_90',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Единый на&nbsp;365&nbsp;дней',
    price: 19500,
    dayLimit: 365,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_365',
    groupId: 'allInOne',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Единый на календарный месяц
  {
    name: 'Единый на&nbsp;календарный месяц',
    price: 2900,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_month',
    groupId: 'allInOne',
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
    groupId: 'troika',
    isSelectedByDefault: true,
    isIgnored: false,
  },
  {
    name: 'Карта Тройка (пересадка 90&nbsp;минут)',
    price: 62,
    dayLimit: 1825,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'troika_90min',
    groupId: 'troika',
    isSelectedByDefault: false,
    isIgnored: true,
  },

  // Банковские карты
  {
    name: 'Банковская карта',
    price: 44,
    dayLimit: Infinity,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'bankcard',
    groupId: 'other',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Билеты ТАТ
  {
    name: 'ТАТ на&nbsp;30&nbsp;дней',
    price: 1180,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: false,
    isValidForTat: true,
    id: 'tat_days_30',
    groupId: 'tat',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Сочетания билетов
  // Нужно добавить useForMetro, useForTat
  {
    name: 'ТАТ на&nbsp;30&nbsp;дней + Тройка',
    price: null,
    dayLimit: null,
    tripLimit: null,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'compound__tat_days_30__troika',
    groupId: 'compound',
    isSelectedByDefault: true,
    isIgnored: false,
    useForMetro: 'troika',
    useForTat: 'tat_days_30',
  },

  {
    name: 'ТАТ на&nbsp;30&nbsp;дней + Единый на&nbsp;60&nbsp;поездок',
    price: null,
    dayLimit: null,
    tripLimit: null,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'compound__tat_days_30__allInOne_trips_60',
    groupId: 'compound',
    isSelectedByDefault: true,
    isIgnored: false,
    useForMetro: 'allInOne_trips_60',
    useForTat: 'tat_days_30',
  },


];

export const ticketGroupParams = {
  troika: {
    title: 'Тройка',
  },

  allInOne: {
    title: 'Единый',
    isLongGroup: true, // растянуть группу в легенде на несколько строк
  },

  tat: {
    title: 'ТАТ',
  },

  other: {
    title: 'Другие',
  },

  compound: {
    title: 'Сочетания',
  },
}
