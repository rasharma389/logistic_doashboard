import React from 'react';
import { Row, Col, Card, Tag, Button, Space, Tooltip, Divider } from 'antd';
import { ShareAltOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BsBoxes } from "react-icons/bs";
import dayjs from 'dayjs';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const ShowExceptionDot = <Tooltip title="This booking has exceptions that require attention">
  <div style={{
    width: '8px',
    height: '8px',
    backgroundColor: '#ff4d4f',
    borderRadius: '50%',
    cursor: 'help',
    flexShrink: 0
  }} />
</Tooltip>;
const BookingHeader: React.FC = () => {
  const { bookingDetails, selectedBookingId } = useSelector((state: RootState) => state.bookings);

  if (!bookingDetails) return null;

  // Status color mapping based on the screenshot
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return {
          backgroundColor: '#10b981', // light green
          color: '#ffffff',
          textColor: '#10b981'
        };
      case 'pending':
        return {
          backgroundColor: '#fbbf24', // light yellow
          color: '#000000',
          textColor: '#fbbf24'
        };
      case 'canceled by requestor':
      case 'canceled by carrier':
        return {
          backgroundColor: '#a78bfa', // light purple
          color: '#ffffff',
          textColor: '#a78bfa'
        };
      case 'closed':
        return {
          backgroundColor: '#60a5fa', // light blue
          color: '#ffffff',
          textColor: '#60a5fa'
        };
      default:
        return {
          backgroundColor: '#6b7280', // gray
          color: '#ffffff',
          textColor: '#6b7280'
        };
    }
  };

  const statusColors = getStatusColor(bookingDetails.status);

  // Function to check if a TMS number has exceptions
  const hasEquipmentException = (tmsNumber: string): boolean => {
    // Remove CB- prefix if present
    const cleanTmsNumber = tmsNumber.startsWith('CB-') ? tmsNumber.substring(3) : tmsNumber;

    // Find the booking in shipperBookingsData
    const booking = shipperBookingsData.find(booking => booking['TMS #'] === cleanTmsNumber);

    // Return true if exception exists
    return booking ? booking['Exception?']=== 'Y' && booking['Excpt. Eqp?'] === 'Y' : false;
  };

  const hasETDVesselVoyageException = (tmsNumber: string): boolean => {
    // Remove CB- prefix if present
    const cleanTmsNumber = tmsNumber.startsWith('CB-') ? tmsNumber.substring(3) : tmsNumber;

    // Find the booking in shipperBookingsData
    const booking = shipperBookingsData.find(booking => booking['TMS #'] === cleanTmsNumber);

    // Return true if exception exists
    return booking ? booking['Exception?']=== 'Y' && booking['Excpt. ETD?'] === 'Y' : false;
  };

  return (
    <Card
      style={{
        marginBottom: '16px',
        border: 'none',
        borderBottom: '1px solid #f0f0f0',
        borderRadius: '0'
      }}
      styles={{
        body: {
          padding: '0',
        }
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        height: '65px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>
            {selectedBookingId}
          </span>
        </div>

        <Space>
          <Button type="text" icon={<ShareAltOutlined />}>
            Share
          </Button>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
        </Space>
      </div>
      <Divider style={{ margin: '0' }} />
      <Row gutter={[8, 0]} style={{ padding: '5px 12px', marginBottom: 0, flexWrap: 'nowrap', display: 'flex', height: '70px' }}>
        <Col flex="1" style={{ marginBottom: 0, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Status</div>
          <div style={{ fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ color: statusColors.textColor }}>
              {bookingDetails.status}
            </span>
            <div style={{ width: '100px', height: '4px', backgroundColor: statusColors.backgroundColor, borderRadius: '2px', flexShrink: 0 }} />
          </div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Carrier</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.carrier}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Req ETD WK</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#059669', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.requestedEtdWeek}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Carrier BKG #</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#0ea5e9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.carrierBookingNumber}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Contract #</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.contractNumber}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Customer</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.customer}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Region</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.region}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Trade Lane</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.tradeLane}</div>
        </Col>
        <Col flex="1" style={{ marginBottom: 8, minWidth: 0 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Exception</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: bookingDetails.exception ? '#ef4444' : '#10b981',
                display: 'inline-block',
                marginRight: '8px',
                flexShrink: 0
              }}
            />
            <span style={{ color: bookingDetails.exception ? '#ef4444' : '#10b981' }}>
              {bookingDetails.exception ? "YES" : "NO"}
            </span>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 16]} style={{ marginTop: '16px', padding: '12px', borderTop: '1px solid #f1f5f9' }}>
        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Place of Receipt</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#0ea5e9' }}>
                {bookingDetails.placeOfReceipt}
              </span>
              <Tooltip title={bookingDetails.placeOfReceiptFullName}>
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Port of Load</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#0ea5e9' }}>
                {bookingDetails.portOfLoad}
              </span>
              <Tooltip title={bookingDetails.portOfLoadFullName}>
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Port of Discharge</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#0ea5e9' }}>
                {bookingDetails.portOfDischarge}
              </span>
              <Tooltip title={bookingDetails.portOfDischargeFullName}>
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Place of Delivery</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#0ea5e9' }}>
                {bookingDetails.placeOfDelivery}
              </span>
              <Tooltip title={bookingDetails.placeOfDeliveryFullName}>
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
              <Space align="center">Equipments{hasEquipmentException(bookingDetails.id) && (
                ShowExceptionDot
              )}</Space></div>
            <Space align="center">
              <BsBoxes />
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                {bookingDetails.equipments}
              </div>
            </Space>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>CRD</div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>
              {dayjs(bookingDetails.crd).isValid() ? dayjs(bookingDetails.crd).format('DD MMM') : bookingDetails.crd}
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 16]} style={{ marginTop: '8px', padding: '12px' }}>
        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}><Space align="center">Place of Receipt ETD{hasETDVesselVoyageException(bookingDetails.id) && (
                ShowExceptionDot
              )}</Space></div>
            <Tag color="cyan" style={{ fontSize: '12px' }}>
              {dayjs(bookingDetails.placeOfReceiptEtd).isValid() ? dayjs(bookingDetails.placeOfReceiptEtd).format('DD MMM') : bookingDetails.placeOfReceiptEtd}
            </Tag>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}><Space align="center">Port of Load ETD{hasETDVesselVoyageException(bookingDetails.id) && (
                ShowExceptionDot
              )}</Space></div>
            <Tag color="cyan" style={{ fontSize: '12px' }}>
              {dayjs(bookingDetails.portOfLoadEtd).isValid() ? dayjs(bookingDetails.portOfLoadEtd).format('DD MMM') : bookingDetails.portOfLoadEtd}
            </Tag>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}><Space align="center">Port of Discharge ETA{hasETDVesselVoyageException(bookingDetails.id) && (
                ShowExceptionDot
              )}</Space></div>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              {dayjs(bookingDetails.portOfDischargeEta).isValid() ? dayjs(bookingDetails.portOfDischargeEta).format('DD MMM') : bookingDetails.portOfDischargeEta}
            </span>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Place of Delivery ETA</div>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              {dayjs(bookingDetails.placeOfDeliveryEta).isValid() ? dayjs(bookingDetails.placeOfDeliveryEta).format('DD MMM') : bookingDetails.placeOfDeliveryEta}
            </span>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Move Type</div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>
              {bookingDetails.moveType}
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}><Space align="center">1st Vessel & Voyage{hasETDVesselVoyageException(bookingDetails.id) && (
                ShowExceptionDot
              )}</Space></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {/* <span style={{ fontSize: '14px', fontWeight: '500', color: '#dc2626' }}> */}
              <Tag color="cyan" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                {bookingDetails.vesselNVoyage}
                </Tag>
              {/* </span> */}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BookingHeader;