import React, { useMemo } from 'react';
import { Table, Typography, Card } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const { Text, Title } = Typography;

// Equipment configuration based on the first image
const EQUIPMENT_CONFIG = [
  { type: '20GP', sequence: 1, feuEquivalent: 0.5 },
  { type: '40GP', sequence: 2, feuEquivalent: 1.0 },
  { type: '40HC', sequence: 3, feuEquivalent: 1.125 },
  { type: '45HC', sequence: 4, feuEquivalent: 1.265 },
  { type: '20RF', sequence: 5, feuEquivalent: 0.5 },
  { type: '40RF', sequence: 6, feuEquivalent: 1.0 },
  { type: '40HRF', sequence: 7, feuEquivalent: 1.125 }
];

interface EquipmentComparisonData {
  key: string;
  containerType: string;
  bkgRequest: number;
  confirmation: number;
  difference: number;
  isTotal?: boolean;
  isFeuEquivalent?: boolean;
}

const ExceptionDetailsNew: React.FC = () => {
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

  // Helper function to parse equipment string and extract quantities
  const parseEquipmentString = (equipmentString: string): Record<string, number> => {
    const result: Record<string, number> = {};
    
    if (!equipmentString) return result;
    
    // Split by comma and parse each equipment entry
    const equipmentEntries = equipmentString.split(',').map(entry => entry.trim());
    
    equipmentEntries.forEach(entry => {
      // Match pattern like "40HCx1" or "45HCx2"
      const match = entry.match(/^([A-Z0-9]+)x(\d+)$/);
      if (match) {
        const equipmentType = match[1];
        const quantity = parseInt(match[2]);
        result[equipmentType] = quantity;
      }
    });
    
    return result;
  };

  // Generate equipment comparison data from actual booking data
  const equipmentData = useMemo(() => {
    if (!bookingData) return [];

    const data: EquipmentComparisonData[] = [];
    
    // Parse equipment strings to get quantities for each type
    const brEquipmentQuantities = parseEquipmentString(bookingData?.['BR:Eqp.'] || '');
    const bcEquipmentQuantities = parseEquipmentString(bookingData?.['BC:Eqp.'] || '');
    
    // Add equipment data following the sequence order from EQUIPMENT_CONFIG
    // Only include equipment that has quantities in either request or confirmation
    EQUIPMENT_CONFIG.forEach(equipment => {
      // Get quantities from parsed equipment strings
      const bkgRequest = brEquipmentQuantities[equipment.type] || 0;
      const confirmation = bcEquipmentQuantities[equipment.type] || 0;
      
      // Only add equipment if it has quantities in either request or confirmation
      if (bkgRequest > 0 || confirmation > 0) {
        const difference = bkgRequest - confirmation;
        
        data.push({
          key: equipment.type,
          containerType: equipment.type,
          bkgRequest,
          confirmation,
          difference
        });
      }
    });
    
    // Add Total row
    const totalBkgRequest = data.reduce((sum, item) => sum + item.bkgRequest, 0);
    const totalConfirmation = data.reduce((sum, item) => sum + item.confirmation, 0);
    const totalDifference = totalBkgRequest - totalConfirmation;
    
    data.push({
      key: 'total',
      containerType: 'Total',
      bkgRequest: totalBkgRequest,
      confirmation: totalConfirmation,
      difference: totalDifference,
      isTotal: true
    });
    
    // Add FEU Equivalent row
    const feuBkgRequest = data
      .filter(item => !item.isTotal)
      .reduce((sum, item) => {
        const config = EQUIPMENT_CONFIG.find(eq => eq.type === item.containerType);
        return sum + (item.bkgRequest * (config?.feuEquivalent || 0));
      }, 0);
    
    const feuConfirmation = data
      .filter(item => !item.isTotal)
      .reduce((sum, item) => {
        const config = EQUIPMENT_CONFIG.find(eq => eq.type === item.containerType);
        return sum + (item.confirmation * (config?.feuEquivalent || 0));
      }, 0);
    
    const feuDifference = feuBkgRequest - feuConfirmation;
    
    data.push({
      key: 'feu',
      containerType: 'FEU Equivalent',
      bkgRequest: Math.round(feuBkgRequest * 100) / 100, // Round to 2 decimal places
      confirmation: Math.round(feuConfirmation * 100) / 100,
      difference: Math.round(feuDifference * 100) / 100,
      isFeuEquivalent: true
    });

    return data;
  }, [bookingData]);

  // Generate ETD mismatch data from actual booking data
  const etdMismatchData = useMemo(() => {
    if (!bookingData) return [];

    return [
      {
        key: 'etd',
        field: 'ETD',
        bkgRequest: bookingData['BR:Req. ETD'] || '-',
        confirmation: bookingData['BC:ETD POL'] || '-',
        comment: bookingData['ETD info'] || '-'
      },
      {
        key: 'vessel',
        field: 'Vessel / Voyage',
        bkgRequest: `${bookingData['BR:1st Vessel'] || ''} + ${bookingData['BC:1st Voyage #'] || ''}`.replace(' + ', ' ').trim() || '-',
        confirmation: `${bookingData['BC:1st Vessel'] || ''} + ${bookingData['BC:1st Voyage #'] || ''}`.replace(' + ', ' ').trim() || '-',
        comment: bookingData['Vessel mismatch'] || '-'
      }
    ];
  }, [bookingData]);

  // Define table columns based on the second image
  const columns = [
    {
      title: 'Container Type',
      dataIndex: 'containerType',
      key: 'containerType',
      width: 150,
      render: (text: string, record: EquipmentComparisonData) => (
        <Text 
          style={{ 
            fontSize: '13px', 
            fontWeight: record.isTotal || record.isFeuEquivalent ? '600' : '500',
            color: record.isTotal || record.isFeuEquivalent ? '#1890ff' : 'inherit'
          }}
        >
          {text}
        </Text>
      ),
    },
    {
      title: 'Bkg Request',
      dataIndex: 'bkgRequest',
      key: 'bkgRequest',
      width: 120,
      align: 'center' as const,
      render: (value: number, record: EquipmentComparisonData) => (
        <Text 
          style={{ 
            fontSize: '13px', 
            fontWeight: record.isTotal || record.isFeuEquivalent ? '600' : '500',
            color: record.isTotal || record.isFeuEquivalent ? '#1890ff' : 'inherit'
          }}
        >
          {value}
        </Text>
      ),
    },
    {
      title: 'Confirmation',
      dataIndex: 'confirmation',
      key: 'confirmation',
      width: 120,
      align: 'center' as const,
      render: (value: number, record: EquipmentComparisonData) => (
        <Text 
          style={{ 
            fontSize: '13px', 
            fontWeight: record.isTotal || record.isFeuEquivalent ? '600' : '500',
            color: record.isTotal || record.isFeuEquivalent ? '#1890ff' : 'inherit'
          }}
        >
          {value}
        </Text>
      ),
    },
    {
      title: 'Difference',
      dataIndex: 'difference',
      key: 'difference',
      width: 120,
      align: 'center' as const,
      render: (value: number, record: EquipmentComparisonData) => (
        <Text 
          style={{ 
            fontSize: '13px', 
            fontWeight: record.isTotal || record.isFeuEquivalent ? '600' : '500',
            color: value < 0 ? '#ff4d4f' : value > 0 ? '#52c41a' : 'inherit'
          }}
        >
          {value}
        </Text>
      ),
    }
  ];

  // Define ETD mismatch table columns
  const etdMismatchColumns = [
    {
      title: '',
      dataIndex: 'field',
      key: 'field',
      width: 150,
      render: (text: string) => (
        <Text style={{ fontSize: '13px', fontWeight: '500' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'Bkg Request',
      dataIndex: 'bkgRequest',
      key: 'bkgRequest',
      width: 200,
      render: (text: string) => (
        <Text style={{ fontSize: '13px' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'Confirmation',
      dataIndex: 'confirmation',
      key: 'confirmation',
      width: 200,
      render: (text: string) => (
        <Text style={{ fontSize: '13px' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      width: 200,
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#8c8c8c' }}>
          {text || '-'}
        </Text>
      ),
    }
  ];

  // Check if we should show the exception details or status message
  if (!equipmentData || equipmentData.length === 0) {
    return (
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <Text style={{ color: '#8c8c8c', fontSize: '14px' }}>
          {!selectedBookingId 
            ? 'No booking selected' 
            : !bookingData 
              ? 'Booking not found' 
              : 'No equipment data available for this booking'
          }
        </Text>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px' }}>
      <Card
        title="Equipment Comparison"
        style={{ 
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
        }}
        headStyle={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#333333',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #f0f0f0'
        }}
        bodyStyle={{ padding: '16px' }}
      >
        <Table
          columns={columns}
          dataSource={equipmentData}
          rowKey="key"
          pagination={false}
          size="small"
          bordered
          style={{ 
            backgroundColor: 'white',
            borderRadius: '6px'
          }}
          rowClassName={(record) => {
            if (record.isTotal) return 'total-row';
            if (record.isFeuEquivalent) return 'feu-row';
            return '';
          }}
        />
        
        <style>{`
          .total-row {
            background-color: #f0f9ff !important;
            font-weight: 600;
          }
          .total-row:hover {
            background-color: #e0f2fe !important;
          }
          .feu-row {
            background-color: #f6ffed !important;
            font-weight: 600;
          }
          .feu-row:hover {
            background-color: #d9f7be !important;
          }
          .ant-table-thead > tr > th {
            font-size: 12px;
            font-weight: 600;
            padding: 8px 12px;
            background-color: #fafafa;
          }
          .ant-table-tbody > tr > td {
            padding: 8px 12px;
          }
        `}</style>
      </Card>

      {/* ETD Mismatch Table */}
      <Card
        title="ETD, Vessel / Voyage Mismatch Details"
        style={{ 
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          marginTop: '16px'
        }}
        headStyle={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#333333',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #f0f0f0'
        }}
        bodyStyle={{ padding: '16px' }}
      >
        <Table
          columns={etdMismatchColumns}
          dataSource={etdMismatchData}
          rowKey="key"
          pagination={false}
          size="small"
          bordered
          style={{ 
            backgroundColor: 'white',
            borderRadius: '6px'
          }}
        />
      </Card>
    </div>
  );
};

export default ExceptionDetailsNew;
