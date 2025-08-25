import React, { useMemo, useState } from 'react';
import { Card, Typography, Spin, Select, Space } from 'antd';
import { ResponsivePie } from '@nivo/pie';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const { Text } = Typography;

const BookingNextTwoToFourWeeksETD: React.FC = () => {
  // Filter states
  const [reqEtdWeekFilter, setReqEtdWeekFilter] = useState<string[]>(['33']);
  const [contractFilter, setContractFilter] = useState<string[]>([]);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const reqEtdWeeks = [...new Set(shipperBookingsData.map(item => item['req ETD wk']).filter(Boolean))].sort();
    const contracts = [...new Set(shipperBookingsData.map(item => item['Contract #']).filter(Boolean))].sort();
    
    return {
      reqEtdWeeks,
      contracts
    };
  }, []);

  // Process data for the chart
  const chartData = useMemo(() => {
    // Apply filters to the data
    let filteredData = shipperBookingsData;
    
    if (reqEtdWeekFilter.length > 0) {
      filteredData = filteredData.filter(item => reqEtdWeekFilter.includes(item['req ETD wk']));
    }
    
    if (contractFilter.length > 0) {
      filteredData = filteredData.filter(item => contractFilter.includes(item['Contract #']));
    }

    // Calculate totals for each status
    const confirmed = filteredData
      .filter(item => item['Booking Status'] === 'Confirmed')
      .reduce((sum, item) => {
        const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
        const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
        return sum + (bcFeu > 0 ? bcFeu : brFeu);
      }, 0);

    const pending = filteredData
      .filter(item => item['Booking Status'] === 'Pending')
      .reduce((sum, item) => {
        const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
        const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
        return sum + (bcFeu > 0 ? bcFeu : brFeu);
      }, 0);

    const canceledByCarrier = filteredData
      .filter(item => item['300/301 Status'] === 'Canceled' && item['Booking Status'] !== 'Confirmed')
      .reduce((sum, item) => {
        const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
        const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
        return sum + (bcFeu > 0 ? bcFeu : brFeu);
      }, 0);

    const canceledByRequestor = filteredData
      .filter(item => item['Booking Status'] === 'Canceled' && item['300/301 Status'] !== 'Canceled')
      .reduce((sum, item) => {
        const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
        const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
        return sum + (bcFeu > 0 ? bcFeu : brFeu);
      }, 0);

    return [
      {
        id: 'confirmed',
        label: 'Confirmed',
        value: Math.round(confirmed * 1000) / 1000,
        color: '#52c41a'
      },
      {
        id: 'pending',
        label: 'Pending',
        value: Math.round(pending * 1000) / 1000,
        color: '#1890ff'
      },
      {
        id: 'canceledByCarrier',
        label: 'Canceled by carrier',
        value: Math.round(canceledByCarrier * 1000) / 1000,
        color: '#eb2f96'
      },
      {
        id: 'canceledByRequestor',
        label: 'Canceled by requestor',
        value: Math.round(canceledByRequestor * 1000) / 1000,
        color: '#faad14'
      }
    ].filter(item => item.value > 0); // Only show segments with values > 0
  }, [reqEtdWeekFilter, contractFilter]);

  // Calculate total bookings
  const totalBookings = useMemo(() => {
    return chartData.reduce((sum, item) => sum + item.value, 0);
  }, [chartData]);

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Booking with ETD's within next 2 to 4 weeks</Text>
            <div style={{
              backgroundColor: '#1f2937',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {Math.round(totalBookings)}
            </div>
          </div>
          
          {/* Filters */}
          <Space size="small">
            <Select
              mode="multiple"
              placeholder="req ETD wk"
              value={reqEtdWeekFilter}
              onChange={setReqEtdWeekFilter}
              style={{ width: 80, fontSize: '12px' }}
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
            
            <Select
              mode="multiple"
              placeholder="Contract #"
              value={contractFilter}
              onChange={setContractFilter}
              style={{ width: 80, fontSize: '12px' }}
              size="small"
              allowClear
              maxTagCount={0}
            >
              {filterOptions.contracts.map(contract => (
                <Select.Option key={contract} value={contract}>
                  {contract}
                </Select.Option>
              ))}
            </Select>
          </Space>
        </div>
      }
      style={{ height: '320px' }}
      styles={{ 
        body: { 
          padding: '16px', 
          height: 'calc(100% - 57px)' 
        }
      }}
      headStyle={{ 
        borderBottom: '1px solid #f0f0f0',
        minHeight: '48px',
        padding: '12px 16px'
      }}
    >
      {chartData.length === 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ height: '100%', position: 'relative' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            {/* Legend table on the left */}
            <div style={{ 
              width: '220px', 
              paddingTop: '20px',
              paddingRight: '16px'
            }}>
              <div style={{
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                {/* Table header */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  padding: '8px 12px',
                  borderBottom: '1px solid #e2e8f0',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Status</span>
                    <span>FEU</span>
                  </div>
                </div>
                
                {/* Table rows */}
                {chartData.map((item) => (
                  <div key={item.id} style={{
                    padding: '8px 12px',
                    borderBottom: '1px solid #f1f5f9',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: item.color,
                        flexShrink: 0
                      }} />
                      <span style={{ color: '#6b7280' }}>{item.label}</span>
                    </div>
                    <span style={{ 
                      fontWeight: '600', 
                      color: '#374151',
                      fontSize: '11px'
                    }}>
                      {item.value}
                    </span>
                  </div>
                ))}
                
                {/* Total row */}
                <div style={{
                  backgroundColor: '#f1f5f9',
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#1f2937'
                }}>
                  <span>Total</span>
                  <span>{Math.round(totalBookings)}</span>
                </div>
              </div>
            </div>
            
            {/* Chart on the right */}
            <div style={{ flex: 1, height: '100%' }}>
              <ResponsivePie
                data={chartData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.6}
                padAngle={2}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ datum: 'data.color' }}
                borderWidth={0}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                tooltip={({ datum }) => (
                  <div style={{
                    background: 'white',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    fontSize: '12px'
                  }}>
                    <strong>{datum.label}</strong>: {datum.value} FEU
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default BookingNextTwoToFourWeeksETD;
