import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { Layout, Table, Input, Select, Button, Space, Checkbox, Tag, Progress, Tooltip, Pagination, Typography, Card, DatePicker, Divider, Alert } from 'antd';
import { SearchOutlined, DownOutlined, InfoCircleOutlined, DownloadOutlined, SettingOutlined, ReloadOutlined, FilterOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../../store';
import { 
  fetchBookings, 
  updateFiltersAndRefresh, 
  updateSearchAndRefresh,
  setSearchQuery,
  changePageAndRefresh,
  changePageSizeAndRefresh,
  toggleBookingSelection,
  selectAllBookings,
  clearBookingSelection,
  shareFilteredDataWithCarrierBookings
} from '../../store/slices/bookingOverviewSlice';
import type { ColumnsType } from 'antd/es/table';
import type { ShipperBooking } from '../../types/bookingOverview';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import type { BookingOverviewFilters } from '../../types/bookingOverview';
import type { Key } from 'react';

const { Option } = Select;
const { Text } = Typography;

interface BookingOverviewProps {
  onMenuClick?: (key: string) => void;
}

const BookingOverview: React.FC<BookingOverviewProps> = ({ onMenuClick }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { 
    bookings, 
    totalItems, 
    currentPage, 
    pageSize, 
    totalPages,
    filters, 
    searchQuery,
    selectedBookings,
    loading, 
    error 
  } = useSelector((state: RootState) => state.bookingOverview);

  // Column filters state
  const [columnFilters, setColumnFilters] = useState<Record<string, any>>({});
  
  // Local search state for immediate UI feedback
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // Debounce timer ref
  const searchTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Memoized unique values for dropdown filters - optimized to prevent unnecessary recalculations
  const uniqueValues = useMemo(() => {
    const cache: Record<string, string[]> = {};
    
    // Pre-calculate all unique values once
    const calculateUniqueValues = () => {
      if (Object.keys(cache).length === 0) {
        const fields = [
          'Trade', 'Origin region', 'Destination region', 'Origin country', 'district', 
          'req ETD wk', 'Cust. Code', 'Carrier (Std)', 'Booking Status', 'Exception?',
          'Region', 'Bkg Type', 'Shipper Bkg Linked?'
        ];
        
        fields.forEach(field => {
          const values = shipperBookingsData
            .map(item => item[field as keyof ShipperBooking])
            .filter((value): value is string => value !== undefined && value !== null && value.toString().trim() !== '')
            .map(value => value.toString());
          cache[field] = [...new Set(values)].sort();
        });
      }
      return cache;
    };
    
    const values = calculateUniqueValues();
    
    return (key: string) => values[key] || [];
  }, []); // Empty dependency array - only runs once

  // Memoized column width calculation
  const calculateColumnWidth = useCallback((headerText: string, minWidth = 150, maxWidth = 200) => {
    const baseWidth = headerText.length * 8 + 40;
    return Math.min(Math.max(baseWidth, minWidth), maxWidth);
  }, []);

  // Memoized filter dropdown component
  const getColumnSearchProps = useCallback((dataIndex: string, title: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${title}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: Key | boolean, record: ShipperBooking) =>
      (record[dataIndex as keyof ShipperBooking] || '').toString().toLowerCase().includes(value.toString().toLowerCase()),
  }), []);

  // Memoized select dropdown filter component
  const getColumnSelectProps = useCallback((dataIndex: string, title: string) => {
    const values = uniqueValues(dataIndex);
    return {
      filters: values.map(value => ({ text: value, value })),
      onFilter: (value: Key | boolean, record: ShipperBooking) => 
        (record[dataIndex as keyof ShipperBooking] || '').toString() === value.toString(),
      filterMultiple: true,
    };
  }, [uniqueValues]);

  // Initial data fetch
  useEffect(() => {
    // console.log('Initial data fetch - current state:', { bookings, totalItems, loading });
    dispatch(fetchBookings());
  }, [dispatch]);

  // Sync local search with Redux state
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Simplified debounced search effect
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      if (localSearchQuery !== searchQuery) {
        dispatch(updateSearchAndRefresh(localSearchQuery));
      }
    }, 300);
    
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [localSearchQuery, searchQuery, dispatch]);

  const handleFilterChange = useCallback((key: string, value: string) => {
    dispatch(updateFiltersAndRefresh({ [key]: value }));
  }, [dispatch]);

  const handleMultiSelectFilterChange = useCallback((key: string, values: string[]) => {
    const filterValue = values.length === 0 ? 'All' : values.join(',');
    dispatch(updateFiltersAndRefresh({ [key]: filterValue }));
  }, [dispatch]);

  // Helper function to get current filter values as array
  const getFilterValues = useCallback((filterKey: string): string[] => {
    const filterValue = filters[filterKey as keyof BookingOverviewFilters];
    if (!filterValue || filterValue === 'All') return [];
    return filterValue.split(',').filter(v => v.trim() !== '');
  }, [filters]);

  const handleSearchInputChange = useCallback((value: string) => {
    setLocalSearchQuery(value);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    dispatch(changePageAndRefresh(page));
  }, [dispatch]);

  const handlePageSizeChange = useCallback((current: number, size: number) => {
    dispatch(changePageSizeAndRefresh(size));
  }, [dispatch]);

  const handleRowSelection = useCallback((bookingId: string) => {
    dispatch(toggleBookingSelection(bookingId));
  }, [dispatch]);

  const handleSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      dispatch(selectAllBookings());
    } else {
      dispatch(clearBookingSelection());
    }
  }, [dispatch]);

  const handleClearSelection = useCallback(() => {
    dispatch(clearBookingSelection());
  }, [dispatch]);

  const handleRefresh = useCallback(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const getStageColor = useCallback((stage: string) => {
    if (!stage) return '#d9d9d9';
    if (stage.includes('No CB Req') || stage.includes('Approved')) {
      return '#1890ff';
    } else if (stage.includes('Route Selected')) {
      return '#52c41a';
    } else if (stage.includes('CB Requested')) {
      return '#faad14';
    } else if (stage.includes('CB Confirmed')) {
      return '#13c2c2';
    } else if (stage.includes('Cancelled')) {
      return '#ff4d4f';
    }
    return '#d9d9d9';
  }, []);

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'Requested':
        return '#722ed1';
      case 'Confirmed':
        return '#005551';
      case 'Cancelled':
        return '#c70504';
      case 'Canceled by carrier':
        return '#c70504';
      case 'Canceled by requestor':
        return '#c70504';
      default:
        return '#ff9e01';
    }
  }, []);

  // Table columns definition
  const columns: ColumnsType<ShipperBooking> = useMemo(() => [
    {
      title: 'Trade',
      dataIndex: 'Trade',
      key: 'Trade',
      width: 160,
      fixed: false,
      sorter: (a, b) => (a.Trade || '').localeCompare(b.Trade || ''),
      ...getColumnSelectProps('Trade', 'Trade'),
      render: (text: string, record: ShipperBooking) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>
          {text || record.Trade || 'N/A'}
        </Text>
      ),
    },
    {
      title: 'Origin Region',
      dataIndex: 'Origin region',
      key: 'Origin region',
      width: 140,
      fixed: false,
      sorter: (a, b) => (a['Origin region'] || '').localeCompare(b['Origin region'] || ''),
      ...getColumnSelectProps('Origin region', 'Origin Region'),
      render: (text: string, record: ShipperBooking) => {
        return (
          <Text style={{ fontSize: '13px', color: '#333' }}>
            {text || record['Origin region'] || 'N/A'}
          </Text>
        );
      },
    },
    {
      title: 'Destination Region',
      dataIndex: 'Destination region',
      key: 'Destination region',
      width: 140,
      fixed: false,
      sorter: (a, b) => (a['Destination region'] || '').localeCompare(b['Destination region'] || ''),
      ...getColumnSelectProps('Destination region', 'Destination Region'),
      render: (text: string, record: ShipperBooking) => {
        return (
          <Text style={{ fontSize: '13px', color: '#333' }}>
            {text || record['Destination region'] || 'N/A'}
          </Text>
        );
      },
    },
    {
      title: 'Origin Country',
      dataIndex: 'Origin country',
      key: 'Origin country',
      width: calculateColumnWidth('Origin country'),
      sorter: (a, b) => (a['Origin country'] || '').localeCompare(b['Origin country'] || ''),
      ...getColumnSelectProps('Origin country', 'Origin Country'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
      width: calculateColumnWidth('district'),
      sorter: (a, b) => (a.district || '').localeCompare(b.district || ''),
      ...getColumnSelectProps('district', 'District'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Req ETD Week',
      dataIndex: 'req ETD wk',
      key: 'req ETD wk',
      width: 120,
      fixed: false,
      sorter: (a, b) => parseInt(a['req ETD wk'] || '0') - parseInt(b['req ETD wk'] || '0'),
      ...getColumnSelectProps('req ETD wk', 'Req ETD Week'),
      render: (text: string, record: ShipperBooking) => {
        const value = text || record['req ETD wk'] || 'N/A';
        // console.log('Req ETD Week render debug:', { 
        //   text, 
        //   recordValue: record['req ETD wk'],
        //   finalValue: value,
        //   recordId: record.id
        // });
        return (
            <Text style={{ fontSize: '13px', color: '#059669', fontWeight: '500' }}>
              {value}
            </Text>
        );
      },
    },
    {
      title: 'Customer Code',
      dataIndex: 'Cust. Code',
      key: 'Cust. Code',
      width: calculateColumnWidth('Cust. Code'),
      sorter: (a, b) => (a['Cust. Code'] || '').localeCompare(b['Cust. Code'] || ''),
      ...getColumnSelectProps('Cust. Code', 'Customer Code'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'Carrier Standard',
      dataIndex: 'Carrier (Std)',
      key: 'Carrier (Std)',
      width: calculateColumnWidth('Carrier (Std)'),
      sorter: (a, b) => (a['Carrier (Std)'] || '').localeCompare(b['Carrier (Std)'] || ''),
      ...getColumnSelectProps('Carrier (Std)', 'Carrier Standard'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Contract Number',
      dataIndex: 'Contract #',
      key: 'Contract #',
      width: calculateColumnWidth('Contract #'),
      sorter: (a, b) => (a['Contract #'] || '').localeCompare(b['Contract #'] || ''),
      ...getColumnSearchProps('Contract #', 'Contract Number'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR 1st Vessel',
      dataIndex: 'BR:1st Vessel',
      key: 'BR:1st Vessel',
      width: calculateColumnWidth('BR:1st Vessel'),
      sorter: (a, b) => (a['BR:1st Vessel'] || '').localeCompare(b['BR:1st Vessel'] || ''),
      ...getColumnSearchProps('BR:1st Vessel', 'BR 1st Vessel'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR 1st Voyage #',
      dataIndex: 'BR:1st Voyage #',
      key: 'BR:1st Voyage #',
      width: calculateColumnWidth('BR:1st Voyage #'),
      sorter: (a, b) => (a['BR:1st Voyage #'] || '').localeCompare(b['BR:1st Voyage #'] || ''),
      ...getColumnSearchProps('BR:1st Voyage #', 'BR 1st Voyage #'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Booking Party #',
      dataIndex: 'Bkg Party #',
      key: 'Bkg Party #',
      width: calculateColumnWidth('Bkg Party #'),
      sorter: (a, b) => (a['Bkg Party #'] || '').localeCompare(b['Bkg Party #'] || ''),
      ...getColumnSearchProps('Bkg Party #', 'Booking Party #'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'TMS Number',
      dataIndex: 'TMS #',
      key: 'TMS #',
      width: calculateColumnWidth('TMS Number'),
      sorter: (a, b) => (a['TMS #'] || '').localeCompare(b['TMS #'] || ''),
      ...getColumnSearchProps('TMS #', 'TMS Number'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>
          CB-{text || ''}
        </Text>
      ),
    },
    {
      title: 'Booking Status',
      dataIndex: 'Booking Status',
      key: 'Booking Status',
      width: calculateColumnWidth('Booking Status'),
      sorter: (a, b) => (a['Booking Status'] || '').localeCompare(b['Booking Status'] || ''),
      ...getColumnSelectProps('Booking Status', 'Booking Status'),
      render: (status: string) => (
        <Tag 
          color={getStatusColor(status)}
          style={{ 
            fontSize: '11px', 
            padding: '2px 8px',
            borderRadius: '12px',
            border: 'none'
          }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Exception?',
      dataIndex: 'Exception?',
      key: 'Exception?',
      width: calculateColumnWidth('Exception?'),
      sorter: (a, b) => (a['Exception?'] || '').localeCompare(b['Exception?'] || ''),
      ...getColumnSelectProps('Exception?', 'Exception?'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: text === 'Y' ? '#005551' : '#c70504', fontWeight: '500' }}>
          {text === 'Y' ? 'Yes' : 'No'}
        </Text>
      ),
    },
    {
      title: 'BR PRE',
      dataIndex: 'BR:PRE',
      key: 'BR:PRE',
      width: calculateColumnWidth('BR:PRE'),
      sorter: (a, b) => (a['BR:PRE'] || '').localeCompare(b['BR:PRE'] || ''),
      ...getColumnSearchProps('BR:PRE', 'BR PRE'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'BR POL',
      dataIndex: 'BR:POL',
      key: 'BR:POL',
      width: calculateColumnWidth('BR:POL'),
      sorter: (a, b) => (a['BR:POL'] || '').localeCompare(b['BR:POL'] || ''),
      ...getColumnSearchProps('BR:POL', 'BR POL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'BR POD',
      dataIndex: 'BR:POD',
      key: 'BR:POD',
      width: calculateColumnWidth('BR:POD'),
      sorter: (a, b) => (a['BR:POD'] || '').localeCompare(b['BR:POD'] || ''),
      ...getColumnSearchProps('BR:POD', 'BR POD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'BR DEL',
      dataIndex: 'BR:DEL',
      key: 'BR:DEL',
      width: calculateColumnWidth('BR:DEL'),
      sorter: (a, b) => (a['BR:DEL'] || '').localeCompare(b['BR:DEL'] || ''),
      ...getColumnSearchProps('BR:DEL', 'BR DEL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'Move Type',
      dataIndex: 'Move Type',
      key: 'Move Type',
      width: calculateColumnWidth('Move Type'),
      sorter: (a, b) => (a['Move Type'] || '').localeCompare(b['Move Type'] || ''),
      ...getColumnSelectProps('Move Type', 'Move Type'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Req. ETD',
      dataIndex: 'BR:Req. ETD',
      key: 'BR:Req. ETD',
      width: calculateColumnWidth('BR:Req. ETD'),
      sorter: (a, b) => (a['BR:Req. ETD'] || '').localeCompare(b['BR:Req. ETD'] || ''),
      ...getColumnSearchProps('BR:Req. ETD', 'BR Req. ETD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC ETD POL',
      dataIndex: 'BC:ETD POL',
      key: 'BC:ETD POL',
      width: calculateColumnWidth('BC:ETD POL'),
      sorter: (a, b) => (a['BC:ETD POL'] || '').localeCompare(b['BC:ETD POL'] || ''),
      ...getColumnSearchProps('BC:ETD POL', 'BC ETD POL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Equipment',
      dataIndex: 'BR:Eqp.',
      key: 'BR:Eqp.',
      width: calculateColumnWidth('BR:Eqp.'),
      sorter: (a, b) => (a['BR:Eqp.'] || '').localeCompare(b['BR:Eqp.'] || ''),
      ...getColumnSelectProps('BR:Eqp.', 'BR Equipment'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Equipment Count',
      dataIndex: 'BR:Eqp. Cnt',
      key: 'BR:Eqp. Cnt',
      width: calculateColumnWidth('BR:Eqp. Cnt'),
      sorter: (a, b) => parseInt(a['BR:Eqp. Cnt'] || '0') - parseInt(b['BR:Eqp. Cnt'] || '0'),
      ...getColumnSearchProps('BR:Eqp. Cnt', 'BR Equipment Count'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Equipment',
      dataIndex: 'BC:Eqp.',
      key: 'BC:Eqp.',
      width: calculateColumnWidth('BC:Eqp.'),
      sorter: (a, b) => (a['BC:Eqp.'] || '').localeCompare(b['BC:Eqp.'] || ''),
      ...getColumnSelectProps('BC:Eqp.', 'BC Equipment'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Equipment Count',
      dataIndex: 'BC:Eqp. Cnt',
      key: 'BC:Eqp. Cnt',
      width: calculateColumnWidth('BC:Eqp. Cnt'),
      sorter: (a, b) => parseInt(a['BC:Eqp. Cnt'] || '0') - parseInt(b['BC:Eqp. Cnt'] || '0'),
      ...getColumnSearchProps('BC:Eqp. Cnt', 'BC Equipment Count'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Release Date',
      dataIndex: 'BC:Release Date',
      key: 'BC:Release Date',
      width: calculateColumnWidth('BC:Release Date'),
      sorter: (a, b) => (a['BC:Release Date'] || '').localeCompare(b['BC:Release Date'] || ''),
      ...getColumnSearchProps('BC:Release Date', 'BC Release Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Version',
      dataIndex: 'BC:Version',
      key: 'BC:Version',
      width: calculateColumnWidth('BC:Version'),
      sorter: (a, b) => parseInt(a['BC:Version'] || '0') - parseInt(b['BC:Version'] || '0'),
      ...getColumnSearchProps('BC:Version', 'BC Version'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Req. FEU',
      dataIndex: 'BR:Req. FEU',
      key: 'BR:Req. FEU',
      width: calculateColumnWidth('BR:Req. FEU'),
      sorter: (a, b) => parseFloat(a['BR:Req. FEU'] || '0') - parseFloat(b['BR:Req. FEU'] || '0'),
      ...getColumnSearchProps('BR:Req. FEU', 'BR Req. FEU'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Conf. FEU',
      dataIndex: 'BC:Conf. FEU',
      key: 'BC:Conf. FEU',
      width: calculateColumnWidth('BC:Conf. FEU'),
      sorter: (a, b) => parseFloat(a['BC:Conf. FEU'] || '0') - parseFloat(b['BC:Conf. FEU'] || '0'),
      ...getColumnSearchProps('BC:Conf. FEU', 'BC Conf. FEU'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC CY Cut-off Date',
      dataIndex: 'BC: CY Cut-off Date',
      key: 'BC: CY Cut-off Date',
      width: calculateColumnWidth('BC: CY Cut-off Date'),
      sorter: (a, b) => (a['BC: CY Cut-off Date'] || '').localeCompare(b['BC: CY Cut-off Date'] || ''),
      ...getColumnSearchProps('BC: CY Cut-off Date', 'BC CY Cut-off Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC CY Cut-off Time',
      dataIndex: 'BC: CY Cut-off Time',
      key: 'BC: CY Cut-off Time',
      width: calculateColumnWidth('BC: CY Cut-off Time'),
      sorter: (a, b) => (a['BC: CY Cut-off Time'] || '').localeCompare(b['BC: CY Cut-off Time'] || ''),
      ...getColumnSearchProps('BC: CY Cut-off Time', 'BC CY Cut-off Time'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC VGM Cut-off Date',
      dataIndex: 'BC: VGM Cut-off Date',
      key: 'BC: VGM Cut-off Date',
      width: calculateColumnWidth('BC: VGM Cut-off Date'),
      sorter: (a, b) => (a['BC: VGM Cut-off Date'] || '').localeCompare(b['BC: VGM Cut-off Date'] || ''),
      ...getColumnSearchProps('BC: VGM Cut-off Date', 'BC VGM Cut-off Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC VGM Cut-off Time',
      dataIndex: 'BC: VGM Cut-off Time',
      key: 'BC: VGM Cut-off Time',
      width: calculateColumnWidth('BC: VGM Cut-off Time'),
      sorter: (a, b) => (a['BC: VGM Cut-off Time'] || '').localeCompare(b['BC: VGM Cut-off Time'] || ''),
      ...getColumnSearchProps('BC: VGM Cut-off Time', 'BC VGM Cut-off Time'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC SI Cut-off Date',
      dataIndex: 'BC: SI Cut-off Date',
      key: 'BC: SI Cut-off Date',
      width: calculateColumnWidth('BC: SI Cut-off Date'),
      sorter: (a, b) => (a['BC: SI Cut-off Date'] || '').localeCompare(b['BC: SI Cut-off Date'] || ''),
      ...getColumnSearchProps('BC: SI Cut-off Date', 'BC SI Cut-off Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC SI Cut-off Time',
      dataIndex: 'BC: SI Cut-off Time',
      key: 'BC: SI Cut-off Time',
      width: calculateColumnWidth('BC: SI Cut-off Time'),
      sorter: (a, b) => (a['BC: SI Cut-off Time'] || '').localeCompare(b['BC: SI Cut-off Time'] || ''),
      ...getColumnSearchProps('BC: SI Cut-off Time', 'BC SI Cut-off Time'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC 1st ETD POL',
      dataIndex: 'BC:1st ETD POL',
      key: 'BC:1st ETD POL',
      width: calculateColumnWidth('BC:1st ETD POL'),
      sorter: (a, b) => (a['BC:1st ETD POL'] || '').localeCompare(b['BC:1st ETD POL'] || ''),
      ...getColumnSearchProps('BC:1st ETD POL', 'BC 1st ETD POL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC 1st ETA POD',
      dataIndex: 'BC:1st ETA POD',
      key: 'BC:1st ETA POD',
      width: calculateColumnWidth('BC:1st ETA POD'),
      sorter: (a, b) => (a['BC:1st ETA POD'] || '').localeCompare(b['BC:1st ETA POD'] || ''),
      ...getColumnSearchProps('BC:1st ETA POD', 'BC 1st ETA POD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC 1st Release Date',
      dataIndex: 'BC:1st Release Date',
      key: 'BC:1st Release Date',
      width: calculateColumnWidth('BC:1st Release Date'),
      sorter: (a, b) => (a['BC:1st Release Date'] || '').localeCompare(b['BC:1st Release Date'] || ''),
      ...getColumnSearchProps('BC:1st Release Date', 'BC 1st Release Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Released',
      dataIndex: 'BC:Released',
      key: 'BC:Released',
      width: calculateColumnWidth('BC:Released'),
      sorter: (a, b) => (a['BC:Released'] || '').localeCompare(b['BC:Released'] || ''),
      ...getColumnSelectProps('BC:Released', 'BC Released'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: text === 'Yes' ? '#005551' : '#c70504', fontWeight: '500' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'BR 2nd Vessel',
      dataIndex: 'BR:2nd Vessel',
      key: 'BR:2nd Vessel',
      width: calculateColumnWidth('BR:2nd Vessel'),
      sorter: (a, b) => (a['BR:2nd Vessel'] || '').localeCompare(b['BR:2nd Vessel'] || ''),
      ...getColumnSearchProps('BR:2nd Vessel', 'BR 2nd Vessel'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR 2nd Voyage #',
      dataIndex: 'BR:2nd Voyage #',
      key: 'BR:2nd Voyage #',
      width: calculateColumnWidth('BR:2nd Voyage #'),
      sorter: (a, b) => (a['BR:2nd Voyage #'] || '').localeCompare(b['BR:2nd Voyage #'] || ''),
      ...getColumnSearchProps('BR:2nd Voyage #', 'BR 2nd Voyage #'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Consignee',
      dataIndex: 'Consignee',
      key: 'Consignee',
      width: calculateColumnWidth('Consignee ##'),
      sorter: (a, b) => (a.Consignee || '').localeCompare(b.Consignee || ''),
      ...getColumnSelectProps('Consignee', 'Consignee'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'Region',
      dataIndex: 'Region',
      key: 'Region',
      width: calculateColumnWidth('Region ##'),
      sorter: (a, b) => (a.Region || '').localeCompare(b.Region || ''),
      ...getColumnSelectProps('Region', 'Region'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Booking Type',
      dataIndex: 'Bkg Type',
      key: 'Bkg Type',
      width: calculateColumnWidth('Bkg Type ###'),
      sorter: (a, b) => (a['Bkg Type'] || '').localeCompare(b['Bkg Type'] || ''),
      ...getColumnSelectProps('Bkg Type', 'Booking Type'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Shipper Booking Linked',
      dataIndex: 'Shipper Bkg Linked?',
      key: 'Shipper Bkg Linked?',
      width: calculateColumnWidth('Shipper Bkg Linked?'),
      sorter: (a, b) => (a['Shipper Bkg Linked?'] || '').localeCompare(b['Shipper Bkg Linked?'] || ''),
      ...getColumnSelectProps('Shipper Bkg Linked?', 'Shipper Booking Linked'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: text === 'Yes' ? '#005551' : '#c70504', fontWeight: '500' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'CRD',
      dataIndex: 'CRD',
      key: 'CRD',
      width: calculateColumnWidth('CRD ###'),
      sorter: (a, b) => (a.CRD || '').localeCompare(b.CRD || ''),
      ...getColumnSearchProps('CRD', 'CRD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    // {
    //   title: 'Date Between BR Creation ETD Req',
    //   dataIndex: 'Date between BR creattion / ETD req',
    //   key: 'Date between BR creattion / ETD req',
    //   width: calculateColumnWidth('Date between BR creattion / ETD req', 80, 250),
    //   sorter: (a, b) => (a['Date between BR creattion / ETD req'] || '').localeCompare(b['Date between BR creattion / ETD req'] || ''),
    //   ...getColumnSearchProps('Date between BR creattion / ETD req', 'Date Between BR Creation ETD Req'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'Check',
    //   dataIndex: 'Check',
    //   key: 'Check',
    //   width: calculateColumnWidth('Check'),
    //   sorter: (a, b) => parseInt(a.Check || '0') - parseInt(b.Check || '0'),
    //   ...getColumnSearchProps('Check', 'Check'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'X4',
    //   dataIndex: 'x4',
    //   key: 'x4',
    //   width: calculateColumnWidth('x4'),
    //   sorter: (a, b) => (a.x4 || '').localeCompare(b.x4 || ''),
    //   ...getColumnSearchProps('x4', 'X4'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'X5',
    //   dataIndex: 'x5',
    //   key: 'x5',
    //   width: calculateColumnWidth('x5'),
    //   sorter: (a, b) => (a.x5 || '').localeCompare(b.x5 || ''),
    //   ...getColumnSearchProps('x5', 'X5'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'X6',
    //   dataIndex: 'x6',
    //   key: 'x6',
    //   width: calculateColumnWidth('x6'),
    //   sorter: (a, b) => (a.x6 || '').localeCompare(b.x6 || ''),
    //   ...getColumnSearchProps('x6', 'X6'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'X7',
    //   dataIndex: 'x7',
    //   key: 'x7',
    //   width: calculateColumnWidth('x7'),
    //   sorter: (a, b) => (a.x7 || '').localeCompare(b.x7 || ''),
    //   ...getColumnSearchProps('x7', 'X7'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'X8',
    //   dataIndex: 'x8',
    //   key: 'x8',
    //   width: calculateColumnWidth('x8'),
    //   sorter: (a, b) => (a.x8 || '').localeCompare(b.x8 || ''),
    //   ...getColumnSearchProps('x8', 'X8'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
    // {
    //   title: 'X9',
    //   dataIndex: 'x9',
    //   key: 'x9',
    //   width: calculateColumnWidth('x9'),
    //   sorter: (a, b) => (a.x9 || '').localeCompare(b.x9 || ''),
    //   ...getColumnSearchProps('x9', 'X9'),
    //   render: (text: string) => (
    //     <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
    //   ),
    // },
  ], [calculateColumnWidth, getColumnSearchProps, getColumnSelectProps, getStatusColor]);

  // Memoized row selection configuration
  const rowSelection = useMemo(() => ({
    type: 'checkbox' as const,
    selectedRowKeys: selectedBookings,
    onSelect: (record: ShipperBooking, selected: boolean) => handleRowSelection(record.id),
    onSelectAll: (selected: boolean) => handleSelectAll(selected),
    columnWidth: 40,
    fixed: true as const,
  }), [selectedBookings, handleRowSelection, handleSelectAll]);

  // Memoized table props
  const tableProps = useMemo(() => {
    // Fallback to mock data if Redux data is empty
    const tableData = bookings.length > 0 ? bookings : shipperBookingsData;
    
    // console.log('Table props debug:', {
    //   bookingsCount: bookings.length,
    //   mockDataCount: shipperBookingsData.length,
    //   tableDataCount: tableData.length,
    //   firstBooking: tableData[0],
    //   firstBookingReqEtdWk: tableData[0]?.['req ETD wk'],
    //   columnsCount: columns.length,
    //   reqEtdWkColumn: columns.find(col => 'dataIndex' in col && col.dataIndex === 'req ETD wk')
    // });
    
    return {
      columns,
      dataSource: tableData,
      rowKey: 'id',
      pagination: false as const,
      loading,
      size: 'small' as const,
      scroll: { x: 2000, y: 650 },
      style: { backgroundColor: '#fff', marginTop: '0px' },
      rowSelection,
    };
  }, [columns, bookings, loading, rowSelection]);

  if (error) {
    return (
      <div style={{ padding: '24px' }}>
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          action={
            <Button size="small" onClick={handleRefresh}>
              Retry
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <Layout style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ padding: '16px 24px', backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Text style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              Shipper Bookings
            </Text>
            <Text style={{ fontSize: '14px', color: '#6b7280' }}>
              {totalItems.toLocaleString()} Total Items
            </Text>
            {/* {bookings.length > 0 && (
              <Text style={{ fontSize: '12px', color: '#10b981' }}>
                Debug: {bookings.length} bookings loaded, First req ETD wk: {bookings[0]['req ETD wk']}, First Destination region: {bookings[0]['Destination region']}
              </Text>
            )} */}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Input
              placeholder="Search for 'TMS #' (CB-xxxxx)"
              prefix={<SearchOutlined />}
              value={localSearchQuery}
              onChange={(e) => handleSearchInputChange(e.target.value)}
              style={{ width: 500 }}
              size="small"
            />
            <Tooltip title="Go to Carrier Bookings">
              <Button 
                icon={<MenuUnfoldOutlined />} 
                size="small" 
                onClick={() => {
                  dispatch(shareFilteredDataWithCarrierBookings());
                  navigate('/carrier-bookings');
                }} 
              />
            </Tooltip>
            {/* <Button icon={<SettingOutlined />} size="small">Settings</Button> */}
            <Button icon={<ReloadOutlined />} size="small" loading={loading} onClick={() => dispatch(fetchBookings())} />
          </div>
        </div>

        {/* Pills-style Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Select
            mode="multiple"
            value={getFilterValues('Trade')}
            onChange={(values) => handleMultiSelectFilterChange('Trade', values)}
            style={{ minWidth: 160 }}
            size="small"
            className="pills-filter"
            placeholder="Trade: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('Trade').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('Origin region')}
            onChange={(values) => handleMultiSelectFilterChange('Origin region', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Origin Region: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('Origin region').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('Destination region')}
            onChange={(values) => handleMultiSelectFilterChange('Destination region', values)}
            style={{ minWidth: 160 }}
            size="small"
            className="pills-filter"
            placeholder="Destination Region: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('Destination region').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('Origin country')}
            onChange={(values) => handleMultiSelectFilterChange('Origin country', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Origin Country: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('Origin country').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('district')}
            onChange={(values) => handleMultiSelectFilterChange('district', values)}
            style={{ minWidth: 120 }}
            size="small"
            className="pills-filter"
            placeholder="District: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('district').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('req ETD wk')}
            onChange={(values) => handleMultiSelectFilterChange('req ETD wk', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Req ETD Week: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('req ETD wk').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: '0 24px', flex: 1 }}>
        <Table {...tableProps} />

        {/* Pagination */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '16px',
          backgroundColor: '#fff',
          borderTop: '1px solid #f0f0f0'
        }}>
          <Text style={{ fontSize: '13px', color: '#666' }}>
            {totalItems.toLocaleString()} Total Records
          </Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
              showSizeChanger
              // showQuickJumper
              showTotal={(total, range) => 
                `${range[0]}-${range[1]} of ${total} items`
              }
              pageSizeOptions={['10', '20', '50', '100']}
              size="small"
            />
            
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Text style={{ fontSize: '13px', color: '#666' }}>
                {pageSize} / page
              </Text>
              <Text style={{ fontSize: '13px', color: '#666' }}>
                Go to
              </Text>
              <Input
                size="small"
                style={{ width: '60px' }}
                onPressEnter={(e) => {
                  const page = parseInt((e.target as HTMLInputElement).value);
                  if (page && page > 0 && page <= totalPages) {
                    handlePageChange(page);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
      
      <style>{`
        .pills-filter .ant-select-selector {
          border-radius: 20px !important;
          border: 2px solid #e1e5e9 !important;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%) !important;
          font-weight: 500 !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
        }
        
        .pills-filter:hover .ant-select-selector {
          border-color: #3b82f6 !important;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15) !important;
          transform: translateY(-1px) !important;
        }
        
        .pills-filter.ant-select-focused .ant-select-selector {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
        
        .pills-filter .ant-select-selection-item {
          color: #374151 !important;
          font-weight: 500 !important;
        }
        
        .pills-filter .ant-select-arrow {
          color: #6b7280 !important;
        }
      `}</style>
    </Layout>
  );
};

export default BookingOverview;