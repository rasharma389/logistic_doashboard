import React, { useState, useEffect } from 'react';
import { Modal, Button, Spin, message } from 'antd';
import { LeftOutlined, RightOutlined, CloseOutlined, DownloadOutlined, EyeOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { closePDFViewer, setCurrentPDFIndex } from '../../store/slices/uiSlice';
import type { DocumentItem } from '../../data/mockData';
import PDFViewer from './PDFViewer';
import './PDFViewer.css';

interface PDFViewerModalProps {
  visible: boolean;
  onClose: () => void;
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const { documents, currentPDFIndex } = useSelector((state: RootState) => state.ui);
  const [loading, setLoading] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1); // Default 100% zoom

  const currentDocument = documents[currentPDFIndex];

  useEffect(() => {
    if (visible && currentDocument) {
      setLoading(false);
      setScale(1); // Reset zoom to 100% when opening new document
    }
  }, [visible, currentDocument]);

  const handlePrevious = () => {
    if (currentPDFIndex > 0) {
      dispatch(setCurrentPDFIndex(currentPDFIndex - 1));
    }
  };

  const handleNext = () => {
    if (currentPDFIndex < documents.length - 1) {
      dispatch(setCurrentPDFIndex(currentPDFIndex + 1));
    }
  };

  const handleDownload = () => {
    if (currentDocument) {
      const link = document.createElement('a');
      link.href = currentDocument.pdfLink;
      link.download = `${currentDocument.tmsId}_${currentDocument.pdfRevision}.pdf`;
      link.click();
    }
  };

  const handleClose = () => {
    dispatch(closePDFViewer());
    onClose();
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  if (!currentDocument) {
    return null;
  }

  return (
    <Modal
      className="pdf-viewer-modal"
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>
                {currentDocument.tmsId} - {currentDocument.pdfRevision}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                Document {currentPDFIndex + 1} of {documents.length}
              </div>
            </div>
            {/* Navigation buttons in header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Button
                onClick={handlePrevious}
                disabled={currentPDFIndex === 0}
                icon={<LeftOutlined />}
                size="small"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentPDFIndex === documents.length - 1}
                icon={<RightOutlined />}
                size="small"
              >
                Next
              </Button>
            </div>
          </div>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={handleClose}
            style={{ border: 'none' }}
          />
        </div>
      }
      open={visible}
      onCancel={handleClose}
      width="70%"
      style={{ top: 20 }}
      styles={{
        body: {
          height: '80vh',
          padding: '0',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
      footer={null}
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        backgroundColor: '#f5f5f5'
      }}>
        {/* Top Controls Bar */}
        <div style={{ 
          padding: '12px 16px', 
          backgroundColor: '#fff',
          borderBottom: '1px solid #e9ecef',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          {/* Left side - Action buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              onClick={() => window.open(currentDocument.pdfLink, '_blank')}
              icon={<EyeOutlined />}
              size="small"
            >
              Open in New Tab
            </Button>
            <Button
              onClick={handleDownload}
              icon={<DownloadOutlined />}
              size="small"
            >
              Download
            </Button>
          </div>

          {/* Right side - Zoom controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button
              onClick={handleZoomOut}
              icon={<ZoomOutOutlined />}
              size="small"
              disabled={scale <= 0.5}
            />
            <span style={{ fontSize: '14px', color: '#666', minWidth: '50px', textAlign: 'center' }}>
              {Math.round(scale * 100)}%
            </span>
            <Button
              onClick={handleZoomIn}
              icon={<ZoomInOutlined />}
              size="small"
              disabled={scale >= 3}
            />
          </div>
        </div>

        {/* PDF Viewer Content */}
        <div style={{ 
          flex: 1, 
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          overflow: 'hidden'
        }}>
          {loading && (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',
              height: '100%'
            }}>
              <Spin size="large" />
              <div style={{ marginTop: '16px', color: '#666' }}>Loading PDF...</div>
            </div>
          )}
          
          {!loading && (
            <PDFViewer 
              document={currentDocument} 
              onDownload={handleDownload}
              onOpenInNewTab={() => window.open(currentDocument.pdfLink, '_blank')}
              scale={scale}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PDFViewerModal; 