import React, { useMemo, useState } from 'react';
import { Card, Table, Tag, Typography, Space, Select, Spin, Empty } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;
const { Option } = Select;

interface ExceptionData {
  id: string;
  region: string;
  customer: string;
  exceptionType: string;
  tmsNumber: string;
  reqEtdWeek: string;
  contractNumber: string;
  carrier: string;
}

const CBRequestsExceptions: React.FC = () => {
  // Filter states
  const [exceptionTypeFilter, setExceptionTypeFilter] = useState<string>('All');
  const [reqEtdWeekFilter, setReqEtdWeekFilter] = useState<string[]>([]);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const reqEtdWeeks = [...new Set(shipperBookingsData.map(item => item['req ETD wk']).filter(Boolean))].sort();
    
    return {
      reqEtdWeeks
    };
  }, []);

  // Helper function to determine exception type
  const getExceptionType = (item: any): string => {
    if (item['Excpt. Eqp?'] === 'Y') {
      return 'Container Type Mismatch';
    } else if (item['Excpt. ETD?'] === 'Y') {
      return 'ETD Mismatch';
    } else if (item['Exception?'] === 'Y') {
      return 'Contract Mismatch';
    }
    return 'Other';
  };

  // Process data for the table
  const tableData = useMemo(() => {
    let filteredData = shipperBookingsData;

    // Apply req ETD wk filter
    if (reqEtdWeekFilter.length > 0) {
      filteredData = filteredData.filter(item => reqEtdWeekFilter.includes(item['req ETD wk']));
    }

    // Apply exception type filter
    if (exceptionTypeFilter !== 'All') {
      if (exceptionTypeFilter === 'Container Type Mismatch') {
        filteredData = filteredData.filter(item => item['Excpt. Eqp?'] === 'Y');
      } else if (exceptionTypeFilter === 'ETD Mismatch') {
        filteredData = filteredData.filter(item => item['Excpt. ETD?'] === 'Y');
      } else if (exceptionTypeFilter === 'Contract Mismatch') {
        filteredData = filteredData.filter(item => 
          item['Exception?'] === 'Y' && 
          item['Excpt. Eqp?'] !== 'Y' && 
          item['Excpt. ETD?'] !== 'Y'
        );
      }
    }

    // Only show items with exceptions
    filteredData = filteredData.filter(item => item['Exception?'] === 'Y');

    return filteredData.map((item, index) => ({
      id: `${index + 1}`,
      region: item['Origin region'] || 'N/A',
      customer: item['Cust. Code'] || 'N/A',
      exceptionType: getExceptionType(item),
      tmsNumber: item['TMS #'] || 'N/A',
      reqEtdWeek: item['req ETD wk'] || 'N/A',
      contractNumber: item['Contract #'] || 'N/A',
      carrier: item['Carrier (Std)'] || 'N/A'
    }));
  }, [exceptionTypeFilter, reqEtdWeekFilter]);

  // Handle filter clicks
  const handleFilterClick = (filterType: string) => {
    setExceptionTypeFilter(filterType);
  };

  const columns: ColumnsType<ExceptionData> = [
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: 100,
      sorter: (a, b) => a.region.localeCompare(b.region),
      render: (text: string) => (
        <span style={{ fontSize: '12px', color: '#374151' }}>{text}</span>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      width: 100,
      sorter: (a, b) => a.customer.localeCompare(b.customer),
      render: (text: string) => (
        <span style={{ color: '#1890ff', fontWeight: '500', fontSize: '12px' }}>{text}</span>
      ),
    },
    {
      title: 'Exception Type',
      dataIndex: 'exceptionType',
      key: 'exceptionType',
      width: 150,
      sorter: (a, b) => a.exceptionType.localeCompare(b.exceptionType),
      render: (text: string) => {
        let color = '#666';
        // if (text === 'Container Type Mismatch') color = '#faad14';
        // else if (text === 'ETD Mismatch') color = '#ff4d4f';
        // else if (text === 'Contract Mismatch') color = '#52c41a';
        
        return (
          <span style={{ 
            color: color, 
            fontWeight: '500', 
            fontSize: '12px' 
          }}>
            {text}
          </span>
        );
      },
    },
    {
      title: 'TMS #',
      dataIndex: 'tmsNumber',
      key: 'tmsNumber',
      width: 120,
      sorter: (a, b) => a.tmsNumber.localeCompare(b.tmsNumber),
      render: (text: string) => (
        <span style={{ color: '#1890ff', fontWeight: '500', fontSize: '12px' }}>{`CB-${text}`}</span>
      ),
    },
  ];

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <WarningOutlined style={{ color: '#ff4d4f', fontSize: '16px' }} />
            <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>CB Requests Exceptions</Text>
            <div style={{
              backgroundColor: '#1f2937',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {tableData.length}
            </div>
          </div>
          
          {/* req ETD wk Filter */}
          <Select
            mode="multiple"
            placeholder="req ETD wk"
            value={reqEtdWeekFilter}
            onChange={setReqEtdWeekFilter}
            style={{ width: 120, fontSize: '12px' }}
            size="small"
            allowClear
            maxTagCount={0}
          >
            {filterOptions.reqEtdWeeks.map(week => (
              <Select.Option key={week} value={week}>
                {week}
              </Select.Option>
            ))}
          </Select>
        </div>
      }
      style={{ marginTop: '24px' }}
      styles={{ 
        body: { 
          padding: '0' 
        },
        header: {
          borderBottom: '1px solid #f0f0f0',
          minHeight: '48px',
          padding: '12px 16px'
        }
      }}
    >
      {/* Exception Type Filters */}
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
            color={exceptionTypeFilter === 'ETD Mismatch' ? 'blue' : undefined}
            onClick={() => handleFilterClick('ETD Mismatch')}
            style={{ 
              fontSize: '11px', 
              padding: '2px 8px',
              borderRadius: '12px',
              backgroundColor: exceptionTypeFilter === 'ETD Mismatch' ? '#1890ff' : '#f5f5f5',
              color: exceptionTypeFilter === 'ETD Mismatch' ? 'white' : '#666',
              border: exceptionTypeFilter === 'ETD Mismatch' ? 'none' : '1px solid #d9d9d9',
              cursor: 'pointer'
            }}
          >
            ETD Mismatch
          </Tag>
          <Tag
            color={exceptionTypeFilter === 'Container Type Mismatch' ? 'blue' : undefined}
            onClick={() => handleFilterClick('Container Type Mismatch')}
            style={{ 
              fontSize: '11px', 
              padding: '2px 8px',
              borderRadius: '12px',
              backgroundColor: exceptionTypeFilter === 'Container Type Mismatch' ? '#1890ff' : '#f5f5f5',
              color: exceptionTypeFilter === 'Container Type Mismatch' ? 'white' : '#666',
              border: exceptionTypeFilter === 'Container Type Mismatch' ? 'none' : '1px solid #d9d9d9',
              cursor: 'pointer'
            }}
          >
            Container Type Mismatch
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
      
      {/* Table */}
      <Table
        columns={columns}
        dataSource={tableData}
        rowKey="id"
        pagination={false}
        size="small"
        scroll={{ x: 600 }}
        style={{ fontSize: '12px' }}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <span style={{ color: '#999', fontSize: '14px' }}>
                  No exceptions found for the selected filters
                </span>
              }
            />
          )
        }}
      />
    </Card>
  );
};

export default CBRequestsExceptions;
