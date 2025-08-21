import React, { useMemo } from 'react';
import { Table, Typography, Tag, Space } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const { Text } = Typography;

interface ExceptionData {
  key: string;
  brEquipment: string;
  brEquipmentCount: string;
  brReqFeu: string;
  bcEquipment: string;
  bcEquipmentCount: string;
  bcConfFeu: string;
  feuDifference: string;
}

const ExceptionDetails: React.FC = () => {
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

  // Generate exception data from actual booking data
  const exceptionData = useMemo(() => {
    if (!bookingData) return [];

    const data: ExceptionData[] = [];
    
    // Add main equipment data
    data.push({
      key: 'main',
      brEquipment: bookingData['BR:Eqp.'] || '-',
      brEquipmentCount: bookingData['BR:Eqp. Cnt'] || '-',
      brReqFeu: bookingData['BR:Req. FEU'] || '-',
      bcEquipment: bookingData['BC:Eqp.'] || '-',
      bcEquipmentCount: bookingData['BC:Eqp. Cnt'] || '-',
      bcConfFeu: bookingData['BC:Conf. FEU'] || '-',
      feuDifference: bookingData['FEU difference (BC-BR)'] || '-'
    });

    return data;
  }, [bookingData]);

  // Define table columns with the exact structure from the image
  const columns = [
    {
      title: 'Booking Request (BR)',
      children: [
        {
          title: 'container type',
          dataIndex: 'brEquipment',
          key: 'brEquipment',
          width: 120,
          render: (text: string) => (
            <Text style={{ fontSize: '13px', fontWeight: '500' }}>
              {text}
            </Text>
          ),
        },
        {
          title: 'qty',
          dataIndex: 'brEquipmentCount',
          key: 'brEquipmentCount',
          width: 80,
          render: (text: string) => (
            <Text style={{ fontSize: '13px', fontWeight: '500' }}>
              {text}
            </Text>
          ),
        },
        {
          title: 'FEU equivalent',
          dataIndex: 'brReqFeu',
          key: 'brReqFeu',
          width: 120,
          render: (text: string) => (
            <Text style={{ fontSize: '13px', fontWeight: '500' }}>
              {text}
            </Text>
          ),
        },
      ],
    },
    {
      title: 'Booking Confirmation (BC)',
      children: [
        {
          title: 'container type',
          dataIndex: 'bcEquipment',
          key: 'bcEquipment',
          width: 120,
          render: (text: string) => (
            <Text style={{ fontSize: '13px', fontWeight: '500' }}>
              {text}
            </Text>
          ),
        },
        {
          title: 'qty',
          dataIndex: 'bcEquipmentCount',
          key: 'bcEquipmentCount',
          width: 80,
          render: (text: string) => (
            <Text style={{ fontSize: '13px', fontWeight: '500' }}>
              {text}
            </Text>
          ),
        },
        {
          title: 'FEU equivalent',
          dataIndex: 'bcConfFeu',
          key: 'bcConfFeu',
          width: 120,
          render: (text: string) => (
            <Text style={{ fontSize: '13px', fontWeight: '500' }}>
              {text}
            </Text>
          ),
        },
      ],
    },
    {
      title: 'BC - BR',
      children: [
        {
          title: 'difference in volume',
          dataIndex: 'feuDifference',
          key: 'feuDifference',
          width: 140,
          render: (text: string) => {
            const difference = parseFloat(text);
            const isPositive = difference > 0;
            const isNegative = difference < 0;
            
            return (
              <Text 
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '600',
                  color: isPositive ? '#52c41a' : isNegative ? '#ff4d4f' : '#666'
                }}
              >
                {text}
              </Text>
            );
          },
        },
      ],
    },
  ];

  // Check if we have data to display
  if (!bookingData) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Text type="secondary">No booking data available</Text>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px' }}>
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <Text style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
          Exception Details
        </Text>
        <Text style={{ fontSize: '14px', color: '#6b7280', marginLeft: '12px' }}>
          TMS #{tmsNumber}
        </Text>
      </div>

      {/* Exception Summary */}
      <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '12px 16px', 
        borderRadius: '6px', 
        marginBottom: '16px',
        border: '1px solid #e2e8f0'
      }}>
        <Space size="large">
          <div>
            <Text strong style={{ color: '#6b7280', fontSize: '12px' }}>Exception Status:</Text>
            <Tag 
              color={bookingData['Exception?'] === 'Y' ? 'red' : 'green'} 
              style={{ marginLeft: '8px', fontSize: '11px' }}
            >
              {bookingData['Exception?'] === 'Y' ? 'Exception Detected' : 'No Exceptions'}
            </Tag>
          </div>
          {bookingData['Exception?'] === 'Y' && (
            <>
              <div>
                <Text strong style={{ color: '#6b7280', fontSize: '12px' }}>Equipment Exception:</Text>
                <Tag 
                  color={bookingData['Excpt. Eqp?'] === 'Y' ? 'red' : 'green'} 
                  style={{ marginLeft: '8px', fontSize: '11px' }}
                >
                  {bookingData['Excpt. Eqp?'] === 'Y' ? 'Yes' : 'No'}
                </Tag>
              </div>
              <div>
                <Text strong style={{ color: '#6b7280', fontSize: '12px' }}>ETD Exception:</Text>
                <Tag 
                  color={bookingData['Excpt. ETD?'] === 'Y' ? 'red' : 'green'} 
                  style={{ marginLeft: '8px', fontSize: '11px' }}
                >
                  {bookingData['Excpt. ETD?'] === 'Y' ? 'Yes' : 'No'}
                </Tag>
              </div>
            </>
          )}
        </Space>
      </div>

      {/* Main Exception Table */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        border: '1px solid #e5e7eb',
        overflow: 'hidden'
      }}>
        <Table
          columns={columns}
          dataSource={exceptionData}
          pagination={false}
          size="small"
          bordered
          style={{ 
            backgroundColor: 'white'
          }}
          rowClassName={(record) => {
            // Highlight rows with exceptions
            if (bookingData['Exception?'] === 'Y') {
              return 'exception-row';
            }
            return '';
          }}
        />
      </div>

      {/* Additional Exception Information */}
      {bookingData['Exception?'] === 'Y' && (
        <div style={{ 
          backgroundColor: '#fef2f2', 
          padding: '16px', 
          borderRadius: '6px', 
          marginTop: '16px',
          border: '1px solid #fecaca'
        }}>
          <Text strong style={{ color: '#dc2626', fontSize: '14px', marginBottom: '12px', display: 'block' }}>
            Exception Details
          </Text>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            {bookingData['Excpt. Eqp?'] === 'Y' && (
              <div>
                <Text style={{ fontSize: '13px', color: '#666' }}>
                  <strong>Equipment Exception:</strong> There is a mismatch between requested and confirmed equipment.
                </Text>
              </div>
            )}
            {bookingData['Excpt. ETD?'] === 'Y' && (
              <div>
                <Text style={{ fontSize: '13px', color: '#666' }}>
                  <strong>ETD Exception:</strong> ETD difference: {bookingData['ETD difference (BC-BR)']} days. 
                  ETD range: {bookingData['ETD range (BC-BR) formula']} days. 
                  ETD info: {bookingData['ETD info']}
                </Text>
              </div>
            )}
            {parseFloat(bookingData['FEU difference (BC-BR)'] || '0') !== 0 && (
              <div>
                <Text style={{ fontSize: '13px', color: '#666' }}>
                  <strong>Volume Exception:</strong> FEU difference of {bookingData['FEU difference (BC-BR)']} detected.
                </Text>
              </div>
            )}
          </Space>
        </div>
      )}

      <style>{`
        .exception-row {
          background-color: #fef2f2 !important;
        }
        .exception-row:hover {
          background-color: #fee2e2 !important;
        }
        .ant-table-thead > tr > th {
          font-size: 12px;
          font-weight: 600;
          padding: 8px 12px;
          background-color: #f9fafb;
          border-bottom: 2px solid #e5e7eb;
        }
        .ant-table-tbody > tr > td {
          padding: 8px 12px;
          font-size: 13px;
        }
        .ant-table-thead > tr > th.ant-table-column-has-sorter {
          background-color: #f3f4f6;
        }
      `}</style>
    </div>
  );
};

export default ExceptionDetails;
