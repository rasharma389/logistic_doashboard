import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Spin, Button, message, Skeleton } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import type { DocumentItem } from '../../data/mockData';
import './PDFViewer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PDFViewerProps {
  document: DocumentItem;
  onDownload: () => void;
  onOpenInNewTab: () => void;
  scale?: number;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ 
  document, 
  onDownload, 
  onOpenInNewTab, 
  scale = 1
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pdfBlob, setPdfBlob] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setPdfBlob(null);
    
    // Fetch PDF and create blob URL
    fetch(document.pdfLink)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        setPdfBlob(blobUrl);
      })
      .catch(error => {
        console.error('PDF fetch error:', error);
        setError(true);
        setLoading(false);
        message.error('Failed to load PDF document');
      });
      const timeout = setTimeout(() => {
        console.log('PDF loading timeout, setting loading to false');
        setLoading(false);
      }, 1000); // 10 seconds
      
      return () => clearTimeout(timeout);
  }, [document.pdfLink]);

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (pdfBlob) {
        URL.revokeObjectURL(pdfBlob);
      }
    };
  }, [pdfBlob]);

  // Handle scale changes - force re-render
  useEffect(() => {
    // This effect will trigger re-render when scale changes
  }, [scale]);

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  };

  const handleDocumentLoadError = (error: Error) => {
    console.error('PDF load error:', error);
    setError(true);
    setLoading(false);
    message.error('Failed to load PDF document');
  };

  // Calculate the scaled width for PDF pages
  const getScaledWidth = () => {
    const baseWidth = Math.min(window.innerWidth * 0.6, 800);
    const scaledWidth = baseWidth * scale;
    return Math.max(scaledWidth, 200); // Minimum width of 200px
  };

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%',
        padding: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#ef4444', marginBottom: '16px' }}>
            Failed to load PDF document
          </div>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <Button 
              type="primary"
              icon={<EyeOutlined />}
              onClick={onOpenInNewTab}
            >
              Open in New Tab
            </Button>
            <Button 
              icon={<DownloadOutlined />}
              onClick={onDownload}
            >
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: '#f5f5f5'
    }}>
      {/* PDF Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        overflow: 'auto',
        padding: '16px'
      }}>
        {loading && (
          <div style={{ 
            width: '100%',
            maxWidth: '100%',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            minHeight: '600px'
          }}>
            {/* Loading skeleton that matches PDF dimensions */}
            <div style={{ marginBottom: '20px' }}>
              <Skeleton.Input 
                active 
                size="large" 
                style={{ 
                  width: '100%', 
                  height: '600px',
                  borderRadius: '4px'
                }} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Skeleton.Input 
                active 
                size="large" 
                style={{ 
                  width: '100%', 
                  height: '600px',
                  borderRadius: '4px'
                }} 
              />
            </div>
            <div>
              <Skeleton.Input 
                active 
                size="large" 
                style={{ 
                  width: '100%', 
                  height: '600px',
                  borderRadius: '4px'
                }} 
              />
            </div>
          </div>
        )}
        
        {!loading && !error && pdfBlob && (
          <div style={{ 
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            minHeight: 'fit-content',
            width: '100%',
            maxWidth: '100%',
            overflow: 'auto',
            height: '100%'
          }}>
            <Document
              key={`pdf-${scale}`} // Force re-render when scale changes
              file={pdfBlob}
              onLoadSuccess={handleDocumentLoadSuccess}
              onLoadError={handleDocumentLoadError}
              loading={
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <Spin size="large" />
                  <div style={{ marginTop: '16px' }}>Loading PDF...</div>
                </div>
              }
              error={
                <div style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>
                  <div>Failed to load PDF</div>
                  <Button 
                    onClick={onOpenInNewTab}
                    style={{ marginTop: '16px' }}
                  >
                    Open in New Tab
                  </Button>
                </div>
              }
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}_${scale}`} style={{ 
                  marginBottom: index < numPages - 1 ? '20px' : '0',
                  display: 'flex',
                  justifyContent: 'center',
                  minWidth: 'fit-content'
                }}>
                  <Page
                    pageNumber={index + 1}
                    width={getScaledWidth()}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer; 