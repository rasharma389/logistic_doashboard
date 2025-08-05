import React from 'react';
import { Button, Space, Typography, Card } from 'antd';
import { FilePdfOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import type { DocumentItem } from '../../data/mockData';

const { Text, Title } = Typography;

interface PDFPreviewProps {
  document: DocumentItem;
  onDownload: () => void;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ document, onDownload }) => {
  const handleOpenInNewTab = () => {
    window.open(document.pdfLink, '_blank');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100%',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: 400, 
          textAlign: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <FilePdfOutlined style={{ fontSize: '64px', color: '#ef4444' }} />
        </div>
        
        <Title level={4} style={{ marginBottom: '8px' }}>
          {document.tmsId}
        </Title>
        
        <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
          {document.pdfRevision}
        </Text>
        
        <div style={{ marginBottom: '24px' }}>
          <Text type="secondary">
            File Size: {document.fileSize}
          </Text>
          <br />
          <Text type="secondary">
            Upload Date: {document.uploadDate}
          </Text>
        </div>
        
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button 
            type="primary" 
            icon={<EyeOutlined />}
            onClick={handleOpenInNewTab}
            style={{ width: '100%' }}
          >
            Open in New Tab
          </Button>
          
          <Button 
            icon={<DownloadOutlined />}
            onClick={onDownload}
            style={{ width: '100%' }}
          >
            Download PDF
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default PDFPreview; 