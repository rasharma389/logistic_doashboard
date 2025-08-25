import React, { useMemo, useState } from 'react';
import { Card, Typography, Spin, Select, Space } from 'antd';
import { ResponsiveBar } from '@nivo/bar';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const { Text } = Typography;

const BookingLastMonth: React.FC = () => {
  // Filter states
  const [reqEtdWeekFilter, setReqEtdWeekFilter] = useState<string[]>(['28', '29', '31','32']);
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
    
    // Get unique carriers from filtered data
    const carriers = [...new Set(filteredData.map(item => item['Carrier (Std)']).filter(Boolean))];
    
    // Process data for each carrier
    return carriers.map(carrier => {
      const carrierBookings = filteredData.filter(item => item['Carrier (Std)'] === carrier);
      
      // Calculate totals for each status
      const confirmed = carrierBookings
        .filter(item => item['Booking Status'] === 'Confirmed')
        .reduce((sum, item) => {
          const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
          const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
          return sum + (bcFeu > 0 ? bcFeu : brFeu);
        }, 0);
      
      const canceledByCarrier = carrierBookings
        .filter(item => item['300/301 Status'] === 'Canceled' && item['Booking Status'] !== 'Confirmed')
        .reduce((sum, item) => {
          const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
          const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
          return sum + (bcFeu > 0 ? bcFeu : brFeu);
        }, 0);
      
      const canceledByRequestor = carrierBookings
        .filter(item => item['Booking Status'] === 'Canceled' && item['300/301 Status'] !== 'Canceled')
        .reduce((sum, item) => {
          const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
          const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
          return sum + (bcFeu > 0 ? bcFeu : brFeu);
        }, 0);
      
      const pending = carrierBookings
        .filter(item => item['Booking Status'] === 'Pending')
        .reduce((sum, item) => {
          const brFeu = parseFloat(item['BR:Req. FEU'] || '0');
          const bcFeu = parseFloat(item['BC:Conf. FEU'] || '0');
          return sum + (bcFeu > 0 ? bcFeu : brFeu);
        }, 0);
      
      return {
        carrier,
        confirmed: Math.round(confirmed * 1000) / 1000, // Round to 3 decimal places
        'canceled by carrier': Math.round(canceledByCarrier * 1000) / 1000,
        'canceled by requestor': Math.round(canceledByRequestor * 1000) / 1000,
        pending: Math.round(pending * 1000) / 1000,
        total: Math.round((confirmed + canceledByCarrier + canceledByRequestor + pending) * 1000) / 1000
      };
    }).sort((a, b) => b.total - a.total); // Sort by total descending
  }, [reqEtdWeekFilter, contractFilter]);

  // Calculate total bookings across all carriers
  const totalBookings = useMemo(() => {
    return chartData.reduce((sum, item) => sum + item.total, 0);
  }, [chartData]);

  // Define colors for each status - using similar colors as the donut chart
  const colors = {
    confirmed: '#52c41a',      // Green (same as donut chart)
    'canceled by carrier': '#eb2f96', // Pink (same as donut chart)
    'canceled by requestor': '#faad14', // Orange (same as donut chart)
    pending: '#1890ff'        // Blue (similar to donut chart)
  };

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Booking within the last month</Text>
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
          {/* Chart area - full width */}
          <div style={{ height: 'calc(100% - 60px)' }}>
            <ResponsiveBar
              data={chartData}
              keys={['confirmed', 'canceled by carrier', 'canceled by requestor', 'pending']}
              indexBy="carrier"
              margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
              padding={0.3}
              groupMode="stacked"
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={({ id, data }) => colors[id as keyof typeof colors]}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]]
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Carrier',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'FEU',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="#ffffff"
              legends={[]}
              role="application"
              ariaLabel="Booking status by carrier chart"
              barAriaLabel={function(e) {
                return e.id + ", " + e.formattedValue + " in carrier: " + e.indexValue;
              }}
              tooltip={({ id, value, color }) => (
                <div style={{
                  background: 'white',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  fontSize: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '2px',
                      backgroundColor: color
                    }} />
                    <strong>{id.toString().replace(/([A-Z])/g, ' $1').trim()}</strong>
                  </div>
                  <div>Value: {value} FEU</div>
                </div>
              )}
            />
          </div>
          
          {/* Legend at the bottom */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '24px',
            paddingTop: '16px',
            borderTop: '1px solid #f0f0f0'
          }}>
            {Object.entries(colors).map(([key, color]) => (
              <div key={key} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: '12px',
                color: '#666'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '2px',
                  backgroundColor: color
                }} />
                <span style={{ textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default BookingLastMonth;
