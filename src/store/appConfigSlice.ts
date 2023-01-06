import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import appConfig from '../data/appConfig';

export interface AppConfigState {
  fieldMax: number;
  fieldStep: number;
  daysInPeriod: number;
}

const initialState: AppConfigState = appConfig;

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {},
});

export default appConfigSlice.reducer;

export const selectAppConfig = (state: AppState) => state.appConfig;

export const selectFieldMax = (state: AppState) => state.appConfig.fieldMax;

export const selectFieldStep = (state: AppState) => state.appConfig.fieldStep;
