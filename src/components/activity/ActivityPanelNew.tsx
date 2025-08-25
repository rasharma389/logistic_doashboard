import React, { useMemo } from 'react';
import { Timeline, Space, Button, Tabs, Typography } from 'antd';
import { ReloadOutlined, InfoCircleOutlined, ClockCircleOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setActivePanel, toggleRightPanel } from '../../store/slices/uiSlice';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import dayjs from 'dayjs';

const { Text } = Typography;

interface TimelineItem {
  key: string;
  label: string;
  value: string;
  date: string;
  status?: string;
  etdException?: string;
  containerException?: string;
}

const ActivityPanelNew: React.FC = () => {
  const dispatch = useDispatch();
  const { activePanel } = useSelector((state: RootState) => state.ui);
  const { selectedBookingId } = useSelector((state: RootState) => state.bookings);



  // Helper function to format dates to dd mmm format
  const formatDate = (dateString: string): string => {
    if (!dateString || dateString === 'N/A') return 'N/A';
    
    try {
      // Parse the date string (assuming format like "2025-06-16")
      const date = dayjs(dateString);
      if (date.isValid()) {
        return date.format('DD MMM');
      }
      return dateString; // Return original if parsing fails
    } catch (error) {
      return dateString; // Return original if there's an error
    }
  };

  // Get the selected booking data based on TMS #
  const selectedBooking = useMemo(() => {
    if (!selectedBookingId) return null;
    
    // Extract TMS # from the selectedBookingId (e.g., "CB-180080002" -> "180080002")
    const tmsNumber = selectedBookingId.replace('CB-', '');
    
    console.log('ActivityPanelNew - selectedBookingId:', selectedBookingId);
    console.log('ActivityPanelNew - extracted TMS #:', tmsNumber);
    console.log('ActivityPanelNew - shipperBookingsData length:', shipperBookingsData.length);
    console.log('ActivityPanelNew - first few TMS #s:', shipperBookingsData.slice(0, 3).map(item => item['TMS #']));
    
    const found = shipperBookingsData.find(item => item['TMS #'] === tmsNumber);
    console.log('ActivityPanelNew - found booking:', found);
    
    return found;
  }, [selectedBookingId]);

  // Generate timeline items based on the selected booking
  const timelineItems = useMemo(() => {
    console.log('ActivityPanelNew - timelineItems useMemo triggered, selectedBooking:', selectedBooking);
    
    if (!selectedBooking) {
      console.log('ActivityPanelNew - no selectedBooking, returning empty array');
      return [];
    }

    const items: TimelineItem[] = [];

    // 1. Timeline Display order (latest on top)
    items.push({
      key: 'latest',
      label: 'Latest Version',
      value: 'Latest',
      date: selectedBooking['BC:Release Date'] || 'N/A',
      status: selectedBooking['Booking Status'] || 'N/A',
      etdException: selectedBooking['Excpt. ETD?'] || 'N/A',
      containerException: selectedBooking['Excpt. Eqp?'] || 'N/A'
    });

    // 2. Latest version -1 (if we have version info)
    if (selectedBooking['BC:Version'] && selectedBooking['BC:Version'] !== '1.0') {
      items.push({
        key: 'previous',
        label: 'Previous Version',
        value: `Version ${selectedBooking['BC:Version']}`,
        date: selectedBooking['BC:Release Date'] || 'N/A',
        status: selectedBooking['Booking Status'] || 'N/A',
        etdException: selectedBooking['Excpt. ETD?'] || 'N/A',
        containerException: selectedBooking['Excpt. Eqp?'] || 'N/A'
      });
    }

    // 3. Booking creation
    items.push({
      key: 'creation',
      label: 'Booking Creation',
      value: 'Initial Request',
      date: formatDate(selectedBooking['BR create date']) || 'N/A'
    });

    console.log('ActivityPanelNew - generated timelineItems:', items);
    return items;
  }, [selectedBooking]);

  const handleTabChange = (key: string) => {
    dispatch(setActivePanel(key as 'activity' | 'timeline' | 'comments'));
  };

  const getTimelineColor = (key: string) => {
    switch (key) {
      case 'latest':
        return '#0ea5e9'; // Blue for latest
      case 'previous':
        return '#6b7280'; // Gray for previous
      case 'creation':
        return '#10b981'; // Green for creation
      default:
        return '#6b7280';
    }
  };

  const getTimelineIcon = (key: string) => {
    switch (key) {
      case 'latest':
        return 'L';
      case 'previous':
        return 'P';
      case 'creation':
        return 'C';
      default:
        return '•';
    }
  };

  const getExceptionColor = (exception: string) => {
    return exception === 'Y' ? '#ef4444' : '#10b981';
  };

  const timelineRenderItems = timelineItems.map((item, index) => ({
    dot: (
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: getTimelineColor(item.key),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {getTimelineIcon(item.key)}
      </div>
    ),
    children: (
      <div style={{ marginBottom: index === timelineItems.length - 1 ? 0 : '16px' }}>
        <div style={{ 
          fontSize: '14px', 
          fontWeight: '500',
          color: '#1f2937',
          marginBottom: '4px'
        }}>
          {item.label}
          <Text style={{ 
            marginLeft: '8px', 
            fontSize: '12px', 
            color: '#6b7280',
            fontWeight: 'normal'
          }}>
            {item.value}
          </Text>
        </div>
        
        {/* Date */}
        <div style={{ 
          fontSize: '13px', 
          color: '#6b7280',
          marginBottom: '4px'
        }}>
          <Text strong>Date:</Text> {item.date}
        </div>

        {/* Status (for versions) */}
        {item.status && (
          <div style={{ 
            fontSize: '13px', 
            color: '#6b7280',
            marginBottom: '4px'
          }}>
            <Text strong>Status:</Text> {item.status}
          </div>
        )}

        {/* ETD Exception (for versions) */}
        {item.etdException && (
          <div style={{ 
            fontSize: '13px', 
            color: '#6b7280',
            marginBottom: '4px'
          }}>
            <Text strong>ETD Exception:</Text> 
            <Text style={{ 
              color: getExceptionColor(item.etdException),
              marginLeft: '4px'
            }}>
              {item.etdException}
            </Text>
          </div>
        )}

        {/* Container Exception (for versions) */}
        {item.containerException && (
          <div style={{ 
            fontSize: '13px', 
            color: '#6b7280',
            marginBottom: '4px'
          }}>
            <Text strong>Container Exception:</Text> 
            <Text style={{ 
              color: getExceptionColor(item.containerException),
              marginLeft: '4px'
            }}>
              {item.containerException}
            </Text>
          </div>
        )}
      </div>
    )
  }));

  const tabItems = [
    {
      key: 'timeline',
      label: (
        <Space style={{ overflowY: 'auto', height: 'inherit' }}>
          <ClockCircleOutlined />
          Timeline
        </Space>
      ),
      children: (
        <div style={{ 
          height: 'calc(100vh - 56px - 48px)', 
          overflowY: 'auto',
          padding: '16px'
        }}>
          {/* Timeline */}
          {selectedBooking ? (
            <Timeline
              items={timelineRenderItems}
              style={{ marginTop: '8px' }}
            />
          ) : (
            <div style={{ 
              textAlign: 'center', 
              color: '#9ca3af', 
              padding: '40px 20px' 
            }}>
              <ClockCircleOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
              <div>Select a booking from the sidebar to view the timeline</div>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#ffffff',
      borderLeft: '1px solid #e2e8f0',
      height: 'calc(100vh - 56px)',
      right: 0,
      position: 'relative'
    }}>
      {/* Custom collapse/expand icon in top right */}
      <div onClick={() => dispatch(toggleRightPanel())} style={{ display: 'flex', cursor: 'pointer', flexDirection: 'column', alignItems: 'right', justifyContent: 'flex-end' }}>
        <span style={{ color: '#0ea5e9', fontSize: 20}}>
          <DoubleRightOutlined />
        </span>
      </div>
      <Tabs
        activeKey={activePanel}
        onChange={handleTabChange}
        items={tabItems}
        size="small"
        tabBarExtraContent={
          <Button 
            type="text" 
            icon={<ReloadOutlined />}
            size="small"
            style={{ color: '#6b7280' }}
          />
        }
        style={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        tabBarStyle={{
          padding: '12px 12px 0 12px',
          margin: 0,
          borderBottom: '1px solid #f0f0f0',
          height: '44px',
        }}
      />
    </div>
  );
};

export default ActivityPanelNew;
