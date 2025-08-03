import React from 'react';
import { Card, Typography, Spin } from 'antd';
import { ResponsiveBar } from '@nivo/bar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const { Text } = Typography;

const DaysBeforeETDChart: React.FC = () => {
  const { daysBeforeETD, loading } = useSelector((state: RootState) => state.dashboard);

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Days Before Requested ETD</Text>
          <div style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            198
          </div>
        </div>
      }
      style={{ height: '320px' }}
      bodyStyle={{ padding: '16px', height: 'calc(100% - 57px)' }}
      headStyle={{ 
        borderBottom: '1px solid #f0f0f0',
        minHeight: '48px',
        padding: '12px 16px'
      }}
    >
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ height: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            {/* Legend on the left */}
            <div style={{ 
              width: '180px', 
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {[
                { key: 'confirmed', label: 'Confirmed', color: '#52c41a' },
                { key: 'requestedWithResponse', label: 'Requested w/ response', color: '#1890ff' },
                { key: 'requestedNoResponse', label: 'Requested, no response', color: '#722ed1' },
                { key: 'cancelledByCarrier', label: 'Cancelled by carrier', color: '#eb2f96' },
                { key: 'cancelledBy3PL', label: 'Cancelled by 3PL', color: '#faad14' }
              ].map((item) => (
                <div key={item.key} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  fontSize: '13px',
                  color: '#666'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    flexShrink: 0
                  }} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* Chart on the right */}
            <div style={{ flex: 1, height: '100%' }}>
              <ResponsiveBar
                data={daysBeforeETD}
                keys={['confirmed', 'requestedWithResponse', 'requestedNoResponse', 'cancelledByCarrier', 'cancelledBy3PL']}
                indexBy="day"
                margin={{ top: 20, right: 20, bottom: 60, left: 40 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={['#52c41a', '#1890ff', '#722ed1', '#eb2f96', '#faad14']}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Number of Days Before Req. ETD',
                  legendPosition: 'middle',
                  legendOffset: 40
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Number of Requests',
                  legendPosition: 'middle',
                  legendOffset: -35
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                enableLabel={false}
                tooltip={({ id, value, color }) => (
                  <div style={{
                    background: 'white',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    fontSize: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '12px', height: '12px', backgroundColor: color, borderRadius: '2px' }} />
                      <strong>{id}</strong>: {value}
                    </div>
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

export default DaysBeforeETDChart;