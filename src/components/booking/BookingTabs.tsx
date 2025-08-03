import React from 'react';
import { Tabs, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setActiveTab } from '../../store/slices/bookingsSlice';
import LinkedBookingsTable from './LinkedBookingsTable';
import EmailReader from '../email/EmailReader';

const BookingTabs: React.FC = () => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state: RootState) => state.bookings);

  const handleTabChange = (key: string) => {
    dispatch(setActiveTab(key));
  };

  

  const tabItems = [
    {
      key: 'transportPlans',
      label: 'Transport Plan',
      children: <div style={{ padding: '12px' }}>Transport Plans content</div>
    },
    {
      key: 'linkedBookings',
      label: 'Linked Bookings',
      children: <LinkedBookingsTable />
    },
    {
      key: 'exceptions',
      label: 'Exceptions',
      children: <div style={{ padding: '12px' }}>Exceptions content</div>
    },
    {
      key: 'documents',
      label: 'Documents',
      children: <div style={{ padding: '12px' }}>Documents content</div>
    },
    {
      key: 'emails',
      label: 'Emails',
      children: <EmailReader />
    }
  ];

  return (
    <Card
      style={{
        border: 'none',
      }}
      bodyStyle={{ 
        padding: '0',
      }}
    >
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        items={tabItems}
        tabBarStyle={{
          marginBottom: '16px',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 12px',
        }}
      />
    </Card>
  );
};

export default BookingTabs;