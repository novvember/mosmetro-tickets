import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { AppState } from '.';
import TicketsFields from '../types/TicketFields';
import TicketGroupConfig from '../types/TicketGroupConfig';
import TicketId from '../types/TicketId';
import TicketsSelected from '../types/TicketsSelected';
import CompoundTicket from '../utils/CompoundTicket';
import SimpleTicket from '../utils/SimpleTicket';
import Ticket from '../utils/Ticket';
import {
  ticketGroupsConfigs,
  ticketsConfigs as configs,
} from '../data/ticketsData';
import { selectAppConfig } from './appConfigSlice';
import {
  CompoundTicketConfig,
  SimpleTicketConfig,
} from '../types/TicketConfig';

const configsAdapter = createEntityAdapter<
  SimpleTicketConfig | CompoundTicketConfig
>();
const groupsConfigsAdapter = createEntityAdapter<TicketGroupConfig>();

export interface TicketsState {
  fields: TicketsFields | null;
  selected: TicketsSelected | null;
  configs: EntityState<SimpleTicketConfig | CompoundTicketConfig>;
  groupsConfigs: EntityState<TicketGroupConfig>;
}

const initialState: TicketsState = {
  fields: null,
  selected: null,
  configs: configsAdapter.getInitialState(),
  groupsConfigs: groupsConfigsAdapter.getInitialState(),
};

export const initializeTickets = createAsyncThunk(
  'tickets/initialize',
  async (_, { getState }) => {
    const state = getState() as AppState;
    const appConfig = selectAppConfig(state);
    const fields: TicketsFields = {};
    const selected: TicketsSelected = {};
    const filteredConfigs = configs.filter(
      (config) => config.isIgnored === false,
    );

    filteredConfigs.forEach((config) => {
      const id = config.id;
      const isCompound = Ticket.isCompound(config);

      const { field } = isCompound
        ? new CompoundTicket(config, appConfig, fields)
        : new SimpleTicket(config, appConfig);

      fields[id] = field;
      selected[id] = config.isSelectedByDefault;
    });

    return { fields, configs: filteredConfigs, selected };
  },
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    ticketsSelected(state, action) {
      if (!state.fields || !state.selected || !state.configs) return;

      const { id, isSelected } = action.payload;
      state.selected[id] = isSelected;

      const dependencies = state.configs.entities[id]?.dependencies ?? [];

      for (let ticketId of dependencies) {
        const ticketConfig = state.configs.entities[ticketId];
        if (!ticketConfig) continue;

        if (isSelected && Ticket.isCompound(ticketConfig)) {
          const areAllTrue = [ticketConfig.useForMetro, ticketConfig.useForTat]
            .map((ticketId) => state.selected![ticketId])
            .every((state) => state === true);

          if (!areAllTrue) continue;
        }

        state.selected[ticketId] = isSelected;
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(initializeTickets.fulfilled, (state, action) => {
      const { fields, selected, configs } = action.payload;
      state.fields = fields;
      state.selected = selected;
      configsAdapter.setAll(state.configs, configs);
      groupsConfigsAdapter.setAll(state.groupsConfigs, ticketGroupsConfigs);
    });
  },
});

export default ticketsSlice.reducer;

export const { ticketsSelected } = ticketsSlice.actions;

export const {
  selectAll: selectTicketsConfigs,
  selectById: selectConfigByTicketId,
} = configsAdapter.getSelectors((state: AppState) => state.tickets.configs);

export const selectTicketsIdsByGroupId = createSelector(
  [selectTicketsConfigs, (state, groupId) => groupId],
  (ticketsConfigs, groupId) =>
    ticketsConfigs
      .filter((config) => config.groupId === groupId)
      .map((config) => config.id),
);

export const {
  selectIds: selectTicketGroupsIds,
  selectById: selectTicketGroupById,
} = groupsConfigsAdapter.getSelectors(
  (state: AppState) => state.tickets.groupsConfigs,
);

export const selectIsSelected = (state: AppState, ticketId: TicketId) =>
  state.tickets.selected?.[ticketId];

export const selectTicketsFields = (state: AppState) => state.tickets.fields;

export const selectTicketsSelected = (state: AppState) =>
  state.tickets.selected;
