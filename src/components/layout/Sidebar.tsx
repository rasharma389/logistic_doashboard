import React from 'react';
import { Layout, List, Typography, Spin, Input, Space, Button, Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { selectBookingWithData } from '../../store/slices/bookingsSlice';
import type { CarrierBooking } from '../../data/mockData';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import dayjs from 'dayjs';
import {MenuFoldOutlined} from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

interface SidebarProps {
  onMenuClick?: (key: string) => void;
  displayBookings?: CarrierBooking[];
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick, displayBookings }) => {
  const dispatch = useDispatch();
  const { carrierBookings, selectedBookingId, loading } = useSelector((state: RootState) => state.bookings);
  
  // Use displayBookings if provided, otherwise fall back to carrierBookings
  const bookingsToDisplay = displayBookings || carrierBookings;
  const [search, setSearch] = React.useState('');

  const handleBookingSelect = (bookingId: string) => {
    dispatch(selectBookingWithData(bookingId) as any);
  };

  // Function to check if a TMS number has exceptions
  const hasException = (tmsNumber: string): boolean => {
    // Remove CB- prefix if present
    const cleanTmsNumber = tmsNumber.startsWith('CB-') ? tmsNumber.substring(3) : tmsNumber;
    
    // Find the booking in shipperBookingsData
    const booking = shipperBookingsData.find(booking => booking['TMS #'] === cleanTmsNumber);
    
    // Return true if exception exists
    return booking ? booking['Exception?'] === 'Y' : false;
  };

  // Filter bookings by id or destination
  const filteredBookings = bookingsToDisplay.filter(
    booking =>
      booking.id.toLowerCase().includes(search.toLowerCase()) ||
      booking.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Sider 
      width={200} 
      style={{ 
        backgroundColor: '#f8fafc',
        borderRight: '1px solid #e2e8f0',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ 
        padding: '8px',
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: 'white',
        height: '55px'
      }}>
        <Space align="baseline">
          <div>
          <Text strong style={{ fontSize: '14px', color: '#1f2937' }}>
            Carrier Bookings
          </Text>
          <br />
          <Text style={{ fontSize: '11px', color: '#6b7280' }}>
            {loading ? 'Loading...' : `${bookingsToDisplay.length} Bookings`}
          </Text>
          </div>
          <Tooltip title="Go to Booking Overview">
            <Button icon={<MenuFoldOutlined />} size="small" onClick={() => onMenuClick?.('booking-overview')}></Button>
          </Tooltip>
        </Space>
        
      </div>
      
      <div style={{ 
        padding: '8px 4px',
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: 'white',
        height: 'auto'
      }}>
        <Input.Search
          placeholder="Search by ID or destination"
          allowClear
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{width: '100%' }}
          size="small"
        />
      </div>
      <div style={{ 
        flex: 1, 
        overflowY: 'auto',
        minHeight: 0,
        height: 'inherit'
      }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Spin />
          </div>
        ) : (
          <List
            dataSource={filteredBookings}
            style={{ backgroundColor: 'transparent' }}
            renderItem={(booking) => (
              <List.Item
                key={booking.id}
                onClick={() => handleBookingSelect(booking.id)}
                style={{
                  cursor: 'pointer',
                  padding: '8px 12px',
                  backgroundColor: booking.selected ? '#e0f2fe' : 'transparent',
                  borderLeft: booking.selected ? '3px solid #0ea5e9' : '3px solid transparent',
                  borderBottom: '1px solid #f1f5f9',
                  margin: 0
                }}
                className="booking-list-item"
              >
                <div style={{ width: '100%' }}>
                  <div style={{ 
                    fontSize: '13px', 
                    fontWeight: booking.selected ? '600' : '500',
                    color: '#0ea5e9',
                    marginBottom: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {booking.id}
                    {hasException(booking.id) && (
                      <Tooltip title="This booking has exceptions that require attention">
                        <div style={{
                          width: '5px',
                          height: '5px',
                          backgroundColor: '#ff4d4f',
                          borderRadius: '50%',
                          cursor: 'help',
                          flexShrink: 0
                        }} />
                      </Tooltip>
                    )}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#374151',
                    marginBottom: '1px'
                  }}>
                    {booking.destination}
                  </div>
                  <div style={{ 
                    fontSize: '11px', 
                    color: '#6b7280'
                  }}>
                    {dayjs(booking.date).isValid() ? dayjs(booking.date).format('DD MMM') : booking.date}
                  </div>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>
      
      <style>{`
        .booking-list-item:hover {
          background-color: #f0f9ff !important;
        }
      `}</style>
    </Sider>
  );
};

export default Sidebar;