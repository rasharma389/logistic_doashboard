import React from 'react';
import { Card, Typography, Spin } from 'antd';
import { ResponsivePie } from '@nivo/pie';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const { Text } = Typography;

const CBRequestsByStatusChart: React.FC = () => {
  const { cbRequestsByStatus, loading, summary } = useSelector((state: RootState) => state.dashboard);

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>CB Requests by Status</Text>
          <div style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            234
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
        <div style={{ height: '100%', position: 'relative' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            {/* Legend on the left */}
            <div style={{ 
              width: '180px', 
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {cbRequestsByStatus.map((item) => (
                <div key={item.id} style={{ 
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
              <ResponsivePie
                data={cbRequestsByStatus}
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
                    <strong>{datum.label}</strong>: {datum.value}
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

export default CBRequestsByStatusChart;