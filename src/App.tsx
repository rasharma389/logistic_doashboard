import React from 'react';
import { ConfigProvider } from 'antd';
import MainLayout from './components/layout/MainLayout';
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
    <ConfigProvider theme={theme}>
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;