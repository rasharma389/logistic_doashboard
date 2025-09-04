import React, { useMemo } from 'react';
import { Table, Button, Space, Tag, Tooltip } from 'antd';
import { FilePdfOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { openPDFViewer } from '../../store/slices/uiSlice';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import type { ColumnsType } from 'antd/es/table';
import type { DocumentItem } from '../../data/mockData';

interface DocumentVersion {
  key: string;
  pdfRevision: string;
  receiptDateTime: string;
  polEtd: string;
  podEta: string;
  vesselName: string;
  vesselVoyage: string;
}

const DocumentsTableNew: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedBookingId } = useSelector((state: RootState) => state.bookings);

  // Get the TMS number from the selected booking
  const getTmsNumber = (): string | null => {
    if (!selectedBookingId) return null;
    
    // Remove CB- prefix if present
    const cleanId = selectedBookingId.startsWith('CB-') ? selectedBookingId.substring(3) : selectedBookingId;
    return cleanId;
  };

  const tmsNumber = getTmsNumber();

  // PDF file mapping based on TMS number and version
  const getPDFFilesForTMS = (tmsNumber: string): Record<string, string> => {
    const pdfMappings: Record<string, Record<string, string>> = {
      '180080071': {
        'Original': '/180080071/MAEU_076_Cancellation_DB_aabhfcagbigj0x0287.pdf'
      },
      '180080072': {
        'Original': '/180080072/MAEU_665_original_DB_aabhfdhieaeg0x0BCC.pdf'
      },
      '180080073': {
        'Original': '/180080073/MAEU_575_orignal_DB_aabhfdhieaeg0x0BAE.pdf',
        'Version 1': '/180080073/MAEU_575_1st Update_DB_aabhfcaecjgi0x0556.pdf'
      },
      '180080074': {
        'Original': '/180080074/HLCU-38538244 NLRTM BC ORIGINAL.pdf',
        'Version 1': '/180080074/HLCU-38538244 NLRTM BC 1ST UPDATE.pdf',
        'Version 2': '/180080074/HLCU-38538244 NLRTM BC 2ND UPDATE.pdf',
        'Version 3': '/180080074/HLCU-38538244 NLRTM BC 3RD UPDATE.pdf'
      },
      '180080075': {
        'Original': '/180080075/HLCU-13545758 DEHAM BC ORIGINAL.pdf',
        'Version 1': '/180080075/HLCU-13545758 DEHAM BC 1ST UPDATE.pdf'
      },
      '180080076': {
        'Original': '/180080076/HLCU-93396744 DEHAM BC ORIGINAL.pdf',
        'Version 1': '/180080076/HLCU-93396744 DEHAM BC 1ST UPDATE.pdf',
        'Version 2': '/180080076/HLCU-93396744 DEHAM BC 2ND UPDATE.pdf',
        'Version 3': '/180080076/HLCU-93396744 DEHAM BC 3RD UPDATE.pdf',
        'Version 4': '/180080076/HLCU-93396744 DEHAM BC 4TH UPDATE.pdf',
        'Version 5': '/180080076/HLCU-93396744 DEHAM BC 5TH UPDATE.pdf',
        'Version 6': '/180080076/HLCU-93396744 DEHAM BC 6TH UPDATE.pdf',
        'Version 7': '/180080076/HLCU-93396744 DEHAM BC 7TH UPDATE.pdf'
      },
      '180080077': {
        'Original': '/180080077/EGVL_SB7S4D2C.pdf'
      }
    };
    
    console.log('TMS Number:', tmsNumber);
    console.log('Available PDF mappings:', Object.keys(pdfMappings));
    console.log('PDF files for this TMS:', pdfMappings[tmsNumber] || {});
    
    return pdfMappings[tmsNumber] || {};
  };

  // Convert document versions to DocumentItem format for PDF viewer
  const convertToDocumentItems = (versions: DocumentVersion[]): DocumentItem[] => {
    if (!tmsNumber) return [];
    
    const pdfFiles = getPDFFilesForTMS(tmsNumber);
    
    return versions.map((version, index) => ({
      id: `${tmsNumber}-${version.key}`,
      tmsId: tmsNumber,
      pdfRevision: version.pdfRevision,
      pdfLink: pdfFiles[version.pdfRevision] || '',
      uploadDate: version.receiptDateTime || '',
      fileSize: 'Unknown' // We don't have file size info from the data
    }));
  };

  // Handle PDF viewing
  const handleViewPdf = (documentIndex: number) => {
    const documentItems = convertToDocumentItems(documentVersions);
    if (documentItems.length > 0 && documentItems[documentIndex]?.pdfLink) {
      dispatch(openPDFViewer({ 
        documents: documentItems, 
        initialIndex: documentIndex 
      }));
    }
  };

  // Get the actual booking data from shipperBookingsData
  const bookingData = useMemo(() => {
    if (!tmsNumber) return null;
    return shipperBookingsData.find(booking => booking['TMS #'] === tmsNumber);
  }, [tmsNumber]);

  // Helper function to get version number for sorting
  const getVersionNumber = (revision: string) => {
    if (revision === 'Original') return 0;
    const match = revision.match(/Version (\d+)/);
    return match ? parseInt(match[1]) : -1;
  };

  // Generate document versions data
  const documentVersions = useMemo(() => {
    if (!bookingData) return [];

    const versions: DocumentVersion[] = [];

    // Version 7
    if (bookingData['BC Release date v7'] || bookingData['BC Release Time v7']) {
      versions.push({
        key: 'v7',
        pdfRevision: 'Version 7',
        receiptDateTime: `${bookingData['BC Release date v7'] || ''} ${bookingData['BC Release Time v7'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v7'] || '',
        podEta: bookingData['BC ETA POD v7'] || '',
        vesselName: bookingData['BC 1st Vessel  v7'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v7'] || ''
      });
    }

    // Version 6
    if (bookingData['BC Release date v6'] || bookingData['BC Release Time v6']) {
      versions.push({
        key: 'v6',
        pdfRevision: 'Version 6',
        receiptDateTime: `${bookingData['BC Release date v6'] || ''} ${bookingData['BC Release Time v6'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v6'] || '',
        podEta: bookingData['BC ETA POD v6'] || '',
        vesselName: bookingData['BC 1st Vessel  v6'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v6'] || ''
      });
    }

    // Version 5
    if (bookingData['BC Release date v5'] || bookingData['BC Release Time v5']) {
      versions.push({
        key: 'v5',
        pdfRevision: 'Version 5',
        receiptDateTime: `${bookingData['BC Release date v5'] || ''} ${bookingData['BC Release Time v5'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v5'] || '',
        podEta: bookingData['BC ETA POD v5'] || '',
        vesselName: bookingData['BC 1st Vessel  v5'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v5'] || ''
      });
    }

    // Version 4
    if (bookingData['BC Release date v4'] || bookingData['BC Release Time v4']) {
      versions.push({
        key: 'v4',
        pdfRevision: 'Version 4',
        receiptDateTime: `${bookingData['BC Release date v4'] || ''} ${bookingData['BC Release Time v4'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v4'] || '',
        podEta: bookingData['BC ETA POD v4'] || '',
        vesselName: bookingData['BC 1st Vessel  v4'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v4'] || ''
      });
    }

    // Version 3
    if (bookingData['BC Release date v3'] || bookingData['BC Release Time v3']) {
      versions.push({
        key: 'v3',
        pdfRevision: 'Version 3',
        receiptDateTime: `${bookingData['BC Release date v3'] || ''} ${bookingData['BC Release Time v3'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v3'] || '',
        podEta: bookingData['BC ETA POD v3'] || '',
        vesselName: bookingData['BC 1st Vessel  v3'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v3'] || ''
      });
    }

    // Version 2
    if (bookingData['BC Release date v2'] || bookingData['BC Release Time v2']) {
      versions.push({
        key: 'v2',
        pdfRevision: 'Version 2',
        receiptDateTime: `${bookingData['BC Release date v2'] || ''} ${bookingData['BC Release Time v2'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v2'] || '',
        podEta: bookingData['BC ETA POD v2'] || '',
        vesselName: bookingData['BC 1st Vessel  v2'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v2'] || ''
      });
    }

    // Version 1
    if (bookingData['BC Release date v1'] || bookingData['BC Release Time v1']) {
      versions.push({
        key: 'v1',
        pdfRevision: 'Version 1',
        receiptDateTime: `${bookingData['BC Release date v1'] || ''} ${bookingData['BC Release Time v1'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL v1'] || '',
        podEta: bookingData['BC ETA POD v1'] || '',
        vesselName: bookingData['BC 1st Vessel  v1'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage v1'] || ''
      });
    }

    // Original
    if (bookingData['BC Release date original'] || bookingData['BC Release Time original']) {
      versions.push({
        key: 'original',
        pdfRevision: 'Original',
        receiptDateTime: `${bookingData['BC Release date original'] || ''} ${bookingData['BC Release Time original'] || ''}`.trim(),
        polEtd: bookingData['BC ETD POL original'] || '',
        podEta: bookingData['BC ETA POD original'] || '',
        vesselName: bookingData['BC 1st Vessel  original'] || '',
        vesselVoyage: bookingData['BC 1st Vessel Voyage original'] || ''
      });
    }

    // Sort by version number (latest first)
    return versions.sort((a, b) => {
      const versionA = getVersionNumber(a.pdfRevision);
      const versionB = getVersionNumber(b.pdfRevision);
      return versionB - versionA;
    });
  }, [bookingData]);

  const columns: ColumnsType<DocumentVersion> = [
    {
      title: 'PDF Revision',
      dataIndex: 'pdfRevision',
      key: 'pdfRevision',
      width: 120,
      sorter: (a: DocumentVersion, b: DocumentVersion) => {
        const versionA = getVersionNumber(a.pdfRevision);
        const versionB = getVersionNumber(b.pdfRevision);
        return versionB - versionA;
      },
      defaultSortOrder: 'ascend' as const,
      render: (text: string) => (
        <Space>
          <Tag 
            color={text === 'Original' ? 'blue' : 'green'} 
            style={{ fontSize: '12px' }}
          >
            {text}
          </Tag>
          {/* <Tooltip title="PDF document revision">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip> */}
        </Space>
      ),
    },
    {
      title: 'Receipt date + time',
      dataIndex: 'receiptDateTime',
      key: 'receiptDateTime',
      width: 200,
      render: (text: string) => (
        <Space>
          <span style={{ color: '#6b7280' }}>{text || '-'}</span>
          {/* <Tooltip title="Document receipt date and time">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip> */}
        </Space>
      ),
    },
    {
      title: 'POL ETD',
      dataIndex: 'polEtd',
      key: 'polEtd',
      width: 120,
      render: (text: string) => (
        <Space>
          <span style={{ color: '#6b7280' }}>{text || '-'}</span>
          {/* <Tooltip title="Port of Loading Estimated Time of Departure">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip> */}
        </Space>
      ),
    },
    {
      title: 'POD ETA',
      dataIndex: 'podEta',
      key: 'podEta',
      width: 120,
      render: (text: string) => (
        <Space>
          <span style={{ color: '#6b7280' }}>{text || '-'}</span>
          {/* <Tooltip title="Port of Discharge Estimated Time of Arrival">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip> */}
        </Space>
      ),
    },
    {
      title: '1st Vessel Name',
      dataIndex: 'vesselName',
      key: 'vesselName',
      width: 150,
      render: (text: string) => (
        <Space>
          <span style={{ color: '#6b7280' }}>{text || '-'}</span>
          {/* <Tooltip title="First vessel name">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip> */}
        </Space>
      ),
    },
    {
      title: '1 vessel Voyage #',
      dataIndex: 'vesselVoyage',
      key: 'vesselVoyage',
      width: 150,
      render: (text: string) => (
        <Space>
          <span style={{ color: '#6b7280' }}>{text || '-'}</span>
          {/* <Tooltip title="First vessel voyage number">
            <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
          </Tooltip> */}
        </Space>
      ),
    },
    {
      title: 'Link',
      key: 'link',
      width: 100,
      render: (_, record: DocumentVersion, index: number) => {
        const pdfFiles = getPDFFilesForTMS(tmsNumber || '');
        const hasPDF = pdfFiles[record.pdfRevision];
        
        console.log('Record PDF Revision:', record.pdfRevision);
        console.log('Available PDF files:', Object.keys(pdfFiles));
        console.log('Has PDF:', hasPDF);
        
        return (
          <Space>
            <Button
              type="link"
              size="small"
              icon={<FilePdfOutlined />}
              onClick={() => handleViewPdf(index)}
              disabled={!hasPDF}
              style={{ 
                fontSize: '12px', 
                color: hasPDF ? '#0ea5e9' : '#9ca3af',
                padding: '0',
                height: 'auto'
              }}
            >
              View PDF
            </Button>
            {!hasPDF && (
              <Tooltip title="PDF not available for this version">
                <InfoCircleOutlined style={{ fontSize: '12px', color: '#9ca3af' }} />
              </Tooltip>
            )}
          </Space>
        );
      },
    },
  ];

  if (!bookingData) {
    return <div>No booking data available</div>;
  }

  return (
    <div style={{ padding: '12px' }}>
      <Table
        key={`documents-table-new-${selectedBookingId}`}
        columns={columns}
        dataSource={documentVersions}
        rowKey="key"
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
          {documentVersions.length} Records
        </div>
      </div>
    </div>
  );
};

export default DocumentsTableNew;
