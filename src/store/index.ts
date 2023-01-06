import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appConfigSlice, { AppConfigState } from './appConfigSlice';
import globalFieldSlice, { GlobalFieldState } from './globalFieldSlice';
import ticketsSlice, { TicketsState } from './ticketsSlice';
export interface AppState {
  tickets: TicketsState;
  globalField: GlobalFieldState;
  appConfig: AppConfigState;
}

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
    globalField: globalFieldSlice,
    appConfig: appConfigSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
