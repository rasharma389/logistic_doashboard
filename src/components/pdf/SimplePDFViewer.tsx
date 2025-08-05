import React from 'react';
import { Button, Space, Typography, Card } from 'antd';
import { FilePdfOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import type { DocumentItem } from '../../data/mockData';

const { Text, Title } = Typography;

interface SimplePDFViewerProps {
  document: DocumentItem;
  onDownload: () => void;
}

const SimplePDFViewer: React.FC<SimplePDFViewerProps> = ({ document, onDownload }) => {
  const handleOpenInNewTab = () => {
    window.open(document.pdfLink, '_blank');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      height: '100%',
      padding: '20px'
    }}>
      {/* PDF Display */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        marginBottom: '16px'
      }}>
        <iframe
          src={document.pdfLink}
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title={`PDF Viewer - ${document.tmsId}`}
          onError={() => {
            // If iframe fails, show the preview
            console.log('PDF iframe failed to load');
          }}
        />
      </div>

      {/* Document Info Card */}
      <Card 
        style={{ 
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
            <Title level={5} style={{ marginBottom: '4px' }}>
              {document.tmsId} - {document.pdfRevision}
            </Title>
            <Text type="secondary">
              File Size: {document.fileSize} | Upload Date: {document.uploadDate}
            </Text>
          </div>
          
          <Space>
            <Button 
              type="primary" 
              icon={<EyeOutlined />}
              onClick={handleOpenInNewTab}
              size="small"
            >
              Open in New Tab
            </Button>
            
            <Button 
              icon={<DownloadOutlined />}
              onClick={onDownload}
              size="small"
            >
              Download
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default SimplePDFViewer; 