import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import ticketsReducer, { TicketsState } from './ticketsReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
});

export const store = createStore(rootReducer);

export interface AppState {
  tickets: TicketsState;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
