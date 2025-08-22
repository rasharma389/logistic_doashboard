import React from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import BookingHeader from '../booking/BookingHeader';
import BookingTabs from '../booking/BookingTabs';
import ActivityPanel from '../activity/ActivityPanel';
import { RootState } from '../../store';
import { toggleRightPanel } from '../../store/slices/uiSlice';
import { DoubleLeftOutlined } from '@ant-design/icons';

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rightPanelCollapsed = useSelector((state: RootState) => state.ui.rightPanelCollapsed);
  const { carrierBookings, filteredBookingsFromOverview } = useSelector((state: RootState) => state.bookings);

  const handleMenuClick = (key: string) => {
    if (key === 'booking-overview') {
      navigate('/booking-overview');
    } else {
      navigate(`/${key}`);
    }
  };

  // Use filtered data from overview if available, otherwise use regular carrier bookings
  const displayBookings = filteredBookingsFromOverview.length > 0 ? filteredBookingsFromOverview : carrierBookings;

  return (
    <Layout style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 56px)' }}>
              {/* Left Sidebar (always visible) */}
        <div style={{ height: '100%', overflow: 'hidden', borderRight: '1px solid #e0e0e0' }}>
          <Sidebar onMenuClick={handleMenuClick} displayBookings={displayBookings} />
        </div>

      {/* Center Content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
        {/* Breadcrumb Navigation */}
        <div style={{ 
          padding: '12px 16px', 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span 
            style={{ 
              color: '#0ea5e9', 
              cursor: 'pointer',
              fontSize: '14px'
            }}
            onClick={() => navigate('/booking-overview')}
          >
            Booking Overview
          </span>
          <span style={{ color: '#6b7280' }}>/</span>
          <span style={{ color: '#374151', fontWeight: '500' }}>Carrier Bookings</span>
        </div>
        
        <div style={{ flex: 0 }}>
          <BookingHeader />
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 16px 16px' }}>
          <BookingTabs />
        </div>
      </div>

      {/* Right Panel (collapsible, 70% collapsed) */}
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%', position: 'relative' }}>
        <div
          style={{
            width: rightPanelCollapsed ? 50 : 300,
            height: '100%',
            overflow: 'hidden',
            borderLeft: '1px solid #e0e0e0',
            position: 'relative',
            transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            background: rightPanelCollapsed ? '#f8fafc' : '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          {rightPanelCollapsed ? (
            <div onClick={() => dispatch(toggleRightPanel())} style={{ display: 'flex', cursor: 'pointer', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              {/* Minimal collapsed panel, e.g. just an icon or placeholder */}
              <span style={{ color: '#0ea5e9', fontSize: 32, marginBottom: 8 }}>
                <DoubleLeftOutlined />
              </span>
              <span style={{ fontSize: '12px', color: '#6b7280', writingMode: 'vertical-lr', textAlign: 'center' }}>Activity</span>
            </div>
          ) : (
            <ActivityPanel />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MainLayout;

