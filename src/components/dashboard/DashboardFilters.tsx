import React from 'react';
import { Row, Col, Select, Button, Space, Typography } from 'antd';
import { ReloadOutlined, DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateFiltersAndRefresh, fetchDashboardData } from '../../store/slices/dashboardSlice';

const { Option } = Select;
const { Text } = Typography;

const DashboardFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { filters, loading } = useSelector((state: RootState) => state.dashboard);

  const handleFilterChange = (key: string, value: string) => {
    console.log(`Filter changed: ${key} = ${value}`);
    dispatch(updateFiltersAndRefresh({ [key]: value }) as any);
  };

  const handleRefresh = () => {
    dispatch(fetchDashboardData(filters) as any);
  };

  return (
    <div style={{ 
      padding: '16px 24px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <Row gutter={16} align="middle">
        <Col>
          <Text style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
            Carrier Bookings
          </Text>
        </Col>
        <Col>
          <Space size={8}>
            <Select
              value={filters.customer}
              onChange={(value) => handleFilterChange('customer', value)}
              style={{ width: 100 }}
              size="small"
              suffixIcon={<DownOutlined style={{ fontSize: '10px' }} />}
              bordered={true}
              className="dashboard-filter-select"
            >
              <Option value="ALL">Cust. ALL</Option>
              <Option value="HSI">HSI</Option>
              <Option value="CNS">CNS</Option>
              <Option value="RHU">RHU</Option>
              <Option value="MDN">MDN</Option>
            </Select>
            
            <Select
              value={filters.carrier}
              onChange={(value) => handleFilterChange('carrier', value)}
              style={{ width: 110 }}
              size="small"
              suffixIcon={<DownOutlined style={{ fontSize: '10px' }} />}
              bordered={true}
              className="dashboard-filter-select"
            >
              <Option value="ALL">Carrier ALL</Option>
              <Option value="CDMU">CDMU</Option>
              <Option value="HLCU">HLCU</Option>
              <Option value="COSU">COSU</Option>
              <Option value="EGLV">EGLV</Option>
            </Select>
            
            <Select
              value={filters.region}
              onChange={(value) => handleFilterChange('region', value)}
              style={{ width: 110 }}
              size="small"
              suffixIcon={<DownOutlined style={{ fontSize: '10px' }} />}
              bordered={true}
              className="dashboard-filter-select"
            >
              <Option value="ALL">Region ALL</Option>
              <Option value="China">China</Option>
              <Option value="Singapore">Singapore</Option>
              <Option value="Vietnam">Vietnam</Option>
            </Select>
            
            <Select
              value={filters.reqETD}
              onChange={(value) => handleFilterChange('reqETD', value)}
              style={{ width: 200 }}
              size="small"
              suffixIcon={<DownOutlined style={{ fontSize: '10px' }} />}
              bordered={true}
              className="dashboard-filter-select"
            >
              <Option value="Current + 15 days">Req. ETD Current + 15 days</Option>
              <Option value="Current + 30 days">Req. ETD Current + 30 days</Option>
              <Option value="Current + 60 days">Req. ETD Current + 60 days</Option>
            </Select>
          </Space>
        </Col>
        <Col flex="auto" />
        <Col>
          <Button 
            type="text" 
            icon={<ReloadOutlined />}
            onClick={handleRefresh}
            loading={loading}
            style={{ color: '#6b7280', fontSize: '14px' }}
          >
            Refresh
          </Button>
        </Col>
      </Row>
      
      <style>{`
        .dashboard-filter-select .ant-select-selector {
          border-radius: 16px !important;
          border: 1px solid #d1d5db !important;
          background-color: #f9fafb !important;
          font-size: 12px !important;
          height: 28px !important;
        }
        .dashboard-filter-select .ant-select-selection-item {
          line-height: 26px !important;
          font-size: 12px !important;
          color: #374151 !important;
        }
        .dashboard-filter-select:hover .ant-select-selector {
          border-color: #9ca3af !important;
        }
        .dashboard-filter-select.ant-select-focused .ant-select-selector {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default DashboardFilters;