import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ticketsSlice, { TicketsState } from './slices/ticketsSlice';
export interface AppState {
  tickets: TicketsState;
}

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
