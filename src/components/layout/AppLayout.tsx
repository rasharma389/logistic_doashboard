import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchCarrierBookings } from '../../store/slices/bookingsSlice';
import { closePDFViewer } from '../../store/slices/uiSlice';
import Header from './Header';
import PDFViewerModal from '../pdf/PDFViewerModal';

const AppLayout: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pdfViewerVisible = useSelector((state: RootState) => state.ui.pdfViewerVisible);
  const { filteredBookingsFromOverview } = useSelector((state: RootState) => state.bookings);

  useEffect(() => {
    // Only load initial carrier bookings if there's no filtered data from overview
    // This prevents conflicts between filtered data and default carrier bookings
    if (filteredBookingsFromOverview.length === 0) {
      console.log('AppLayout: Loading initial carrier bookings (no filtered data)');
      dispatch(fetchCarrierBookings() as any);
    } else {
      console.log('AppLayout: Skipping initial carrier bookings (filtered data available)');
    }
  }, [dispatch, filteredBookingsFromOverview.length]);

  // Handle navigation to carrier bookings page
  useEffect(() => {
    if (location.pathname === '/booking-overview/carrier-bookings') {
      console.log('AppLayout: User navigated to carrier bookings page');
    }
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content style={{ overflow: 'hidden' }}>
        <Outlet />
      </Layout.Content>
      <PDFViewerModal 
        visible={pdfViewerVisible} 
        onClose={() => dispatch(closePDFViewer())}
      />
    </Layout>
  );
};

export default AppLayout;
