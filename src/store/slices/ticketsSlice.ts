import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import AppConfig from '../../types/AppConfig';
import GlobalField from '../../types/GlobalField';
import TicketsFields from '../../types/TicketFields';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import TicketsConfigs from '../../types/TicketsConfigs';
import TicketsSelected from '../../types/TicketsSelected';
import appConfig from '../../utils/appConfig';
import buildTickets from '../../utils/buildTickets';
import Field from '../../utils/Field';
import Ticket from '../../utils/Ticket';
import { ticketGroupsConfig } from '../../utils/ticketsData';
import { ticketsConfigs as configs } from '../../utils/ticketsData';

export interface TicketsState {
  globalField: GlobalField | null;
  isFieldLoading: boolean;
  minCost: number | null;
  maxCost: number | null;
  appConfig: AppConfig;
  ticketsFields: TicketsFields | null;
  ticketsSelected: TicketsSelected | null;
  ticketsConfigs: TicketsConfigs | null;
  ticketGroupsConfigs: TicketGroupConfig[];
}

const initialState: TicketsState = {
  globalField: null,
  isFieldLoading: true,
  minCost: null,
  maxCost: null,
  appConfig: appConfig,
  ticketsFields: null,
  ticketsSelected: null,
  ticketsConfigs: null,
  ticketGroupsConfigs: ticketGroupsConfig,
};

export const initializeTickets = createAsyncThunk(
  'tickets/initialize',
  async () => {
    return buildTickets(configs);
  },
);

export const buildField = createAsyncThunk(
  'tickets/buildField',
  async (_, { getState }) => {
    const state = getState() as AppState;

    const {
      ticketsFields,
      ticketsConfigs,
      ticketsSelected,
      appConfig,
    } = state.tickets;

    if (ticketsFields && ticketsConfigs && ticketsSelected) {
      const { field, minCost, maxCost } = new Field(
        ticketsConfigs,
        ticketsFields,
        ticketsSelected,
        appConfig,
      );

      return { globalField: field, minCost, maxCost };
    }
  },
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    ticketsSelected(state, action) {
      if (
        !state.ticketsFields ||
        !state.ticketsSelected ||
        !state.ticketsConfigs
      )
        return;

      const { id, isSelected } = action.payload;
      state.ticketsSelected[id] = isSelected;

      const dependencies = state.ticketsConfigs[id].dependencies;

      if (dependencies) {
        for (let ticketId of dependencies) {
          const ticketConfig = state.ticketsConfigs[ticketId];

          if (isSelected && Ticket.isCompound(ticketConfig)) {
            const areAllTrue = [
              ticketConfig.useForMetro,
              ticketConfig.useForTat,
            ]
              .map((ticketId) => state.ticketsSelected![ticketId])
              .every((state) => state === true);

            if (!areAllTrue) continue;
          }

          state.ticketsSelected[ticketId] = isSelected;
        }
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(initializeTickets.fulfilled, (state, action) => {
        const {
          ticketsFields,
          ticketsConfigs,
          ticketsSelected,
        } = action.payload;
        state.ticketsFields = ticketsFields;
        state.ticketsConfigs = ticketsConfigs;
        state.ticketsSelected = ticketsSelected;
      })
      .addCase(buildField.pending, (state, action) => {
        state.isFieldLoading = true;
      })
      .addCase(buildField.fulfilled, (state, action) => {
        if (action.payload) {
          const { globalField, minCost, maxCost } = action.payload;
          state.globalField = globalField;
          state.minCost = minCost;
          state.maxCost = maxCost;
        }
        state.isFieldLoading = false;
      });
  },
});

export default ticketsSlice.reducer;

export const { ticketsSelected } = ticketsSlice.actions;
