import React, { useState } from 'react';
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
      documents, 
      initialIndex: documentIndex 
    }));
  };

  const columns: ColumnsType<DocumentItem> = [
    {
      title: 'TMS #',
      dataIndex: 'tmsId',
      key: 'tmsId',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={documents}
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
          {documents.length} Records
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Pagination
            current={current}
            pageSize={pageSize}
            total={documents.length}
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