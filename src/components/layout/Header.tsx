import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Space, Button } from 'antd';
import { 
  DashboardOutlined,
  CarOutlined,
  TruckOutlined,
  FileTextOutlined,
  ExceptionOutlined,
  MailOutlined,
  MoreOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
import { FaGlobe } from 'react-icons/fa';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const userMenuItems = [
    {
      key: 'profile',
      label: 'Profile',
    },
    {
      key: 'settings',
      label: 'Settings',
    },
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  const headerMenuItems = [
    {
      key: 'dashboards',
      label: 'Dashboards',
      icon: <DashboardOutlined />,
    },
    {
      key: 'carrier-bookings',
      label: 'Carrier Bookings',
      icon: <CarOutlined />,
    },
    {
      key: 'test-bookings',
      label: 'Test Bookings',
      icon: <CarOutlined />,
    },
  ];

  return (
    <AntHeader style={{ 
      backgroundColor: '#1f2937', 
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '56px',
      borderBottom: '1px solid #374151'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginRight: '32px',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          <FaGlobe style={{ marginRight: '8px', color: '#3b82f6' }} />
          Winmore.app
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['carrier-bookings']}
          items={headerMenuItems}
          style={{ 
            backgroundColor: 'transparent',
            borderBottom: 'none',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button type="link" style={{ color: 'white' }}>
          Master Data
        </Button>
        <QuestionCircleOutlined style={{ color: 'white', fontSize: '16px' }} />
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
        >
          <Space style={{ color: 'white', cursor: 'pointer' }}>
            <Avatar size="small" icon={<UserOutlined />} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Jia C.</span>
              <span style={{ fontSize: '12px', opacity: 0.8 }}>LSP Operators</span>
            </div>
            <DownOutlined style={{ fontSize: '12px' }} />
          </Space>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;