import React, { useState, useMemo } from 'react';
import { Table, Space, Tooltip, Button, Input, Pagination, Tag } from 'antd';
import { InfoCircleOutlined, EyeOutlined, FilePdfOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { openPDFViewer } from '../../store/slices/uiSlice';
import type { ColumnsType } from 'antd/es/table';
import type { DocumentItem } from '../../data/mockData';
import dayjs from 'dayjs';

const DocumentsTable: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedBookingId, documents } = useSelector((state: RootState) => state.bookings);
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  const [goToPage, setGoToPage] = useState('');

  // Helper function to get version number for sorting
  const getVersionNumber = (revision: string) => {
    if (revision === 'Original Version') return 0;
    const match = revision.match(/Version (\d+)/);
    return match ? parseInt(match[1]) : -1;
  };

  // Sort documents by pdfRevision in reverse chronological order (latest first)
  const sortedDocuments = useMemo(() => {
    const sorted = [...documents].sort((a, b) => {
      const versionA = getVersionNumber(a.pdfRevision);
      const versionB = getVersionNumber(b.pdfRevision);
      
      // Reverse order: latest version first (Version 2, Version 1, Original Version)
      return versionB - versionA;
    });
    
    return sorted;
  }, [documents, selectedBookingId]); // Add selectedBookingId to dependencies to re-sort when switching bookings

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
  };

  const handleGoToPage = () => {
    const page = parseInt(goToPage);
    if (page && page > 0) {
      setCurrent(page);
      setGoToPage('');
    }
  };

  const handleViewPdf = (documentIndex: number) => {
    dispatch(openPDFViewer({ 
      documents: sortedDocuments, 
      initialIndex: documentIndex 
    }));
  };

  const columns: ColumnsType<DocumentItem> = [
    {
      title: 'TMS #',
      dataIndex: 'tmsId',
      key: 'tmsId',
      sorter: (a, b) => a.tmsId.localeCompare(b.tmsId),
      render: (text: string) => (
        <Space>
          <span style={{ color: '#0ea5e9', fontWeight: '500' }}>{text}</span>
          <Tooltip title="Transport Management System ID">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'PDF Revision',
      dataIndex: 'pdfRevision',
      key: 'pdfRevision',
      sorter: (a, b) => {
        const versionA = getVersionNumber(a.pdfRevision);
        const versionB = getVersionNumber(b.pdfRevision);
        
        // Reverse order: latest version first (Version 2, Version 1, Original Version)
        return versionB - versionA;
      },
      defaultSortOrder: 'ascend' as const,
      sortDirections: ['descend', 'ascend'] as const,
      render: (text: string) => (
        <Space>
          <Tag 
            color={text === 'Original Version' ? 'blue' : 'green'} 
            style={{ fontSize: '12px' }}
          >
            {text}
          </Tag>
          <Tooltip title="PDF document revision">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'Link',
      dataIndex: 'pdfLink',
      key: 'pdfLink',
      sorter: (a, b) => a.pdfLink.localeCompare(b.pdfLink),
      render: (link: string, record: DocumentItem, index: number) => (
        <Space>
          <Button
            type="link"
            size="small"
            icon={<FilePdfOutlined />}
            onClick={() => handleViewPdf(index)}
            style={{ 
              fontSize: '12px', 
              color: '#0ea5e9',
              padding: '0',
              height: 'auto'
            }}
          >
            View PDF
          </Button>
          <Tooltip title="Click to view PDF document">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'Upload Date',
      dataIndex: 'uploadDate',
      key: 'uploadDate',
      sorter: (a, b) => dayjs(a.uploadDate).unix() - dayjs(b.uploadDate).unix(),
      render: (date: string) => (
        <Space>
          <span>{dayjs(date).format('DD MMM')}</span>
          <Tooltip title="Document upload date">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: 'File Size',
      dataIndex: 'fileSize',
      key: 'fileSize',
      sorter: (a, b) => {
        // Extract numeric value from file size (e.g., "2.3 MB" -> 2.3)
        const getSizeValue = (size: string) => {
          const match = size.match(/(\d+\.?\d*)/);
          return match ? parseFloat(match[1]) : 0;
        };
        return getSizeValue(a.fileSize) - getSizeValue(b.fileSize);
      },
      render: (size: string) => (
        <Space>
          <span style={{ color: '#6b7280' }}>{size}</span>
          <Tooltip title="PDF file size">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip>
        </Space>
      ),
    }
  ];

  return (
    <div style={{ padding: '12px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Documents</span>
          <Button 
            type="text" 
            size="small" 
            style={{ fontSize: '12px', color: '#6b7280' }}
          >
            Hide
          </Button>
        </div>
        <Button 
          type="text" 
          icon={<EyeOutlined />}
          style={{ fontSize: '12px', color: '#6b7280' }}
        >
          Upload Document
        </Button> */}
      </div>

      <Table
        key={`documents-table-${selectedBookingId}`} // Force re-render when switching bookings
        columns={columns}
        dataSource={sortedDocuments}
        rowKey="id"
        pagination={false}
        size="small"
        bordered
        style={{ fontSize: '13px' }}
      />

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '16px',
        fontSize: '13px'
      }}>
        <div style={{ color: '#6b7280' }}>
          {sortedDocuments.length} Records
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Pagination
            current={current}
            pageSize={pageSize}
            total={sortedDocuments.length}
            showSizeChanger={false}
            simple
            onChange={setCurrent}
            style={{ fontSize: '13px' }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{pageSize} / page</span>
            <span>Go to</span>
            <Input
              size="small"
              value={goToPage}
              onChange={(e) => setGoToPage(e.target.value)}
              onPressEnter={handleGoToPage}
              style={{ width: '60px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTable; 