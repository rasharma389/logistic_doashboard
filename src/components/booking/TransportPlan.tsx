import React, { useMemo } from 'react';
import { Table, Tag, Space, Typography, Tabs, Timeline, Row, Col, Card } from 'antd';
import { EnvironmentOutlined, ContainerOutlined, ClockCircleOutlined, TableOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { type TransportPlanItem } from '../../data/transportPlanData';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import dayjs from 'dayjs';
import { LiaShipSolid } from "react-icons/lia";
import TransportPlanNew from './TransportPlanNew';

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
  
  // Function to format time in 24-hour format
  const formatTime24Hour = (dateStr: string, timeStr: string): string => {
    if (!dateStr || !timeStr) return '';
    
    try {
      // Parse the date and time
      const dateTimeStr = `${dateStr} ${timeStr}`;
      const dateTime = dayjs(dateTimeStr, 'DD-MMM HH:mm:ss A');
      
      if (dateTime.isValid()) {
        // Format as DD-MMM HH:mm (24-hour)
        return dateTime.format('DD-MMM HH:mm');
      }
      
      // Fallback: try different format
      const dateTime2 = dayjs(dateTimeStr, 'h:mm:ss A');
      if (dateTime2.isValid()) {
        return `${dateStr} ${dateTime2.format('HH:mm')}`;
      }
      
      // If parsing fails, return original
      return `${dateStr} ${timeStr}`;
    } catch (error) {
      return `${dateStr} ${timeStr}`;
    }
  };
  
  // Get the actual booking data from shipperBookingsData
  const bookingData = useMemo(() => {
    if (!tmsNumber) return null;
    return shipperBookingsData.find(booking => booking['TMS #'] === tmsNumber);
  }, [tmsNumber]);

  // Generate transport plan dynamically from actual booking data
  const transportData = useMemo(() => {
    console.log(bookingData)
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
        si: formatTime24Hour(bookingData['BC: SI Cut-off Date'], bookingData['BC: SI Cut-off Time']),
        vgm: formatTime24Hour(bookingData['BC: VGM Cut-off Date'], bookingData['BC: VGM Cut-off Time']),
        cy: formatTime24Hour(bookingData['BC: CY Cut-off Date'], bookingData['BC: CY Cut-off Time'])
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
          style={{ fontWeight: '500', fontSize: '11px' }}
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
          color: text && (text.includes('POL') || text.includes('POD')) ? '#1890ff' : 'inherit',
          fontSize: '13px'
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
      render: (text: string) => (
        <Text style={{ fontSize: '13px' }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Timestamps',
      dataIndex: 'timestamps',
      key: 'timestamps',
      width: 120,
      render: (text: string) => (
        <Text style={{ fontSize: '13px' }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 150,
      render: (text: string) => (
        <Text style={{ fontWeight: '500', fontSize: '13px' }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
      render: (text: string) => (
        <Text style={{ fontSize: '13px' }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 80,
      render: (text: string) => (
        text ? (
          <Tag color="purple" style={{ fontWeight: 'bold', fontSize: '11px' }}>
            {text}
          </Tag>
        ) : (
          <Text style={{ fontSize: '13px' }}>-</Text>
        )
      ),
    },
    {
      title: 'Vessel & Voyage',
      dataIndex: 'vesselVoyage',
      key: 'vesselVoyage',
      width: 200,
      render: (text: string) => (
        <Text style={{ fontWeight: '500', fontSize: '13px' }}>
          {text || '-'}
        </Text>
      ),
    },
  ];

  // Helper functions for status messages
  const getStatusMessage = () => {
    if (!bookingData) return 'No booking data available';
    
    const status = bookingData['Booking Status'];
    if (!status) return 'No booking status available';
    
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === 'pending') {
      return 'Transport plan will be available once the booking is confirmed. Current status: Pending';
    } else if (lowerStatus.includes('canceled') || lowerStatus.includes('cancelled')) {
      return 'Transport plan is not available for canceled bookings. Current status: ' + status;
    } else {
      return `Transport plan is only available for confirmed bookings. Current status: ${status}`;
    }
  };

  const getStatusStyle = () => {
    if (!bookingData) return { backgroundColor: '#fef2f2', border: '1px solid #fecaca' };
    
    const status = bookingData['Booking Status']?.toLowerCase();
    if (status === 'pending') {
      return { backgroundColor: '#fef3c7', border: '1px solid #fcd34d' }; // Yellow for pending
    } else if (status?.includes('canceled') || status?.includes('cancelled')) {
      return { backgroundColor: '#fef2f2', border: '1px solid #fecaca' }; // Red for canceled
    } else {
      return { backgroundColor: '#f3f4f6', border: '1px solid #d1d5db' }; // Gray for other statuses
    }
  };

  const getStatusColor = () => {
    if (!bookingData) return '#dc2626';
    
    const status = bookingData['Booking Status']?.toLowerCase();
    if (status === 'pending') return '#d97706'; // Orange for pending
    else if (status?.includes('canceled') || status?.includes('cancelled')) return '#dc2626'; // Red for canceled
    else return '#6b7280'; // Gray for other statuses
  };

  // Create timeline items for the visual timeline
  const timelineItems = useMemo(() => {
    if (!transportData) return [];

    return transportData.ts.map((item, index) => {
      const isPortLocation = item.term === 'POL' || item.term === 'POD';
      const isVessel = item.type && item.type.startsWith('MV');

      // Calculate transit time for vessels
      const getTransitTime = (currentIndex: number) => {
        if (currentIndex === 0 || currentIndex >= transportData.ts.length - 1) return null;
        
        const currentDate = item.date;
        const nextItem = transportData.ts[currentIndex + 1];
        
        if (currentDate && nextItem?.date) {
          // For demo purposes, we'll calculate a simple transit time
          // You can enhance this with actual date calculation
          const transitDays = Math.abs(Math.random() * 45 + 5).toFixed(0);
          return `${transitDays} Days`;
        }
        return null;
      };

      const transitTime = getTransitTime(index);

      return {
        dot: isPortLocation ? (
          <EnvironmentOutlined style={{ fontSize: '16px', color: '#1890ff' }} />
        ) : isVessel ? (
          <ContainerOutlined style={{ fontSize: '16px', color: '#52c41a' }} />
        ) : (
          <ClockCircleOutlined style={{ fontSize: '14px', color: '#8c8c8c' }} />
        ),
        color: isPortLocation ? '#1890ff' : isVessel ? '#52c41a' : '#d9d9d9',
        children: (<>
          <div style={{ paddingBottom: '8px' }}>
            <div style={{ 
              backgroundColor: isPortLocation ? '#f8fafc' : '#f8fafc',
              padding: '8px',
              borderRadius: '6px',
              // border: isPortLocation ? '1px solid #bae7ff' : '1px solid #f0f0f0',
              position: 'relative',
              width: '500px'
            }}>
              {/* Port/Location Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <Title level={5} style={{ margin: 0, fontSize: '16px', color: isPortLocation ? '#1890ff' : '#1890ff' }}>
                  {item.port || item.term}
                </Title>
                {/* Date Information */}
                {(<>
                  {/* <div style={{ marginBottom: '8px' }}> */}
                    <Text strong style={{ color: '#1890ff', fontSize: '16px', width: 100, textAlign: 'center' }}>
                      {item.departureArrival === 'Departure' ? 'ETD: ' : 'ETA: '}
                    </Text>
                    <Text style={{ fontSize: '16px', fontWeight: '500', width: 100 }}>
                      {item.date} 
                    </Text>
                  {/* </div> */}
                  </>
                )}
                {/* <div style={{ textAlign: 'right' }}>
                  {item.departureArrival && (
                    <Tag color={item.departureArrival === 'Departure' ? 'orange' : 'green'} style={{ fontSize: '11px' }}>
                      {item.departureArrival === 'Departure' ? 'ETD' : 'ETA'}
                    </Tag>
                  )}
                </div> */}
              </div>

              {/* Date Information */}
              {/* {item.date && (
                <div style={{ marginBottom: '8px' }}>
                  <Text strong style={{ color: '#1890ff', fontSize: '12px' }}>
                    {item.departureArrival === 'Departure' ? 'ETD: ' : 'ETA: '}
                  </Text>
                  <Text style={{ fontSize: '13px', fontWeight: '500' }}>
                    {item.date}
                  </Text>
                </div>
              )} */}

              {/* Vessel Information */}
              {/* {item.vesselVoyage && item.vesselVoyage !== ' + ' && (
                <div style={{ 
                  marginTop: '12px',
                  padding: '6px 10px',
                  backgroundColor: '#f6ffed',
                  borderRadius: '4px',
                  border: '1px solid #b7eb8f'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ContainerOutlined style={{ color: '#52c41a', fontSize: '12px' }} />
                    <Text strong style={{ color: '#389e0d', fontSize: '12px' }}>
                      {item.vesselVoyage.replace(' + ', ' ')}
                    </Text>
                  </div>
                  {transitTime && (
                    <Text type="secondary" style={{ fontSize: '11px' }}>
                      Transit time: {transitTime}
                    </Text>
                  )}
                </div>
              )} */}
            </div>
          </div>
          {/* Vessel Information */}
          {item.vesselVoyage && item.vesselVoyage !== ' + ' && (
            <div style={{
              marginLeft: '20px',
              // padding: '6px 10px',
              // backgroundColor: '#f6ffed',
              borderRadius: '4px',
              // border: '1px solid #b7eb8f',
              width: '300px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <LiaShipSolid style={{ fontSize: '30px', color: '#52c41a' }}/>
                <Text strong style={{ color: '#389e0d', fontSize: '12px' }}>
                  {item.vesselVoyage.replace(' + ', ' ')}
                </Text>
              </div>
              {transitTime && (
                <Text type="secondary" style={{ fontSize: '11px' }}>
                  Transit time: {transitTime}
                </Text>
              )}
            </div>
          )}
        </>)
      };
    });
  }, [transportData]);

  // Check if we should show the transport plan or status message
  if (!transportData || !bookingData || bookingData['Booking Status']?.toLowerCase() !== 'confirmed') {
    return (
      <div style={{ padding: '12px' }}>
        <div style={{ 
          ...getStatusStyle(),
          padding: '16px', 
          borderRadius: '6px', 
          textAlign: 'center'
        }}>
          <Text type="secondary" style={{ color: getStatusColor() }}>
            {getStatusMessage()}
          </Text>
        </div>
      </div>
    );
  }

  // Create tab items after null check
  const tabItems = [
    {
      key: 'timeline',
      label: (
        <span>
          <ClockCircleOutlined />
          Timeline View
        </span>
      ),
      children: (
        <div style={{ padding: '16px 0' }}>
          {/* <Timeline
            mode="left"
            items={timelineItems}
            style={{ marginTop: '16px' }}
          /> */}
          <TransportPlanNew data={transportData} />
        </div>
      )
    },
    {
      key: 'table',
      label: (
        <span>
          <TableOutlined />
          Table View
        </span>
      ),
      children: (
        <div style={{ marginTop: '16px' }}>
          <Row gutter={24}>
            {/* Table Column */}
            <Col flex="1">
              <Card 
                style={{ 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                }}
                bodyStyle={{ padding: '16px' }}
              >
                <Table
                  columns={columns}
                  dataSource={transportData.ts}
                  rowKey="term"
                  pagination={false}
                  size="small"
                  bordered={false}
                  style={{ 
                    backgroundColor: 'transparent'
                  }}
                  rowClassName={(record) => {
                    if (record.term === 'POL' || record.term === 'POD') {
                      return 'pol-pod-row';
                    }
                    return '';
                  }}
                />
              </Card>
            </Col>

            {/* Cutoffs Card */}
            <Col style={{ width: '240px' }}>
              <Card 
                title="Cut-off Dates"
                style={{ 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                }}
                headStyle={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333333',
                  backgroundColor: '#fafafa',
                  borderBottom: '1px solid #f0f0f0'
                }}
                bodyStyle={{ padding: '16px' }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Row justify="space-between" align="middle" style={{ marginBottom: '10px' }}>
                    <Col>
                      <Text style={{ fontSize: '14px', fontWeight: 500, color: '#666666' }}>SI:</Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: '14px', fontWeight: 600, color: '#333333' }}>{transportData.cutoff.si}</Text>
                    </Col>
                  </Row>
                  <Row justify="space-between" align="middle" style={{ marginBottom: '10px' }}>
                    <Col>
                      <Text style={{ fontSize: '14px', fontWeight: 500, color: '#666666' }}>VGM:</Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: '14px', fontWeight: 600, color: '#333333' }}>{transportData.cutoff.vgm}</Text>
                    </Col>
                  </Row>
                  <Row justify="space-between" align="middle" style={{ marginBottom: '10px' }}>
                    <Col>
                      <Text style={{ fontSize: '14px', fontWeight: 500, color: '#666666' }}>CY:</Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: '14px', fontWeight: 600, color: '#333333' }}>{transportData.cutoff.cy}</Text>
                    </Col>
                  </Row>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }
  ];

  return (
    <div>
      {/* Cutoff Information */}
      {/* <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '16px', 
        borderRadius: '6px', 
        marginBottom: '16px',
        border: '1px solid #e2e8f0'
      }}>
        <Title level={5} style={{ margin: '0 0 12px 0', color: '#374151', fontSize: '14px' }}>
          Cut-off Dates
        </Title>
        <Space size="large" style={{ width: '100%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text strong style={{ color: '#374151', fontSize: '13px', fontWeight: '600' }}>SI:</Text>
            <Text style={{ fontSize: '12px', color: '#6b7280' }}>{transportData.cutoff.si}</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text strong style={{ color: '#374151', fontSize: '13px', fontWeight: '600' }}>VGM:</Text>
            <Text style={{ fontSize: '12px', color: '#6b7280' }}>{transportData.cutoff.vgm}</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text strong style={{ color: '#374151', fontSize: '13px', fontWeight: '600' }}>CY:</Text>
            <Text style={{ fontSize: '12px', color: '#6b7280' }}>{transportData.cutoff.cy}</Text>
          </div>
        </Space>
      </div> */}

      {/* Transport Plan Views */}
      <Tabs
        defaultActiveKey="timeline"
        items={tabItems}
        size="middle"
        style={{
          backgroundColor: 'white',
          borderRadius: '6px',
          padding: '0 16px'
        }}
      />

      <style>{`
        .pol-pod-row {
          background-color: #f0f9ff !important;
        }
        .pol-pod-row:hover {
          background-color: #e0f2fe !important;
        }
        .ant-timeline-item-content {
          min-height: 80px;
        }
        .ant-tabs-content-holder {
          padding: 0 !important;
        }
        .ant-table {
          font-size: 13px;
        }
        .ant-table-thead > tr > th {
          font-size: 12px;
          font-weight: 600;
          padding: 8px 12px;
        }
        .ant-table-tbody > tr > td {
          padding: 8px 12px;
        }
        .ant-tabs-tab {
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

export default TransportPlan;
