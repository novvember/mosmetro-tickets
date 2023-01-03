import { createSlice } from '@reduxjs/toolkit';
import AppConfig from '../../types/AppConfig';
import GlobalField from '../../types/GlobalField';
import TicketsFields from '../../types/TicketFields';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import TicketsConfigs from '../../types/TicketsConfigs';
import TicketsSelected from '../../types/TicketsSelected';
import appConfig from '../../utils/appConfig';
import Field from '../../utils/Field';
import Ticket from '../../utils/Ticket';
import { ticketGroupsConfig } from '../../utils/ticketsData';

export interface TicketsState {
  globalField: GlobalField | null;
  isLoading: boolean;
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
  isLoading: true,
  minCost: null,
  maxCost: null,
  appConfig: appConfig,
  ticketsFields: null,
  ticketsSelected: null,
  ticketsConfigs: null,
  ticketGroupsConfigs: ticketGroupsConfig,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    initialized(state, action) {
      const { ticketsFields, ticketsConfigs, ticketsSelected } = action.payload;

      const { field, minCost, maxCost } = new Field(
        ticketsConfigs,
        ticketsFields,
        ticketsSelected,
        state.appConfig,
      );

      state.isLoading = false;
      state.ticketsFields = ticketsFields;
      state.ticketsConfigs = ticketsConfigs;
      state.ticketsSelected = ticketsSelected;
      state.globalField = field;
      state.maxCost = maxCost;
      state.minCost = minCost;
    },

    calculationStarted(state, action) {
      state.isLoading = true;
    },

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

      const { field, minCost, maxCost } = new Field(
        state.ticketsConfigs,
        state.ticketsFields,
        state.ticketsSelected,
        state.appConfig,
      );

      state.globalField = field;
      state.minCost = minCost;
      state.maxCost = maxCost;
      state.isLoading = false;
    },
  },
});

export default ticketsSlice.reducer;

export const {
  initialized,
  calculationStarted,
  ticketsSelected,
} = ticketsSlice.actions;
