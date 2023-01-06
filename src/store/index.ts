import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import globalFieldSlice, { GlobalFieldState } from './globalFieldSlice';
import ticketsSlice, { TicketsState } from './ticketsSlice';
export interface AppState {
  tickets: TicketsState;
  globalField: GlobalFieldState;
}

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
    globalField: globalFieldSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
