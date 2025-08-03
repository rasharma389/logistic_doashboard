import React from 'react';
import { Card, Table, Tag, Button, Space, Select, Spin, Typography, Empty } from 'antd';
import { WarningOutlined, DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setSelectedExceptionFilters, setExceptionTypeFilter } from '../../store/slices/dashboardSlice';
import type { ColumnsType } from 'antd/es/table';
import type { ExceptionItem } from '../../data/dashboardData';

const { Option } = Select;
const { Text } = Typography;

const ExceptionsTable: React.FC = () => {
  const dispatch = useDispatch();
  const { exceptionItems, loading, selectedExceptionFilters, exceptionTypeFilter } = useSelector((state: RootState) => state.dashboard);

  const handleFilterClick = (filterType: string) => {
    dispatch(setExceptionTypeFilter(filterType));
  };

  // Filter data based on selected exception type
  const filteredData = React.useMemo(() => {
    if (exceptionTypeFilter === 'All') {
      return exceptionItems;
    }
    
    const filterMap: Record<string, string> = {
      'Carrier Cannot Release Booking Confirmation On ETD-7': 'No Carrier Confirmation',
      'Carrier Delayed ETD Port Of Loading For More Than 3 Days': 'Delayed schedule from ca...',
      'Contract Mismatch': 'Contract mismatch'
    };
    
    const targetExpType = filterMap[exceptionTypeFilter];
    return exceptionItems.filter(item => item.expType === targetExpType);
  }, [exceptionItems, exceptionTypeFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return '#1890ff';
      case 'Assigned':
        return '#faad14';
      default:
        return 'default';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'Open':
        return '#1890ff';
      case 'Assigned':
        return '#faad14';
      default:
        return '#666';
    }
  };

  const columns: ColumnsType<ExceptionItem> = [
    {
      title: '',
      dataIndex: 'id',
      key: 'checkbox',
      width: 40,
      render: () => (
        <input type="checkbox" style={{ margin: 0 }} />
      ),
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: 80,
      sorter: (a, b) => a.region.localeCompare(b.region),
      render: (text: string) => (
        <span style={{ fontSize: '12px', color: '#374151' }}>{text}</span>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      width: 80,
      sorter: (a, b) => a.customer.localeCompare(b.customer),
      render: (text: string) => (
        <span style={{ color: '#1890ff', fontWeight: '500', fontSize: '12px' }}>{text}</span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text: string) => (
        <span style={{ color: '#1890ff', fontSize: '12px' }}>{text}</span>
      ),
    },
    {
      title: 'Exp Type',
      dataIndex: 'expType',
      key: 'expType',
      width: 150,
      sorter: (a, b) => a.expType.localeCompare(b.expType),
      render: (text: string) => (
        <span style={{ color: '#1890ff', fontSize: '12px' }}>{text}</span>
      ),
    },
    {
      title: 'Exception Details',
      dataIndex: 'exceptionDetails',
      key: 'exceptionDetails',
      width: 250,
      sorter: (a, b) => a.exceptionDetails.localeCompare(b.exceptionDetails),
      ellipsis: true,
      render: (text: string) => (
        <span style={{ fontSize: '12px', color: '#374151' }}>{text}</span>
      ),
    },
    {
      title: 'CB#',
      dataIndex: 'cb',
      key: 'cb',
      width: 120,
      sorter: (a, b) => a.cb.localeCompare(b.cb),
      render: (text: string) => (
        <span style={{ color: '#1890ff', fontWeight: '500', fontSize: '12px' }}>{text}</span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status: string) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: getStatusColor(status)
          }} />
          <span style={{ 
            fontSize: '12px', 
            color: getStatusTextColor(status),
            fontWeight: '500'
          }}>
            {status}
          </span>
          <DownOutlined style={{ fontSize: '8px', color: '#9ca3af' }} />
        </div>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 80,
      sorter: (a, b) => a.createdDate.localeCompare(b.createdDate),
      render: (text: string) => (
        <span style={{ fontSize: '12px', color: '#374151' }}>{text}</span>
      ),
    },
  ];

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <WarningOutlined style={{ color: '#ff4d4f', fontSize: '16px' }} />
            <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>CB Requests w/ Exceptions</Text>
            <div style={{
              backgroundColor: '#1f2937',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              32
            </div>
          </div>
          <Button 
            type="primary" 
            size="small"
            style={{ 
              fontSize: '12px',
              height: '28px',
              borderRadius: '4px'
            }}
          >
            Resolve Exceptions →
          </Button>
        </div>
      }
      style={{ marginTop: '24px' }}
      bodyStyle={{ padding: '0' }}
      headStyle={{ 
        borderBottom: '1px solid #f0f0f0',
        minHeight: '48px',
        padding: '12px 16px'
      }}
    >
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0' }}>
        <Space wrap size={8}>
          <Tag
            color={exceptionTypeFilter === 'All' ? 'blue' : undefined}
            onClick={() => handleFilterClick('All')}
            style={{ 
              fontSize: '11px', 
              padding: '2px 8px',
              borderRadius: '12px',
              border: exceptionTypeFilter === 'All' ? 'none' : '1px solid #d9d9d9',
              backgroundColor: exceptionTypeFilter === 'All' ? '#1890ff' : '#f5f5f5',
              color: exceptionTypeFilter === 'All' ? 'white' : '#666',
              cursor: 'pointer'
            }}
          >
            All
          </Tag>
          <Tag
            color={exceptionTypeFilter === 'Carrier Cannot Release Booking Confirmation On ETD-7' ? 'blue' : undefined}
            onClick={() => handleFilterClick('Carrier Cannot Release Booking Confirmation On ETD-7')}
            style={{ 
              fontSize: '11px', 
              padding: '2px 8px',
              borderRadius: '12px',
              backgroundColor: exceptionTypeFilter === 'Carrier Cannot Release Booking Confirmation On ETD-7' ? '#1890ff' : '#f5f5f5',
              color: exceptionTypeFilter === 'Carrier Cannot Release Booking Confirmation On ETD-7' ? 'white' : '#666',
              border: exceptionTypeFilter === 'Carrier Cannot Release Booking Confirmation On ETD-7' ? 'none' : '1px solid #d9d9d9',
              cursor: 'pointer'
            }}
          >
            Carrier Cannot Release Booking Confirmation On ETD-7
          </Tag>
          <Tag
            color={exceptionTypeFilter === 'Carrier Delayed ETD Port Of Loading For More Than 3 Days' ? 'blue' : undefined}
            onClick={() => handleFilterClick('Carrier Delayed ETD Port Of Loading For More Than 3 Days')}
            style={{ 
              fontSize: '11px', 
              padding: '2px 8px',
              borderRadius: '12px',
              backgroundColor: exceptionTypeFilter === 'Carrier Delayed ETD Port Of Loading For More Than 3 Days' ? '#1890ff' : '#f5f5f5',
              color: exceptionTypeFilter === 'Carrier Delayed ETD Port Of Loading For More Than 3 Days' ? 'white' : '#666',
              border: exceptionTypeFilter === 'Carrier Delayed ETD Port Of Loading For More Than 3 Days' ? 'none' : '1px solid #d9d9d9',
              cursor: 'pointer'
            }}
          >
            Carrier Delayed ETD Port Of Loading For More Than 3 Days
          </Tag>
          <Tag
            color={exceptionTypeFilter === 'Contract Mismatch' ? 'blue' : undefined}
            onClick={() => handleFilterClick('Contract Mismatch')}
            style={{ 
              fontSize: '11px', 
              padding: '2px 8px',
              borderRadius: '12px',
              backgroundColor: exceptionTypeFilter === 'Contract Mismatch' ? '#1890ff' : '#f5f5f5',
              color: exceptionTypeFilter === 'Contract Mismatch' ? 'white' : '#666',
              border: exceptionTypeFilter === 'Contract Mismatch' ? 'none' : '1px solid #d9d9d9',
              cursor: 'pointer'
            }}
          >
            Contract Mismatch
          </Tag>
        </Space>
      </div>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
          <Spin />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={false}
          size="small"
          scroll={{ x: 1200 }}
          style={{ fontSize: '12px' }}
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span style={{ color: '#999', fontSize: '14px' }}>
                    No data found for the selected filter
                  </span>
                }
              />
            )
          }}
        />
      )}
    </Card>
  );
};

export default ExceptionsTable;