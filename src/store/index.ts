import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/bookingsSlice';
import uiReducer from './slices/uiSlice';
import dashboardReducer from './slices/dashboardSlice';
import emailReducer from './slices/emailSlice';
import bookingOverviewReducer from './slices/bookingOverviewSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    ui: uiReducer,
    dashboard: dashboardReducer,
    email: emailReducer,
    bookingOverview: bookingOverviewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;