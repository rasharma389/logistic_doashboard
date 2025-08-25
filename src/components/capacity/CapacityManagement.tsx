import React from 'react';
import { Card, Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CapacityManagement: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ padding: '24px', height: 'calc(100vh - 64px)' }}>
      <Card
        style={{ height: '100%' }}
        bodyStyle={{ padding: 0, height: 'calc(100% - 57px)' }}
      >
        {isLoading && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
            <div>Loading Capacity Management System...</div>
          </div>
        )}
        
        <iframe
          src="http://localhost:8501/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: isLoading ? 'none' : 'block'
          }}
          onLoad={handleIframeLoad}
          title="Capacity Management System"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        />
      </Card>
    </div>
  );
};

export default CapacityManagement;
