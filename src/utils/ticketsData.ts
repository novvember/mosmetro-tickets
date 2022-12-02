import { SimpleTicket, CompoundTicket } from '../types/Ticket';

export const ticketsData: Array<SimpleTicket | CompoundTicket> = [
  // Единые с лимитом поездок
  {
    name: 'Единый на 1 поездку',
    price: 61,
    dayLimit: 5,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_1',
    groupId: 'allInOne_trips',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Единый на 2 поездки',
    price: 122,
    dayLimit: 5,
    tripLimit: 2,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_2',
    groupId: 'allInOne_trips',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Единый на 60 поездок',
    price: 2400,
    dayLimit: 45,
    tripLimit: 60,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_trips_60',
    groupId: 'allInOne_trips',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Единые без лимита
  {
    name: 'Единый на 1 сутки',
    price: 265,
    dayLimit: 1,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_1',
    groupId: 'allInOne_days',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Единый на 3 суток',
    price: 500,
    dayLimit: 3,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_3',
    groupId: 'allInOne_days',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Единый на 30 дней',
    price: 2360,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_30',
    groupId: 'allInOne_days',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Единый на 90 дней',
    price: 5710,
    dayLimit: 90,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_90',
    groupId: 'allInOne_days',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Единый на 365 дней',
    price: 19500,
    dayLimit: 365,
    tripLimit: Infinity,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'allInOne_days_365',
    groupId: 'allInOne_days',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Карта Тройка
  {
    name: 'Электронный кошелек',
    price: 46,
    dayLimit: Infinity,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'troika',
    groupId: 'troika',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Пересадка (90 минут)',
    price: 69,
    dayLimit: Infinity,
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
    price: 51,
    dayLimit: Infinity,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'bankcard',
    groupId: 'other',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'Карта Мир (до 30.06.2022)',
    price: 41,
    dayLimit: Infinity,
    tripLimit: 1,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'bankcard_mir-promo',
    groupId: 'other',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Билеты ТАТ
  {
    name: 'ТАТ на 30 дней',
    price: 1400,
    dayLimit: 30,
    tripLimit: Infinity,
    isValidForMetro: false,
    isValidForTat: true,
    id: 'tat_days_30',
    groupId: 'tat',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'ТАТ на 90 дней',
    price: 3720,
    dayLimit: 90,
    tripLimit: Infinity,
    isValidForMetro: false,
    isValidForTat: true,
    id: 'tat_days_90',
    groupId: 'tat',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  {
    name: 'ТАТ на 365 дней',
    price: 14000,
    dayLimit: 365,
    tripLimit: Infinity,
    isValidForMetro: false,
    isValidForTat: true,
    id: 'tat_days_365',
    groupId: 'tat',
    isSelectedByDefault: true,
    isIgnored: false,
  },

  // Сочетания билетов
  // Нужно добавить useForMetro, useForTat
  {
    name: 'ТАТ на 30 дней + Тройка',
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
    name: 'ТАТ на 90 дней + Тройка',
    price: null,
    dayLimit: null,
    tripLimit: null,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'compound__tat_days_90__troika',
    groupId: 'compound',
    isSelectedByDefault: true,
    isIgnored: false,
    useForMetro: 'troika',
    useForTat: 'tat_days_90',
  },

  {
    name: 'ТАТ на 365 дней + Тройка',
    price: null,
    dayLimit: null,
    tripLimit: null,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'compound__tat_days_365__troika',
    groupId: 'compound',
    isSelectedByDefault: true,
    isIgnored: false,
    useForMetro: 'troika',
    useForTat: 'tat_days_365',
  },

  {
    name: 'ТАТ на 30 дней + Единый на 60 поездок',
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

  {
    name: 'ТАТ на 90 дней + Единый на 60 поездок',
    price: null,
    dayLimit: null,
    tripLimit: null,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'compound__tat_days_90__allInOne_trips_60',
    groupId: 'compound',
    isSelectedByDefault: true,
    isIgnored: false,
    useForMetro: 'allInOne_trips_60',
    useForTat: 'tat_days_90',
  },

  {
    name: 'ТАТ на 365 дней + Единый на 60 поездок',
    price: null,
    dayLimit: null,
    tripLimit: null,
    isValidForMetro: true,
    isValidForTat: true,
    id: 'compound__tat_days_365__allInOne_trips_60',
    groupId: 'compound',
    isSelectedByDefault: true,
    isIgnored: false,
    useForMetro: 'allInOne_trips_60',
    useForTat: 'tat_days_365',
  },
];

// Параметры групп билетов
// isLongGroup: true, // растянуть группу в легенде на несколько строк
export const ticketGroupParams = {
  troika: {
    title: 'Тройка',
  },

  allInOne_trips: {
    title: 'Единый с лимитом',
  },

  allInOne_days: {
    title: 'Единый без лимита',
  },

  tat: {
    title: 'ТАТ',
  },

  other: {
    title: 'Другие',
  },

  compound: {
    title: 'Сочетания',
    isLongGroup: true, // растянуть группу в легенде на несколько строк
  },
};
