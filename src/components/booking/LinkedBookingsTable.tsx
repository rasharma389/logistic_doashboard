import React, { useState } from 'react';
import { Table, Tag, Space, Tooltip, Button, Input, Pagination } from 'antd';
import { InfoCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import type { ColumnsType } from 'antd/es/table';
import type { LinkedBooking } from '../../store/slices/bookingsSlice';
import dayjs from 'dayjs';

const LinkedBookingsTable: React.FC = () => {
  const { linkedBookings } = useSelector((state: RootState) => state.bookings);
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  const [goToPage, setGoToPage] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Requested':
        return 'purple';
      case 'Cancelled':
        return 'red';
      default:
        return 'default';
    }
  };

  const columns: ColumnsType<LinkedBooking> = [
    {
      title: 'CB#',
      dataIndex: 'cb',
      key: 'cb',
      render: (text: string) => (
        <Space>
          <span style={{ color: '#0ea5e9', fontWeight: '500' }}>{text}</span>
          <Tooltip title="Carrier booking information">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)} style={{ fontSize: '12px' }}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'POL',
      dataIndex: 'pol',
      key: 'pol',
      render: (text: string) => (
        <Space>
          <span style={{ color: '#0ea5e9', fontWeight: '500' }}>{text}</span>
          <Tooltip title="Port of loading">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'POD',
      dataIndex: 'pod',
      key: 'pod',
      render: (text: string) => (
        <Space>
          <span style={{ color: '#0ea5e9', fontWeight: '500' }}>{text}</span>
          <Tooltip title="Port of discharge">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'Carrier',
      dataIndex: 'carrier',
      key: 'carrier',
      render: (text: string) => (
        <Space>
          <span>{text}</span>
          <Tooltip title="Carrier information">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'ETD',
      dataIndex: 'etd',
      key: 'etd',
      render: (etd: string) => (dayjs(etd).isValid() ? dayjs(etd).format('DD MMM') : etd),
    },
  ];

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
  };

  const handleGoToPage = () => {
    const page = parseInt(goToPage);
    if (page && page > 0) {
      setCurrent(page);
      setGoToPage('');
    }
  };

  return (
    <div style={{ padding: '12px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Linked Bookings</span>
          <Button 
            type="text" 
            size="small" 
            style={{ fontSize: '12px', color: '#6b7280' }}
          >
            Hide
          </Button>
        </div>
        <Button 
          type="text" 
          icon={<EyeOutlined />}
          style={{ fontSize: '12px', color: '#6b7280' }}
        >
          Show Activity & Comments
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={linkedBookings}
        rowKey="cb"
        pagination={false}
        size="small"
        bordered
        style={{ fontSize: '13px' }}
      />

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '16px',
        fontSize: '13px'
      }}>
        <div style={{ color: '#6b7280' }}>
          {linkedBookings.length} Records
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Pagination
            current={current}
            pageSize={pageSize}
            total={linkedBookings.length}
            showSizeChanger={false}
            simple
            onChange={setCurrent}
            style={{ fontSize: '13px' }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{pageSize} / page</span>
            <span>Go to</span>
            <Input
              size="small"
              value={goToPage}
              onChange={(e) => setGoToPage(e.target.value)}
              onPressEnter={handleGoToPage}
              style={{ width: '60px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedBookingsTable;