import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/bookingsSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;