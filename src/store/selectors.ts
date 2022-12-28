import { AppState } from '.';
import TicketId from '../types/TicketId';

export const fieldMaxSelector = (state: AppState) =>
  state.tickets.appConfig.fieldMax;

export const fieldStepSelector = (state: AppState) =>
  state.tickets.appConfig.fieldStep;

export const ticketsSelector = (state: AppState) => state.tickets.tickets;

export const isSelectedSelector = (id: TicketId) => (state: AppState) =>
  state.tickets.selectedTickets?.[id];

export const ticketGroupsConfigsSelector = (state: AppState) =>
  state.tickets.ticketGroupsConfigs;

export const fieldSelector = (state: AppState) => state.tickets.field;

export const isFieldLoadingSelector = (state: AppState) =>
  state.tickets.isFieldLoading;

export const minCostSelector = (state: AppState) => state.tickets.minCost;

export const maxCostSelector = (state: AppState) => state.tickets.maxCost;
