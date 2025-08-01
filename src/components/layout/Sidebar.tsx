import React from 'react';
import { Layout, List, Typography, Spin, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { selectBookingWithData } from '../../store/slices/bookingsSlice';
import dayjs from 'dayjs';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { carrierBookings, selectedBookingId, loading } = useSelector((state: RootState) => state.bookings);
  const [search, setSearch] = React.useState('');

  const handleBookingSelect = (bookingId: string) => {
    dispatch(selectBookingWithData(bookingId) as any);
  };

  // Filter bookings by id or destination
  const filteredBookings = carrierBookings.filter(
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
        padding: '12px',
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: 'white',
        height: '65px'
      }}>
        <Text strong style={{ fontSize: '16px', color: '#1f2937' }}>
          Carrier Bookings
        </Text>
        <br />
        <Text style={{ fontSize: '12px', color: '#6b7280' }}>
          {loading ? 'Loading...' : `${carrierBookings.length} Bookings`}
        </Text>
      </div>
      <div style={{ 
        padding: '12px 5px',
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
                  padding: '12px 16px',
                  backgroundColor: booking.selected ? '#e0f2fe' : 'transparent',
                  borderLeft: booking.selected ? '3px solid #0ea5e9' : '3px solid transparent',
                  borderBottom: '1px solid #f1f5f9',
                  margin: 0
                }}
                className="booking-list-item"
              >
                <div style={{ width: '100%' }}>
                  <div style={{ 
                    fontSize: '14px', 
                    fontWeight: booking.selected ? '600' : '500',
                    color: '#0ea5e9',
                    marginBottom: '4px'
                  }}>
                    {booking.id}
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#374151',
                    marginBottom: '2px'
                  }}>
                    {booking.destination}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
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