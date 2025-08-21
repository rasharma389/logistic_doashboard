import React, { useMemo } from 'react';
import { Table, Card, Tag, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { transportPlanData, type TransportPlanItem } from '../../data/transportPlanData';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const { Title, Text } = Typography;

const TransportPlan: React.FC = () => {
  const { selectedBookingId } = useSelector((state: RootState) => state.bookings);
  
  // Get the TMS number from the selected booking
  const getTmsNumber = (): string | null => {
    if (!selectedBookingId) return null;
    
    // Remove CB- prefix if present
    const cleanId = selectedBookingId.startsWith('CB-') ? selectedBookingId.substring(3) : selectedBookingId;
    return cleanId;
  };

  const tmsNumber = getTmsNumber();
  
  // Get the actual booking data from shipperBookingsData
  const bookingData = useMemo(() => {
    if (!tmsNumber) return null;
    return shipperBookingsData.find(booking => booking['TMS #'] === tmsNumber);
  }, [tmsNumber]);

  // Generate transport plan dynamically from actual booking data
  const transportData = useMemo(() => {
    if (!bookingData) return null;

    const ts: TransportPlanItem[] = [];
    
    // Always start with POL (Port of Loading)
    ts.push({
      term: "POL",
      departureArrival: "Departure",
      port: bookingData['BR:POL'] || '',
      terminal: "",
      timestamps: "",
      date: bookingData['BC:ETD POL'] || '',
      time: "",
      type: "MV1",
      vesselVoyage: `${bookingData['BC:1st Vessel'] || ''} + ${bookingData['BC:1st Voyage #'] || ''}`
    });

    // Add T/S port 1 if it exists
    if (bookingData['T/S port 1']) {
      ts.push({
        term: "2nd",
        departureArrival: "Arrival",
        port: bookingData['T/S port 1'],
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "",
        vesselVoyage: ""
      });

      ts.push({
        term: "3rd",
        departureArrival: "Departure",
        port: bookingData['T/S port 1'],
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV2",
        vesselVoyage: `${bookingData['BC:2nd Vessel'] || ''} + ${bookingData['BC:2nd Voyage #'] || ''}`
      });
    }

    // Add T/S port 2 if it exists
    if (bookingData['T/S port 2']) {
      ts.push({
        term: ts.length === 3 ? "4th" : "2nd",
        departureArrival: "Arrival",
        port: bookingData['T/S port 2'],
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV3",
        vesselVoyage: `${bookingData['BC:3rd Vessel'] || ''} + ${bookingData['BC:3rd Voyage #'] || ''}`
      });

      ts.push({
        term: ts.length === 4 ? "5th" : "3rd",
        departureArrival: "Departure",
        port: bookingData['T/S port 2'],
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV3",
        vesselVoyage: `${bookingData['BC:3rd Vessel'] || ''} + ${bookingData['BC:3rd Voyage #'] || ''}`
      });
    }

    // Always end with POD (Port of Discharge)
    ts.push({
      term: ts.length === 1 ? "POD" : (ts.length === 3 ? "POD" : (ts.length === 5 ? "POD" : "4th")),
      departureArrival: "Arrival",
      port: bookingData['BR:POD'] || '',
      terminal: "",
      timestamps: "",
      date: bookingData['BC:1st ETA POD'] || '',
      time: "",
      type: "",
      vesselVoyage: ""
    });

    return {
      tmsNumber: tmsNumber,
      ts: ts,
      cutoff: {
        si: bookingData['BC: SI Cut-off Date'] + ' ' + bookingData['BC: SI Cut-off Time'] || '',
        vgm: bookingData['BC: VGM Cut-off Date'] + ' ' + bookingData['BC: VGM Cut-off Time'] || '',
        cy: bookingData['BC: CY Cut-off Date'] + ' ' + bookingData['BC: CY Cut-off Time'] || ''
      }
    };
  }, [bookingData, tmsNumber]);

  // Define table columns
  const columns = [
    {
      title: 'Departure/Arrival',
      dataIndex: 'departureArrival',
      key: 'departureArrival',
      width: 120,
      render: (text: string) => (
        <Tag 
          color={text === 'Departure' ? 'orange' : 'green'}
          style={{ fontWeight: '500' }}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: 'Port',
      dataIndex: 'port',
      key: 'port',
      width: 150,
      render: (text: string) => (
        <Text style={{ 
          fontWeight: text && (text.includes('POL') || text.includes('POD')) ? 'bold' : 'normal',
          color: text && (text.includes('POL') || text.includes('POD')) ? '#1890ff' : 'inherit'
        }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Terminal',
      dataIndex: 'terminal',
      key: 'terminal',
      width: 100,
      render: (text: string) => text || '-',
    },
    {
      title: 'Timestamps',
      dataIndex: 'timestamps',
      key: 'timestamps',
      width: 120,
      render: (text: string) => text || '-',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 150,
      render: (text: string) => (
        <Text style={{ fontWeight: '500' }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
      render: (text: string) => text || '-',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 80,
      render: (text: string) => (
        text ? (
          <Tag color="purple" style={{ fontWeight: 'bold' }}>
            {text}
          </Tag>
        ) : '-'
      ),
    },
    {
      title: 'Vessel & Voyage',
      dataIndex: 'vesselVoyage',
      key: 'vesselVoyage',
      width: 200,
      render: (text: string) => (
        <Text style={{ fontWeight: '500' }}>
          {text || '-'}
        </Text>
      ),
    },
  ];

  if (!transportData) {
    return (
      <Card title="Transport Plan" style={{ margin: '16px 0' }}>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <Text type="secondary">No transport plan data available for the selected booking</Text>
        </div>
      </Card>
    );
  }

  return (
    <div style={{ padding: '12px' }}>
      {/* Cutoff Information */}
      <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '16px', 
        borderRadius: '6px', 
        marginBottom: '16px',
        border: '1px solid #e2e8f0'
      }}>
        <Title level={5} style={{ margin: '0 0 12px 0', color: '#374151', fontSize: '14px' }}>
          Cut-off Dates
        </Title>
        <Space size="small">
          <div>
            <Text strong style={{ color: '#6b7280' }}>SI:</Text>
            <Text style={{ marginLeft: '8px' }}>{transportData.cutoff.si}</Text>
          </div>
          <div>
            <Text strong style={{ color: '#6b7280' }}>VGM:</Text>
            <Text style={{ marginLeft: '8px' }}>{transportData.cutoff.vgm}</Text>
          </div>
          <div>
            <Text strong style={{ color: '#6b7280' }}>CY:</Text>
            <Text style={{ marginLeft: '8px' }}>{transportData.cutoff.cy}</Text>
          </div>
        </Space>
      </div>

      {/* Transport Plan Table */}
      <Table
        columns={columns}
        dataSource={transportData.ts}
        rowKey="term"
        pagination={false}
        size="small"
        bordered
        style={{ 
          backgroundColor: 'white',
          borderRadius: '6px'
        }}
        rowClassName={(record) => {
          if (record.term === 'POL' || record.term === 'POD') {
            return 'pol-pod-row';
          }
          return '';
        }}
      />

      <style>{`
        .pol-pod-row {
          background-color: #f0f9ff !important;
        }
        .pol-pod-row:hover {
          background-color: #e0f2fe !important;
        }
      `}</style>
    </div>
  );
};

export default TransportPlan;
