import React, { useMemo } from 'react';
import { Tabs, Card, Badge, Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setActiveTab } from '../../store/slices/bookingsSlice';
import TransportPlan from './TransportPlan';
import LinkedBookingsTable from './LinkedBookingsTable';
import DocumentsTable from './DocumentsTable';
import EmailReader from '../email/EmailReader';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const BookingTabs: React.FC = () => {
  const dispatch = useDispatch();
  const { activeTab, selectedBookingId } = useSelector((state: RootState) => state.bookings);

  // Get the current booking status for transport plan tab
  const transportPlanTabStatus = useMemo(() => {
    if (!selectedBookingId) return null;
    
    // Remove CB- prefix if present
    const cleanId = selectedBookingId.startsWith('CB-') ? selectedBookingId.substring(3) : selectedBookingId;
    const bookingData = shipperBookingsData.find(booking => booking['TMS #'] === cleanId);
    
    if (!bookingData) return null;
    
    const status = bookingData['Booking Status']?.toLowerCase();
    if (status === 'confirmed') return 'available';
    if (status === 'pending') return 'pending';
    if (status?.includes('canceled') || status?.includes('cancelled')) return 'unavailable';
    return 'unknown';
  }, [selectedBookingId]);

  const handleTabChange = (key: string) => {
    dispatch(setActiveTab(key));
  };

  

  const tabItems = [
    {
      key: 'transportPlans',
      label: (
        <Tooltip 
          title={
            transportPlanTabStatus === 'available' ? 'Transport plan is available' :
            transportPlanTabStatus === 'pending' ? 'Transport plan will be available once confirmed' :
            transportPlanTabStatus === 'unavailable' ? 'Transport plan is not available for this status' :
            'Transport plan status unknown'
          }
        >
          <span>
            Transport Plan
            {transportPlanTabStatus && transportPlanTabStatus !== 'available' && (
              <Badge 
                status={
                  transportPlanTabStatus === 'pending' ? 'processing' :
                  transportPlanTabStatus === 'unavailable' ? 'error' :
                  'default'
                } 
                style={{ marginLeft: '8px' }}
              />
            )}
          </span>
        </Tooltip>
      ),
      children: <TransportPlan />
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
      children: <DocumentsTable />
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
      styles={{ 
        body: { 
          padding: '0',
        }
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