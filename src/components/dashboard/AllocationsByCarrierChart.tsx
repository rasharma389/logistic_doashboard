import React from 'react';
import { Card, Typography, Spin } from 'antd';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const { Text } = Typography;

const AllocationsByCarrierChart: React.FC = () => {
  const { allocationsByCarrier, loading } = useSelector((state: RootState) => state.dashboard);

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Text style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Allocations by Carrier</Text>
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
          <Spin />
        </div>
      ) : (
        <div style={{ height: '100%' }}>
          <ResponsiveTreeMap
            data={allocationsByCarrier}
            identity="name"
            value="value"
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            labelSkipSize={12}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.2]]
            }}
            parentLabelTextColor="#ffffff"
            borderColor="#ffffff"
            borderWidth={2}
            colors={{ datum: 'data.color' }}
            nodeOpacity={1}
            enableParentLabel={false}
            innerPadding={2}
            outerPadding={2}
            enableLabel={true}
            label={(node) => `${node.id} (${node.value})`}
            tooltip={({ node }) => {
              if (!node || !node.data || node.depth === 0) return null;
              return (
              <div style={{
                background: 'white',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                fontSize: '12px'
              }}>
                <strong>{node.id}</strong>: {node.value}
              </div>
              );
            }}
          />
        </div>
      )}
    </Card>
  );
};

export default AllocationsByCarrierChart;