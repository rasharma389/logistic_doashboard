import React, { useEffect, useMemo, useCallback } from 'react';
import { Layout, Table, Input, Select, Button, Space, Checkbox, Tag, Progress, Tooltip, Pagination, Typography, Card, DatePicker, Divider } from 'antd';
import { SearchOutlined, DownOutlined, InfoCircleOutlined, DownloadOutlined, SettingOutlined, ReloadOutlined, FilterOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { 
  fetchBookings, 
  updateFiltersAndRefresh, 
  updateSearchAndRefresh,
  setSearchQuery,
  changePageAndRefresh,
  changePageSizeAndRefresh,
  toggleBookingSelection,
  selectAllBookings,
  clearBookingSelection
} from '../../store/slices/bookingOverviewSlice';
import type { ColumnsType } from 'antd/es/table';
import type { ShipperBooking } from '../../types/bookingOverview';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import type { BookingOverviewFilters } from '../../types/bookingOverview';

const { Option } = Select;
const { Text } = Typography;

const BookingOverview: React.FC = () => {
  const dispatch = useDispatch();
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
  const [columnFilters, setColumnFilters] = React.useState<Record<string, any>>(() => ({}));
  
  // Local search state for immediate UI feedback
  const [localSearchQuery, setLocalSearchQuery] = React.useState(() => searchQuery);
  
  // Debounce timer refs
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isSearchingRef = React.useRef(false);

  // Memoized unique values for dropdown filters
  const uniqueValues = useMemo(() => {
    const cache: Record<string, string[]> = {};
    const getUniqueValues = (key: string) => {
      if (!cache[key]) {
        const values = shipperBookingsData
          .map(item => item[key as keyof ShipperBooking])
          .filter(value => value && value.toString().trim() !== '')
          .map(value => value.toString());
        cache[key] = [...new Set(values)].sort();
      }
      return cache[key];
    };
    return getUniqueValues;
  }, []);

  // Memoized column width calculation
  const calculateColumnWidth = useCallback((headerText: string, minWidth = 80, maxWidth = 200) => {
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
    onFilter: (value: string, record: ShipperBooking) =>
      (record[dataIndex as keyof ShipperBooking] || '').toString().toLowerCase().includes(value.toLowerCase()),
  }), []);

  // Memoized select dropdown filter component
  const getColumnSelectProps = useCallback((dataIndex: string, title: string) => {
    const values = uniqueValues(dataIndex);
    return {
      filters: values.map(value => ({ text: value, value })),
      onFilter: (value: string, record: ShipperBooking) => 
        (record[dataIndex as keyof ShipperBooking] || '').toString() === value,
      filterMultiple: true,
    };
  }, [uniqueValues]);

  useEffect(() => {
    dispatch(fetchBookings() as any);
  }, [dispatch]);

  // Sync local search with Redux state
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Optimized debounced search effect
  useEffect(() => {
    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Only proceed if search query actually changed and we're not already searching
    if (localSearchQuery === searchQuery || isSearchingRef.current) {
      return;
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      if (localSearchQuery !== searchQuery && !isSearchingRef.current) {
        isSearchingRef.current = true;
        dispatch(setSearchQuery(localSearchQuery));
        dispatch(fetchBookings() as any).finally(() => {
          isSearchingRef.current = false;
        });
      }
    }, 250); // Reduced to 250ms for better responsiveness
    
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [localSearchQuery, searchQuery, dispatch]);

  const handleFilterChange = useCallback((key: string, value: string) => {
    if (!isSearchingRef.current) {
      isSearchingRef.current = true;
      dispatch(updateFiltersAndRefresh({ [key]: value }) as any).finally(() => {
        isSearchingRef.current = false;
      });
    }
  }, [dispatch]);

  const handleMultiSelectFilterChange = useCallback((key: string, values: string[]) => {
    if (!isSearchingRef.current) {
      isSearchingRef.current = true;
      // Convert array to comma-separated string for backend compatibility
      const filterValue = values.length === 0 ? 'All' : values.join(',');
      dispatch(updateFiltersAndRefresh({ [key]: filterValue }) as any).finally(() => {
        isSearchingRef.current = false;
      });
    }
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
    if (!isSearchingRef.current) {
      dispatch(changePageAndRefresh(page) as any);
    }
  }, [dispatch]);

  const handlePageSizeChange = useCallback((current: number, size: number) => {
    if (!isSearchingRef.current) {
      dispatch(changePageSizeAndRefresh(size) as any);
    }
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
        return '#52c41a';
      case 'Cancelled':
        return '#ff4d4f';
      default:
        return '#d9d9d9';
    }
  }, []);

  const columns: ColumnsType<ShipperBooking> = useMemo(() => [
    {
      title: 'Trade',
      dataIndex: 'trade',
      key: 'trade',
      width: calculateColumnWidth('trade'),
      sorter: (a, b) => (a.trade || '').localeCompare(b.trade || ''),
      ...getColumnSelectProps('trade', 'Trade'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Origin Region',
      dataIndex: 'originRegion',
      key: 'originRegion',
      width: calculateColumnWidth('Origin Region'),
      sorter: (a, b) => (a.originRegion || '').localeCompare(b.originRegion || ''),
      ...getColumnSelectProps('originRegion', 'Origin Region'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Destination Region',
      dataIndex: 'destinationRegion',
      key: 'destinationRegion',
      width: calculateColumnWidth('Destination Region'),
      sorter: (a, b) => (a.destinationRegion || '').localeCompare(b.destinationRegion || ''),
      ...getColumnSelectProps('destinationRegion', 'Destination Region'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Origin Country',
      dataIndex: 'originCountry',
      key: 'originCountry',
      width: calculateColumnWidth('Origin Country'),
      sorter: (a, b) => (a.originCountry || '').localeCompare(b.originCountry || ''),
      ...getColumnSelectProps('originCountry', 'Origin Country'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
      width: calculateColumnWidth('District'),
      sorter: (a, b) => (a.district || '').localeCompare(b.district || ''),
      ...getColumnSelectProps('district', 'District'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Req ETD Week',
      dataIndex: 'req ETD wk ',
      key: 'req ETD wk ',
      width: calculateColumnWidth('Req ETD Week'),
      sorter: (a, b) => parseInt(a['req ETD wk '] || '0') - parseInt(b['req ETD wk '] || '0'),
      ...getColumnSelectProps('req ETD wk ', 'Req ETD Week'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#059669', fontWeight: '500' }}>
          Week {text}
        </Text>
      ),
    },
    {
      title: 'Customer Code',
      dataIndex: 'custCode',
      key: 'custCode',
      width: calculateColumnWidth('Customer Code'),
      sorter: (a, b) => (a.custCode || '').localeCompare(b.custCode || ''),
      ...getColumnSelectProps('custCode', 'Customer Code'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'Carrier Standard',
      dataIndex: 'carrierStd',
      key: 'carrierStd',
      width: calculateColumnWidth('Carrier Standard'),
      sorter: (a, b) => (a.carrierStd || '').localeCompare(b.carrierStd || ''),
      ...getColumnSelectProps('carrierStd', 'Carrier Standard'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Contract Number',
      dataIndex: 'contractNumber',
      key: 'contractNumber',
      width: calculateColumnWidth('Contract Number'),
      sorter: (a, b) => (a.contractNumber || '').localeCompare(b.contractNumber || ''),
      ...getColumnSearchProps('contractNumber', 'Contract Number'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR 1st Vessel',
      dataIndex: 'br1stVessel',
      key: 'br1stVessel',
      width: calculateColumnWidth('BR 1st Vessel'),
      sorter: (a, b) => (a.br1stVessel || '').localeCompare(b.br1stVessel || ''),
      ...getColumnSearchProps('br1stVessel', 'BR 1st Vessel'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR 1st Voyage #',
      dataIndex: 'BR:1st Voyage #',
      key: 'BR:1st Voyage #',
      width: calculateColumnWidth('BR 1st Voyage #'),
      sorter: (a, b) => (a['BR:1st Voyage #'] || '').localeCompare(b['BR:1st Voyage #'] || ''),
      ...getColumnSearchProps('BR:1st Voyage #', 'BR 1st Voyage #'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Booking Party #',
      dataIndex: 'Bkg Party # ',
      key: 'Bkg Party # ',
      width: calculateColumnWidth('Booking Party #'),
      sorter: (a, b) => (a['Bkg Party # '] || '').localeCompare(b['Bkg Party # '] || ''),
      ...getColumnSearchProps('Bkg Party # ', 'Booking Party #'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'TMS Number',
      dataIndex: 'tmsNumber',
      key: 'tmsNumber',
      width: calculateColumnWidth('TMS Number'),
      sorter: (a, b) => (a.tmsNumber || '').localeCompare(b.tmsNumber || ''),
      ...getColumnSearchProps('tmsNumber', 'TMS Number'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>
          CB-{text || ''}
        </Text>
      ),
    },
    {
      title: 'Booking Status',
      dataIndex: 'bookingStatus',
      key: 'bookingStatus',
      width: calculateColumnWidth('Booking Status'),
      sorter: (a, b) => (a.bookingStatus || '').localeCompare(b.bookingStatus || ''),
      ...getColumnSelectProps('bookingStatus', 'Booking Status'),
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
        <Text style={{ fontSize: '13px', color: text === 'Y' ? '#ff4d4f' : '#52c41a', fontWeight: '500' }}>
          {text === 'Y' ? 'Yes' : 'No'}
        </Text>
      ),
    },
    {
      title: 'BR PRE',
      dataIndex: 'BR:PRE',
      key: 'BR:PRE',
      width: calculateColumnWidth('BR PRE'),
      sorter: (a, b) => (a['BR:PRE'] || '').localeCompare(b['BR:PRE'] || ''),
      ...getColumnSearchProps('BR:PRE', 'BR PRE'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'BR POL',
      dataIndex: 'brPol',
      key: 'brPol',
      width: calculateColumnWidth('BR POL'),
      sorter: (a, b) => (a.brPol || '').localeCompare(b.brPol || ''),
      ...getColumnSearchProps('brPol', 'BR POL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'BR POD',
      dataIndex: 'brPod',
      key: 'brPod',
      width: calculateColumnWidth('BR POD'),
      sorter: (a, b) => (a.brPod || '').localeCompare(b.brPod || ''),
      ...getColumnSearchProps('brPod', 'BR POD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'BR DEL',
      dataIndex: 'brDel',
      key: 'brDel',
      width: calculateColumnWidth('BR DEL'),
      sorter: (a, b) => (a.brDel || '').localeCompare(b.brDel || ''),
      ...getColumnSearchProps('brDel', 'BR DEL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'Move Type',
      dataIndex: 'moveType',
      key: 'moveType',
      width: calculateColumnWidth('Move Type'),
      sorter: (a, b) => (a.moveType || '').localeCompare(b.moveType || ''),
      ...getColumnSelectProps('moveType', 'Move Type'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Req. ETD',
      dataIndex: 'BR:Req. ETD',
      key: 'BR:Req. ETD',
      width: calculateColumnWidth('BR Req. ETD'),
      sorter: (a, b) => (a['BR:Req. ETD'] || '').localeCompare(b['BR:Req. ETD'] || ''),
      ...getColumnSearchProps('BR:Req. ETD', 'BR Req. ETD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC ETD POL',
      dataIndex: 'bcEtdPol',
      key: 'bcEtdPol',
      width: calculateColumnWidth('BC ETD POL'),
      sorter: (a, b) => (a.bcEtdPol || '').localeCompare(b.bcEtdPol || ''),
      ...getColumnSearchProps('bcEtdPol', 'BC ETD POL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Equipment',
      dataIndex: 'BR:Eqp.',
      key: 'BR:Eqp.',
      width: calculateColumnWidth('BR Equipment'),
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
      width: calculateColumnWidth('BR Equipment Count'),
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
      width: calculateColumnWidth('BC Equipment'),
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
      width: calculateColumnWidth('BC Equipment Count'),
      sorter: (a, b) => parseInt(a['BC:Eqp. Cnt'] || '0') - parseInt(b['BC:Eqp. Cnt'] || '0'),
      ...getColumnSearchProps('BC:Eqp. Cnt', 'BC Equipment Count'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Release Date',
      dataIndex: 'bcReleaseDate',
      key: 'bcReleaseDate',
      width: calculateColumnWidth('BC Release Date'),
      sorter: (a, b) => (a.bcReleaseDate || '').localeCompare(b.bcReleaseDate || ''),
      ...getColumnSearchProps('bcReleaseDate', 'BC Release Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Version',
      dataIndex: 'bcVersion',
      key: 'bcVersion',
      width: calculateColumnWidth('BC Version'),
      sorter: (a, b) => parseInt(a.bcVersion || '0') - parseInt(b.bcVersion || '0'),
      ...getColumnSearchProps('bcVersion', 'BC Version'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR Req. FEU',
      dataIndex: 'BR:Req. FEU',
      key: 'BR:Req. FEU',
      width: calculateColumnWidth('BR Req. FEU'),
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
      width: calculateColumnWidth('BC Conf. FEU'),
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
      width: calculateColumnWidth('BC CY Cut-off Date'),
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
      width: calculateColumnWidth('BC CY Cut-off Time'),
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
      width: calculateColumnWidth('BC VGM Cut-off Date'),
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
      width: calculateColumnWidth('BC VGM Cut-off Time'),
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
      width: calculateColumnWidth('BC SI Cut-off Date'),
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
      width: calculateColumnWidth('BC SI Cut-off Time'),
      sorter: (a, b) => (a['BC: SI Cut-off Time'] || '').localeCompare(b['BC: SI Cut-off Time'] || ''),
      ...getColumnSearchProps('BC: SI Cut-off Time', 'BC SI Cut-off Time'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC 1st ETD POL',
      dataIndex: 'bc1stEtdPol',
      key: 'bc1stEtdPol',
      width: calculateColumnWidth('BC 1st ETD POL'),
      sorter: (a, b) => (a.bc1stEtdPol || '').localeCompare(b.bc1stEtdPol || ''),
      ...getColumnSearchProps('bc1stEtdPol', 'BC 1st ETD POL'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC 1st ETA POD',
      dataIndex: 'bc1stEtaPod',
      key: 'bc1stEtaPod',
      width: calculateColumnWidth('BC 1st ETA POD'),
      sorter: (a, b) => (a.bc1stEtaPod || '').localeCompare(b.bc1stEtaPod || ''),
      ...getColumnSearchProps('bc1stEtaPod', 'BC 1st ETA POD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC 1st Release Date',
      dataIndex: 'bc1stReleaseDate',
      key: 'bc1stReleaseDate',
      width: calculateColumnWidth('BC 1st Release Date'),
      sorter: (a, b) => (a.bc1stReleaseDate || '').localeCompare(b.bc1stReleaseDate || ''),
      ...getColumnSearchProps('bc1stReleaseDate', 'BC 1st Release Date'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BC Released',
      dataIndex: 'BC:Released',
      key: 'BC:Released',
      width: calculateColumnWidth('BC Released'),
      sorter: (a, b) => (a['BC:Released'] || '').localeCompare(b['BC:Released'] || ''),
      ...getColumnSelectProps('BC:Released', 'BC Released'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: text === 'Yes' ? '#52c41a' : '#ff4d4f', fontWeight: '500' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'BR 2nd Vessel',
      dataIndex: 'br2ndVessel',
      key: 'br2ndVessel',
      width: calculateColumnWidth('BR 2nd Vessel'),
      sorter: (a, b) => (a.br2ndVessel || '').localeCompare(b.br2ndVessel || ''),
      ...getColumnSearchProps('br2ndVessel', 'BR 2nd Vessel'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'BR 2nd Voyage #',
      dataIndex: 'BR:2nd Voyage #',
      key: 'BR:2nd Voyage #',
      width: calculateColumnWidth('BR 2nd Voyage #'),
      sorter: (a, b) => (a['BR:2nd Voyage #'] || '').localeCompare(b['BR:2nd Voyage #'] || ''),
      ...getColumnSearchProps('BR:2nd Voyage #', 'BR 2nd Voyage #'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Consignee',
      dataIndex: 'consignee',
      key: 'consignee',
      width: calculateColumnWidth('Consignee'),
      sorter: (a, b) => (a.consignee || '').localeCompare(b.consignee || ''),
      ...getColumnSelectProps('consignee', 'Consignee'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#1890ff', fontWeight: '500' }}>{text}</Text>
      ),
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: calculateColumnWidth('Region'),
      sorter: (a, b) => (a.region || '').localeCompare(b.region || ''),
      ...getColumnSelectProps('region', 'Region'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Booking Type',
      dataIndex: 'bkgType',
      key: 'bkgType',
      width: calculateColumnWidth('Booking Type'),
      sorter: (a, b) => (a.bkgType || '').localeCompare(b.bkgType || ''),
      ...getColumnSelectProps('bkgType', 'Booking Type'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Shipper Booking Linked',
      dataIndex: 'shipperBkgLinked',
      key: 'shipperBkgLinked',
      width: calculateColumnWidth('Shipper Booking Linked'),
      sorter: (a, b) => (a.shipperBkgLinked || '').localeCompare(b.shipperBkgLinked || ''),
      ...getColumnSelectProps('shipperBkgLinked', 'Shipper Booking Linked'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: text === 'Yes' ? '#52c41a' : '#ff4d4f', fontWeight: '500' }}>
          {text}
        </Text>
      ),
    },
    {
      title: 'CRD',
      dataIndex: 'crd',
      key: 'crd',
      width: calculateColumnWidth('CRD'),
      sorter: (a, b) => (a.crd || '').localeCompare(b.crd || ''),
      ...getColumnSearchProps('crd', 'CRD'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Date Between BR Creation ETD Req',
      dataIndex: 'dateBetweenBrCreationEtdReq',
      key: 'dateBetweenBrCreationEtdReq',
      width: calculateColumnWidth('Date Between BR Creation ETD Req', 80, 250),
      sorter: (a, b) => (a.dateBetweenBrCreationEtdReq || '').localeCompare(b.dateBetweenBrCreationEtdReq || ''),
      ...getColumnSearchProps('dateBetweenBrCreationEtdReq', 'Date Between BR Creation ETD Req'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'Check',
      dataIndex: 'check',
      key: 'check',
      width: calculateColumnWidth('Check'),
      sorter: (a, b) => parseInt(a.check || '0') - parseInt(b.check || '0'),
      ...getColumnSearchProps('check', 'Check'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'X4',
      dataIndex: 'x4',
      key: 'x4',
      width: calculateColumnWidth('X4'),
      sorter: (a, b) => (a.x4 || '').localeCompare(b.x4 || ''),
      ...getColumnSearchProps('x4', 'X4'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'X5',
      dataIndex: 'x5',
      key: 'x5',
      width: calculateColumnWidth('X5'),
      sorter: (a, b) => (a.x5 || '').localeCompare(b.x5 || ''),
      ...getColumnSearchProps('x5', 'X5'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'X6',
      dataIndex: 'x6',
      key: 'x6',
      width: calculateColumnWidth('X6'),
      sorter: (a, b) => (a.x6 || '').localeCompare(b.x6 || ''),
      ...getColumnSearchProps('x6', 'X6'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'X7',
      dataIndex: 'x7',
      key: 'x7',
      width: calculateColumnWidth('X7'),
      sorter: (a, b) => (a.x7 || '').localeCompare(b.x7 || ''),
      ...getColumnSearchProps('x7', 'X7'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'X8',
      dataIndex: 'x8',
      key: 'x8',
      width: calculateColumnWidth('X8'),
      sorter: (a, b) => (a.x8 || '').localeCompare(b.x8 || ''),
      ...getColumnSearchProps('x8', 'X8'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
    {
      title: 'X9',
      dataIndex: 'x9',
      key: 'x9',
      width: calculateColumnWidth('X9'),
      sorter: (a, b) => (a.x9 || '').localeCompare(b.x9 || ''),
      ...getColumnSearchProps('x9', 'X9'),
      render: (text: string) => (
        <Text style={{ fontSize: '13px', color: '#333' }}>{text}</Text>
      ),
    },
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
  const tableProps = useMemo(() => ({
    columns,
    dataSource: bookings,
    rowKey: 'id',
    pagination: false,
    loading,
    size: 'small' as const,
    scroll: { x: 'max-content', y: 600 },
    style: { backgroundColor: '#fff', marginTop: '16px' },
    rowSelection,
  }), [columns, bookings, loading, rowSelection]);

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
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Input
              placeholder="Search for 'TMS #' (CB-xxxxx)"
              prefix={<SearchOutlined />}
              value={localSearchQuery}
              onChange={(e) => handleSearchInputChange(e.target.value)}
              style={{ width: 400 }}
              size="small"
            />
            <Button icon={<MenuUnfoldOutlined />} size="small"></Button>
            <Button icon={<SettingOutlined />} size="small">Settings</Button>
            <Button icon={<ReloadOutlined />} size="small" loading={loading} onClick={() => dispatch(fetchBookings() as any)} />
          </div>
        </div>

        {/* Pills-style Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Select
            mode="multiple"
            value={getFilterValues('trade')}
            onChange={(values) => handleMultiSelectFilterChange('trade', values)}
            style={{ minWidth: 160 }}
            size="small"
            className="pills-filter"
            placeholder="Trade: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('trade').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('originRegion')}
            onChange={(values) => handleMultiSelectFilterChange('originRegion', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Origin Region: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('originRegion').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('destinationRegion')}
            onChange={(values) => handleMultiSelectFilterChange('destinationRegion', values)}
            style={{ minWidth: 160 }}
            size="small"
            className="pills-filter"
            placeholder="Destination Region: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('destinationRegion').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('originCountry')}
            onChange={(values) => handleMultiSelectFilterChange('originCountry', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Origin Country: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('originCountry').map(value => (
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
            value={getFilterValues('req ETD wk ')}
            onChange={(values) => handleMultiSelectFilterChange('req ETD wk ', values)}
            style={{ minWidth: 120 }}
            size="small"
            className="pills-filter"
            placeholder="Req ETD Wk: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('req ETD wk ').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>Week {value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          {/* <Select
            mode="multiple"
            value={getFilterValues('custCode')}
            onChange={(values) => handleMultiSelectFilterChange('custCode', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Customer Code: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('custCode').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('carrierStd')}
            onChange={(values) => handleMultiSelectFilterChange('carrierStd', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Carrier: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('carrierStd').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            value={getFilterValues('Booking Status')}
            onChange={(values) => handleMultiSelectFilterChange('Booking Status', values)}
            style={{ minWidth: 140 }}
            size="small"
            className="pills-filter"
            placeholder="Status: All"
            maxTagCount="responsive"
            allowClear
          >
            {uniqueValues('Booking Status').map(value => (
              <Option key={value} value={value}>
                <Space>
                  <span>{value}</span>
                </Space>
              </Option>
            ))}
          </Select> */}
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
          padding: '16px 0',
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
              showQuickJumper
              showTotal={(total, range) => 
                `${range[0]}-${range[1]} of ${total} items`
              }
              pageSizeOptions={['10', '20', '50', '100']}
              size="small"
            />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            </div>
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