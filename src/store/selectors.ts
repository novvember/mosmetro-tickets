import { AppState } from '.';
import TicketId from '../types/TicketId';

export const fieldMaxSelector = (state: AppState) =>
  state.tickets.appConfig.fieldMax;

export const fieldStepSelector = (state: AppState) =>
  state.tickets.appConfig.fieldStep;

export const ticketsConfigsSelector = (state: AppState) =>
  state.tickets.ticketsConfigs;

export const isSelectedSelector = (id: TicketId) => (state: AppState) =>
  state.tickets.ticketsSelected?.[id];

export const ticketGroupsConfigsSelector = (state: AppState) =>
  state.tickets.ticketGroupsConfigs;

export const globalFieldSelector = (state: AppState) =>
  state.tickets.globalField;

export const isLoadingSelector = (state: AppState) => state.tickets.isFieldLoading;

export const minCostSelector = (state: AppState) => state.tickets.minCost;

export const maxCostSelector = (state: AppState) => state.tickets.maxCost;
