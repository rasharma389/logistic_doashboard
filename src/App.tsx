import React from 'react';
import { ConfigProvider } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppLayout from './components/layout/AppLayout';
import MainLayout from './components/layout/MainLayout';
import BookingOverview from './components/bookingOverview/BookingOverview';
import Dashboard from './components/dashboard/Dashboard';
import EmailReader from './components/email/EmailReader';
import 'antd/dist/reset.css';

const theme = {
  token: {
    colorPrimary: '#0ea5e9',
    borderRadius: 6,
    colorBgContainer: '#ffffff',
  },
  components: {
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: '#e0f2fe',
      itemSelectedColor: '#0ea5e9',
      itemHoverBg: '#f0f9ff',
    },
    Table: {
      headerBg: '#f8fafc',
      headerColor: '#374151',
      borderColor: '#e2e8f0',
    },
    Card: {
      borderRadius: 8,
    }
  }
};

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/booking-overview" replace />} />
            <Route path="booking-overview" element={<BookingOverview />} />
            <Route path="booking-overview/carrier-bookings" element={<MainLayout />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="email-reader" element={<EmailReader />} />
            <Route path="*" element={<Navigate to="/booking-overview" replace />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </Provider>
  );
}

export default App;