import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchCarrierBookings } from '../../store/slices/bookingsSlice';
import { closePDFViewer } from '../../store/slices/uiSlice';
import Header from './Header';
import PDFViewerModal from '../pdf/PDFViewerModal';

const AppLayout: React.FC = () => {
  const dispatch = useDispatch();
  const pdfViewerVisible = useSelector((state: RootState) => state.ui.pdfViewerVisible);

  useEffect(() => {
    // Load initial data - this will automatically select the first booking
    dispatch(fetchCarrierBookings() as any);
  }, [dispatch]);

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
