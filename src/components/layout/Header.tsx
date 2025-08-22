import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Space } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  DashboardOutlined,
  FileTextOutlined,
  MailOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
import { FaGlobe } from 'react-icons/fa';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userMenuItems = [
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  const headerMenuItems = [
    {
      key: 'dashboard',
      label: 'Dashboards',
      icon: <DashboardOutlined />,
    },
    {
      key: 'booking-overview',
      label: 'Booking Overview',
      icon: <FileTextOutlined />,
    },
    {
      key: 'booking-overview-new',
      label: 'Booking Overview New',
      icon: <FileTextOutlined />,
    },
    {
      key: 'email-reader',
      label: 'Email Reader',
      icon: <MailOutlined />,
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'carrier-bookings') {
      navigate('/booking-overview/carrier-bookings');
    } else {
      navigate(`/${key}`);
    }
  };

  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      // Handle logout logic here
      console.log('User logged out');
      // You can add actual logout logic like clearing localStorage, redirecting to login, etc.
    }
  };

  return (
    <AntHeader style={{ 
      backgroundColor: '#1f2937', 
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #374151'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginRight: '24px',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          flexShrink: 0
        }}>
          <FaGlobe style={{ marginRight: '8px', color: '#3b82e6' }} />
          AllocationAI
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname.startsWith('/booking-overview/carrier-bookings') ? 'carrier-bookings' : location.pathname.substring(1)]}
          items={headerMenuItems}
          onClick={handleMenuClick}
          style={{ 
            backgroundColor: 'transparent',
            borderBottom: 'none',
            fontSize: '14px',
            overflow: 'visible',
            flex: 1,
            minWidth: 0,
            whiteSpace: 'nowrap'
          }}
          overflowedIndicator={null}
          inlineCollapsed={false}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <Dropdown
          menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
          placement="bottomRight"
        >
          <Space style={{ color: 'white', cursor: 'pointer', padding: '8px 12px' }}>
            <Avatar size="small" icon={<UserOutlined />} />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Stephanie</span>
            <DownOutlined style={{ fontSize: '12px' }} />
          </Space>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;