import React from 'react';
import { Timeline, Space, Button, Tooltip, Tabs } from 'antd';
import { ReloadOutlined, InfoCircleOutlined, ClockCircleOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setActivePanel, toggleRightPanel } from '../../store/slices/uiSlice';
import { DoubleRightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const ActivityPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state: RootState) => state.bookings);
  const { activePanel } = useSelector((state: RootState) => state.ui);

  const handleTabChange = (key: string) => {
    dispatch(setActivePanel(key as 'activity' | 'timeline' | 'comments'));
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'secondary':
        return '#0ea5e9';
      case 'exception':
        return '#ef4444';
      case 'confirmed':
        return '#0ea5e9';
      case 'accepted':
        return '#0ea5e9';
      case 'linked':
        return '#6b7280';
      case 'approved':
        return '#6b7280';
      case 'submitted':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'secondary':
        return 'S';
      case 'exception':
        return '!';
      case 'confirmed':
        return 'S';
      case 'accepted':
        return 'S';
      case 'linked':
        return 'S';
      case 'approved':
        return 'B';
      case 'submitted':
        return 'B';
      default:
        return 'S';
    }
  };

  const timelineItems = activities.map((activity, index) => ({
    dot: (
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: getActivityColor(activity.type),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {getActivityIcon(activity.type)}
      </div>
    ),
    children: (
      <div style={{ marginBottom: index === activities.length - 1 ? 0 : '16px' }}>
        <div style={{ 
          fontSize: '14px', 
          fontWeight: '500',
          color: '#1f2937',
          marginBottom: '4px'
        }}>
          {activity.title}
          {activity.type === 'secondary' && (
            <Tooltip title="Information">
              <InfoCircleOutlined 
                style={{ marginLeft: '4px', fontSize: '12px', color: '#9ca3af' }} 
              />
            </Tooltip>
          )}
        </div>
        <div style={{ 
          fontSize: '13px', 
          color: '#6b7280',
          marginBottom: '4px'
        }}>
          {activity.description}
        </div>
        {activity.details && (
          <div style={{ 
            fontSize: '12px', 
            color: '#9ca3af'
          }}>
            {activity.details}
          </div>
        )}
        <div style={{ 
          fontSize: '12px', 
          color: '#9ca3af',
          marginTop: '4px'
        }}>
          {dayjs(activity.date).isValid() ? dayjs(activity.date).format('DD MMM') : activity.date}
        </div>
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
          <Timeline
            items={timelineItems}
            style={{ marginTop: '8px' }}
          />
        </div>
      )
    }
    // Activity and Comments tabs are hidden
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

export default ActivityPanel;