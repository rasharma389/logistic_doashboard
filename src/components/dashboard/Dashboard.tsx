import React, { useEffect } from 'react';
import { Row, Col, Spin, Alert } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchDashboardData } from '../../store/slices/dashboardSlice';
import DashboardFilters from './DashboardFilters';
import CBRequestsByStatusChart from './CBRequestsByStatusChart';
import DaysBeforeETDChart from './DaysBeforeETDChart';
import AllocationsByCarrierChart from './AllocationsByCarrierChart';
import BookingLastMonth from './BookingLastMonth';
import BookingNextTwoWeeksETD from './BookingNextTwoWeeksETD';
import BookingNextTwoToFourWeeksETD from './BookingNextTwoToFourWeeksETD';
import ExceptionsTable from './ExceptionsTable';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, filters } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData(filters) as any);
  }, [dispatch]);

  if (error) {
    return (
      <div style={{ padding: '24px' }}>
        <Alert
          message="Error Loading Dashboard"
          description={error}
          type="error"
          showIcon
          closable
        />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <DashboardFilters />
      
      <div style={{ padding: '24px' }}>
        {loading && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '200px' 
          }}>
            <Spin size="large" />
          </div>
        )}
        
        <Row gutter={[16, 16]}>
          {/* <Col xs={24} lg={6}>
            <CBRequestsByStatusChart />
          </Col> */}
          <Col xs={24} lg={8}>
            <BookingNextTwoWeeksETD />
          </Col>
          <Col xs={24} lg={8}>
            <BookingNextTwoToFourWeeksETD />
          </Col>
          <Col xs={24} lg={8}>
            <BookingLastMonth />
          </Col>
        </Row>
        
        {/* <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <DaysBeforeETDChart />
          </Col>
          <Col xs={24} lg={8}>
            <AllocationsByCarrierChart />
          </Col>
          <Col xs={24} lg={8}>
            
          </Col>
        </Row> */}
        
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <ExceptionsTable />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;