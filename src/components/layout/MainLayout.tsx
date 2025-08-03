import React from 'react';
import { Layout, Button } from 'antd';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '../../store';
import Header from './Header';
import Sidebar from './Sidebar';
import BookingHeader from '../booking/BookingHeader';
import BookingTabs from '../booking/BookingTabs';
import ActivityPanel from '../activity/ActivityPanel';
import { useEffect } from 'react';
import { fetchCarrierBookings } from '../../store/slices/bookingsSlice';
import { RootState } from '../../store';
import { toggleRightPanel } from '../../store/slices/uiSlice';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import Dashboard from '../dashboard/Dashboard';
import EmailReader from '../email/EmailReader';

const MainLayoutContent: React.FC = () => {
  const dispatch = useDispatch();
  const rightPanelCollapsed = useSelector((state: RootState) => state.ui.rightPanelCollapsed);

  const [activeView, setActiveView] = React.useState('carrier-bookings');

  const handleMenuClick = (key: string) => {
    setActiveView(key);
  };

  const renderContent = () => {
    if (activeView === 'dashboards') {
      return <Dashboard />;
    }
    
    if (activeView === 'email-reader') {
      return <EmailReader />;
    }
    
    return (
      <>
      <Layout style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 64px)' }}>
        {/* Left Sidebar (always visible) */}
        <div style={{ width: 200, height: '100%', overflow: 'hidden', borderRight: '1px solid #e0e0e0' }}>
          <Sidebar />
        </div>

        {/* Center Content */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
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
                <span style={{ fontSize: 12, color: '#6b7280', writingMode: 'vertical-lr', textAlign: 'center' }}>Activity</span>
              </div>
            ) : (
              <ActivityPanel />
            )}
            {/* <Button
              type="text"
              icon={rightPanelCollapsed ? <DoubleRightOutlined /> : <DoubleRightOutlined style={{ transform: 'rotate(180deg)' }} />}
              onClick={() => dispatch(toggleRightPanel())}
              style={{ position: 'absolute', top: 12, left: rightPanelCollapsed ? 100 : -18, zIndex: 10, background: '#fff', border: '1px solid #e0e0e0', borderRadius: '50%', transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              size="small"
              aria-label={rightPanelCollapsed ? 'Expand right panel' : 'Collapse right panel'}
            /> */}
          </div>
        </div>
      </Layout>
      </>
    );
  };
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Header onMenuClick={handleMenuClick} />
        {renderContent()}
      </Layout>
  );
};

const MainLayoutWithData: React.FC = () => {
  const dispatch = store.dispatch;

  useEffect(() => {
    // Load initial data - this will automatically select the first booking
    dispatch(fetchCarrierBookings() as any);
  }, [dispatch]);

  return (
    <Provider store={store}>
      <MainLayoutContent />
    </Provider>
  );
};

export default MainLayoutWithData;

