import React from 'react';
import { Row, Col, Card, Tag, Progress, Button, Space, Tooltip, Divider } from 'antd';
import { ShareAltOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BsBoxes } from "react-icons/bs";
import dayjs from 'dayjs';

const BookingHeader: React.FC = () => {
  const { bookingDetails, selectedBookingId } = useSelector((state: RootState) => state.bookings);

  if (!bookingDetails) return null;

  const getStatusProgress = (level: number) => {
    return (level / 6) * 100;
  };

  return (
    <Card 
      style={{ 
        marginBottom: '16px',
        border: 'none',
        borderBottom: '1px solid #f0f0f0',
        borderRadius: '0'
      }}
      bodyStyle={{ 
        padding: '0',
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
    <Divider style={{ margin: '0' }}/>
      <Row gutter={[16, 0]} style={{ padding: '12px', marginBottom: 0, flexWrap: 'wrap', display: 'flex' }}>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Carrier</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.carrier}</div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Req ETD WK</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#059669', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.requestedEtdWeek}</div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Carrier BKG #</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#0ea5e9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.carrierBookingNumber}</div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Contract #</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#7c3aed', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.contractNumber}</div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Customer</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#dc2626', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.customer}</div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Region</div>
          <div style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.region}</div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={3} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Trade Lane</div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#ea580c', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookingDetails.tradeLane}</div>
        </Col>
      </Row>
      <Row style={{ padding: '0 12px 8px 12px' }}>
        <Col span={24}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                {bookingDetails.status}
              </span>
              <div style={{ flex: 1, maxWidth: '200px' }}>
                <Progress 
                  percent={getStatusProgress(bookingDetails.statusLevel)} 
                  showInfo={false}
                  strokeColor="#3b82f6"
                  size="small"
                />
              </div>
            </div>
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
              <Tooltip title="Place of receipt">
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
              <Tooltip title="Port of load">
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
              <Tooltip title="Port of discharge">
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
              <Tooltip title="Place of delivery">
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Equipments</div>
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
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Place of Receipt ETD</div>
            <Tag color="cyan" style={{ fontSize: '12px' }}>
              {dayjs(bookingDetails.placeOfReceiptEtd).isValid() ? dayjs(bookingDetails.placeOfReceiptEtd).format('DD MMM') : bookingDetails.placeOfReceiptEtd}
            </Tag>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Port of Load ETD</div>
            <Tag color="cyan" style={{ fontSize: '12px' }}>
              {dayjs(bookingDetails.portOfLoadEtd).isValid() ? dayjs(bookingDetails.portOfLoadEtd).format('DD MMM') : bookingDetails.portOfLoadEtd}
            </Tag>
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Port of Discharge ETA</div>
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
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Vessel & Voyage</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#dc2626' }}>
                {bookingDetails.vesselNVoyage}
              </span>
              <Tooltip title="Vessel and voyage number">
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BookingHeader;