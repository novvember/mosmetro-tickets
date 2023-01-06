import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import GlobalField from '../types/GlobalField';
import Field from '../utils/Field';

export interface GlobalFieldState {
  field: GlobalField | null;
  isLoading: boolean;
  minCost: number | null;
  maxCost: number | null;
}

const initialState: GlobalFieldState = {
  field: null,
  isLoading: true,
  minCost: null,
  maxCost: null,
};

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

const globalFieldSlice = createSlice({
  name: 'globalField',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(buildField.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(buildField.fulfilled, (state, action) => {
        if (action.payload) {
          const { globalField, minCost, maxCost } = action.payload;
          state.field = globalField;
          state.minCost = minCost;
          state.maxCost = maxCost;
        }
        state.isLoading = false;
      });
  },
});

export default globalFieldSlice.reducer;

export const selectGlobalField = (state: AppState) => state.globalField.field;

export const selectIsFieldLoading = (state: AppState) =>
  state.globalField.isLoading;

export const selectMinCost = (state: AppState) => state.globalField.minCost;

export const selectMaxCost = (state: AppState) => state.globalField.maxCost;
