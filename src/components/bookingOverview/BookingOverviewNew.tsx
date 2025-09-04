import React, { useState, useMemo } from 'react';
import { Table, Input, Select, Space, Card, Typography, Row, Col, Tooltip, Tabs, App, Button, Tag } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import { SearchOutlined, FilterTwoTone, DownloadOutlined, CloseOutlined } from '@ant-design/icons';
import { BsFiletypeCsv } from "react-icons/bs";
import { shipperBookingsData } from '../../data/bookingOverviewData';
import { FilterOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
import { mapShipperBookingToCarrierBooking } from '../../utils/dataMapping';
import ViewsTab from './ViewsTab';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { setNewFilters, clearNewFilters, setColumnFilter, clearColumnFilters, setNewPageSize, setSelectedRows, toggleRowSelection, clearSelectedRows } from '../../store/slices/bookingOverviewSlice';
const { Search } = Input;
const { Option } = Select;

const BookingOverviewNew: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    
    // Get filter states, page size, selected rows, and custom views from Redux
    const { newFilters, columnFilters, newPageSize, selectedRows, customViews, activeViewId } = useSelector((state: RootState) => state.bookingOverview);
    const {
        tradeFilter,
        originRegionFilter,
        destinationRegionFilter,
        originCountryFilter,
        districtFilter,
        reqEtdWeekFilter,
        carrierFilter,
        bookingStatusFilter,
        tmsSearchQuery
    } = newFilters;

    // Setter functions that dispatch to Redux
    const setTradeFilter = (value: string[]) => dispatch(setNewFilters({ tradeFilter: value }));
    const setOriginRegionFilter = (value: string[]) => dispatch(setNewFilters({ originRegionFilter: value }));
    const setDestinationRegionFilter = (value: string[]) => dispatch(setNewFilters({ destinationRegionFilter: value }));
    const setOriginCountryFilter = (value: string[]) => dispatch(setNewFilters({ originCountryFilter: value }));
    const setDistrictFilter = (value: string[]) => dispatch(setNewFilters({ districtFilter: value }));
    const setReqEtdWeekFilter = (value: string[]) => dispatch(setNewFilters({ reqEtdWeekFilter: value }));
    const setCarrierFilter = (value: string[]) => dispatch(setNewFilters({ carrierFilter: value }));
    const setBookingStatusFilter = (value: string[]) => dispatch(setNewFilters({ bookingStatusFilter: value }));
    const setTmsSearchQuery = (value: string) => dispatch(setNewFilters({ tmsSearchQuery: value }));

    // Toggle for showing only selected rows
    const [showOnlySelected, setShowOnlySelected] = useState(false);

    // Get unique values for filter options
    const filterOptions = useMemo(() => {
        const trades = [...new Set(shipperBookingsData.map(item => item['Trade']).filter(Boolean))];
        const originRegions = [...new Set(shipperBookingsData.map(item => item['Origin region']).filter(Boolean))];
        const destinationRegions = [...new Set(shipperBookingsData.map(item => item['Destination region']).filter(Boolean))];
        const originCountries = [...new Set(shipperBookingsData.map(item => item['Origin country']).filter(Boolean))];
        const districts = [...new Set(shipperBookingsData.map(item => item['district']).filter(Boolean))];
        const reqEtdWeeks = [...new Set(shipperBookingsData.map(item => item['req ETD wk']).filter(Boolean))];
        const carriers = [...new Set(shipperBookingsData.map(item => item['Carrier (Std)']).filter(Boolean))];
        const bookingStatuses = [...new Set(shipperBookingsData.map(item => item['Booking Status']).filter(Boolean))];

        return {
            trades: trades.sort(),
            originRegions: originRegions.sort(),
            destinationRegions: destinationRegions.sort(),
            originCountries: originCountries.sort(),
            districts: districts.sort(),
            reqEtdWeeks: reqEtdWeeks.sort(),
            carriers: carriers.sort(),
            bookingStatuses: bookingStatuses.sort()
        };
    }, [shipperBookingsData]);

    // Filter data based on all filters
    const filteredData = useMemo(() => {
        return shipperBookingsData.filter(item => {
            const matchesTrade = tradeFilter.length === 0 || tradeFilter.includes(item['Trade']);
            const matchesOriginRegion = originRegionFilter.length === 0 || originRegionFilter.includes(item['Origin region']);
            const matchesDestinationRegion = destinationRegionFilter.length === 0 || destinationRegionFilter.includes(item['Destination region']);
            const matchesOriginCountry = originCountryFilter.length === 0 || originCountryFilter.includes(item['Origin country']);
            const matchesDistrict = districtFilter.length === 0 || districtFilter.includes(item['district']);
            const matchesReqEtdWeek = reqEtdWeekFilter.length === 0 || reqEtdWeekFilter.includes(item['req ETD wk']);
            const matchesCarrier = carrierFilter.length === 0 || carrierFilter.includes(item['Carrier (Std)']);
            const matchesBookingStatus = bookingStatusFilter.length === 0 || bookingStatusFilter.includes(item['Booking Status']);
            const matchesTmsSearch = !tmsSearchQuery ||
                item['TMS #']?.toLowerCase().includes(tmsSearchQuery.toLowerCase()) ||
                item.id?.toLowerCase().includes(tmsSearchQuery.toLowerCase());

            // Check column filters
            const matchesColumnFilters = Object.entries(columnFilters).every(([columnKey, filterValues]) => {
                if (filterValues.length === 0) return true;
                const itemValue = String((item as any)[columnKey] || '');
                return filterValues.includes(itemValue);
            });

            return matchesTrade && matchesOriginRegion && matchesDestinationRegion &&
                matchesOriginCountry && matchesDistrict && matchesReqEtdWeek && 
                matchesCarrier && matchesBookingStatus && matchesTmsSearch && matchesColumnFilters;
        });
    }, [tradeFilter, originRegionFilter, destinationRegionFilter, originCountryFilter, districtFilter, reqEtdWeekFilter, carrierFilter, bookingStatusFilter, tmsSearchQuery, columnFilters]);

    // Clear all filters
    const clearAllFilters = () => {
        dispatch(clearNewFilters());
    };

    // Remove individual filter functions
    const removeTradeFilter = (value: string) => {
        dispatch(setNewFilters({ tradeFilter: tradeFilter.filter(item => item !== value) }));
    };

    const removeOriginRegionFilter = (value: string) => {
        dispatch(setNewFilters({ originRegionFilter: originRegionFilter.filter(item => item !== value) }));
    };

    const removeDestinationRegionFilter = (value: string) => {
        dispatch(setNewFilters({ destinationRegionFilter: destinationRegionFilter.filter(item => item !== value) }));
    };

    const removeOriginCountryFilter = (value: string) => {
        dispatch(setNewFilters({ originCountryFilter: originCountryFilter.filter(item => item !== value) }));
    };

    const removeDistrictFilter = (value: string) => {
        dispatch(setNewFilters({ districtFilter: districtFilter.filter(item => item !== value) }));
    };

    const removeReqEtdWeekFilter = (value: string) => {
        dispatch(setNewFilters({ reqEtdWeekFilter: reqEtdWeekFilter.filter(item => item !== value) }));
    };

    const removeCarrierFilter = (value: string) => {
        dispatch(setNewFilters({ carrierFilter: carrierFilter.filter(item => item !== value) }));
    };

    const removeBookingStatusFilter = (value: string) => {
        dispatch(setNewFilters({ bookingStatusFilter: bookingStatusFilter.filter(item => item !== value) }));
    };

    const removeTmsSearchQuery = () => {
        dispatch(setNewFilters({ tmsSearchQuery: '' }));
    };

    const removeColumnFilter = (columnKey: string, value: string) => {
        const currentValues = columnFilters[columnKey] || [];
        const newValues = currentValues.filter(item => item !== value);
        if (newValues.length === 0) {
            dispatch(setColumnFilter({ columnKey, values: [] }));
        } else {
            dispatch(setColumnFilter({ columnKey, values: newValues }));
        }
    };

    // CSV Export function
    const exportToCSV = () => {
        // Get the data to export (either filtered data or selected rows)
        const dataToExport = showOnlySelected && selectedRows.length > 0 
            ? filteredData.filter(item => selectedRows.includes(item.id))
            : filteredData;

        if (dataToExport.length === 0) {
            return;
        }

        // Get active view columns if available
        const activeView = activeViewId ? customViews.find(view => view.id === activeViewId) : null;
        const columnKeys = activeView && Array.isArray(activeView.columns) 
            ? activeView.columns 
            : Object.keys(dataToExport[0]);

        // Create CSV header
        const headers = columnKeys.map(key => `"${key}"`).join(',');
        
        // Create CSV rows
        const csvRows = dataToExport.map(item => {
            return columnKeys.map(key => {
                const value = (item as any)[key];
                // Handle values that contain commas, quotes, or newlines
                if (value === null || value === undefined) {
                    return '""';
                }
                const stringValue = String(value);
                if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
                    return `"${stringValue.replace(/"/g, '""')}"`;
                }
                return `"${stringValue}"`;
            }).join(',');
        });

        // Combine header and rows
        const csvContent = [headers, ...csvRows].join('\n');
        
        // Create and download the file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `booking-overview-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Selection functions
    const handleRowSelection = (selectedRowKeys: React.Key[], selectedRows: any[]) => {
        dispatch(setSelectedRows(selectedRowKeys.map(key => String(key))));
    };

    const handleSelectAll = () => {
        if (selectedRows.length === filteredData.length) {
            dispatch(clearSelectedRows());
        } else {
            dispatch(setSelectedRows(filteredData.map(item => item.id)));
        }
    };

    const handleClearSelection = () => {
        dispatch(clearSelectedRows());
    };

    // Generate table columns dynamically from the data
    const columns = useMemo(() => {
        if (shipperBookingsData.length === 0) return [];

        const firstItem = shipperBookingsData[0];
        const allColumnKeys = Object.keys(firstItem);
        
        // Use active view columns if available, otherwise use all columns
        const activeView = activeViewId ? customViews.find(view => view.id === activeViewId) : null;
        const columnKeys = activeView && Array.isArray(activeView.columns) 
            ? activeView.columns 
            : allColumnKeys;

        return columnKeys.map(key => {
            // Get unique values for this column for filter options
            const uniqueValues = [...new Set(shipperBookingsData.map(item => (item as any)[key]).filter(Boolean))].sort();
            
            // Create filter options
            const filterOptions = uniqueValues.map(value => ({
                text: String(value),
                value: String(value)
            }));

            return {
                title: key,
                dataIndex: key,
                key: key,
                sorter: (a: any, b: any) => {
                    const aVal = a[key];
                    const bVal = b[key];

                    if (typeof aVal === 'string' && typeof bVal === 'string') {
                        return aVal.localeCompare(bVal);
                    }
                    if (typeof aVal === 'number' && typeof bVal === 'number') {
                        return aVal - bVal;
                    }
                    return 0;
                },
                sortDirections: ['ascend', 'descend'] as SortOrder[],
                filters: filterOptions.length > 0 ? filterOptions : undefined,
                filteredValue: columnFilters[key] || null,
                onFilter: (value: any, record: any) => record[key] === value,
                filterSearch: true, // Enable search within filter dropdown
                render: (text: any, record: any) => {
                    // Special rendering for certain fields
                    if (key === 'Exception?' && text === 'Y') {
                        return <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{text}</span>;
                    }
                    if (key === 'Exception?' && text === 'N') {
                        return <span style={{ color: '#10b981' }}>{text}</span>;
                    }
                    if (key === 'TMS #') {
                        return <span style={{ color: '#0ea5e9', fontWeight: '500' }}>{text}</span>;
                    }
                    if (key === 'id') {
                        return <span style={{ color: '#059669', fontWeight: '500' }}>{text}</span>;
                    }
                    if (key === 'req ETD wk') {
                        return <span style={{ color: '#7c3aed', fontWeight: '500' }}>{text}</span>;
                    }
                    if (key === 'Booking Status') {
                        const getStatusColor = (status: string) => {
                            switch (status?.toLowerCase()) {
                                case 'confirmed':
                                    return { backgroundColor: '#10b981', color: 'white' };
                                case 'pending':
                                    return { backgroundColor: '#fbbf24', color: 'black' };
                                case 'cancelled by requestor':
                                case 'cancelled by carrier':
                                case 'canceled by requestor':
                                case 'canceled by carrier':
                                    return { backgroundColor: '#a78bfa', color: 'white' };
                                case 'closed':
                                    return { backgroundColor: '#3b82f6', color: 'white' };
                                default:
                                    return { backgroundColor: '#6b7280', color: 'white' };
                            }
                        };
                        
                        const statusStyle = getStatusColor(text);
                        return (
                            <span
                                style={{
                                    ...statusStyle,
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    fontSize: '11px',
                                    fontWeight: '500',
                                    display: 'inline-block',
                                    minWidth: '60px',
                                    textAlign: 'center'
                                }}
                            >
                                {text}
                            </span>
                        );
                    }
                    return text;
                },
                ellipsis: true,
                width: key === 'TMS #' || key === 'id' ? 120 :
                    key === 'Exception?' ? 80 :
                        key === 'Trade Lane' ? 150 :
                            key === 'Origin Region' || key === 'Destination Region' ? 140 :
                                key === 'Origin Country' || key === 'District' ? 120 :
                                (key.includes('Vessel') || key.includes('Voyage') ? 130 :
                                key.includes('Contract') || key.includes('Carrier') ? 120 : 110)
            };
        });
    }, [shipperBookingsData, customViews, activeViewId, columnFilters]);

         return (
         <div style={{ padding: '16px', height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
            {/* Main Card with Tabs */}
            <Card
                title="Carrier Bookings"
                style={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                extra={
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginRight: 10 }}>
                        <Tooltip title="Splitview">
                            <MenuOutlined 
                                style={{ color: '#0ea5e9', fontSize: 16, cursor: 'pointer' }} 
                                onClick={() => {
                                    // Share the current filtered data with carrier bookings
                                    const mappedCarrierBookings = mapShipperBookingToCarrierBooking(filteredData);
                                    dispatch({ type: 'bookings/setFilteredBookingsFromOverview', payload: mappedCarrierBookings });
                                    navigate('/booking-overview/carrier-bookings');
                                }}
                            />
                        </Tooltip>
                        {(tradeFilter.length > 0 || originRegionFilter.length > 0 || destinationRegionFilter.length > 0 || 
                         originCountryFilter.length > 0 || districtFilter.length > 0 || reqEtdWeekFilter.length > 0 || 
                         carrierFilter.length > 0 || bookingStatusFilter.length > 0 || tmsSearchQuery || 
                         Object.keys(columnFilters).length > 0) && (
                            <Tooltip title="Clear All Filters">
                                <FilterOutlined 
                                    style={{ color: '#0ea5e9', fontSize: 16, cursor: 'pointer' }} 
                                    onClick={clearAllFilters}
                                />
                            </Tooltip>
                        )}
                        <Tooltip title="Export to CSV">
                                <BsFiletypeCsv 
                                    style={{ color: '#0ea5e9', fontSize: 16, cursor: 'pointer' }} 
                                    onClick={exportToCSV}
                                />
                                {/* <DownloadOutlined style={{ color: '#0ea5e9', fontSize: 16, cursor: 'pointer' }} /> */}
                            </Tooltip>
                        {/* <Button
                            type="outlined"
                            icon={<DownloadOutlined />}
                            onClick={exportToCSV}
                            size="small"
                            style={{ borderRadius: '6px' }}
                        >
                            <BsFiletypeCsv />
                        </Button> */}
                    </div>
                 }
             >

                {/* Views and Data Table Tabs */}
                <Tabs
                    defaultActiveKey="overview"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                    items={[
                        {
                            key: 'overview',
                            label: 'Overview',
                            children: (
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                    {/* Filter Dropdowns */}
                                    <Row gutter={[16, 16]} style={{ marginBottom: '16px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '6px' }}>
                                    <Col xs={24} sm={12} md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Trade"
                                            value={tradeFilter}
                                            onChange={setTradeFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.trades.map(trade => (
                                                <Option key={trade} value={trade}>{trade}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Origin Region"
                                            value={originRegionFilter}
                                            onChange={setOriginRegionFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.originRegions.map(region => (
                                                <Option key={region} value={region}>{region}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Destination Region"
                                            value={destinationRegionFilter}
                                            onChange={setDestinationRegionFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.destinationRegions.map(region => (
                                                <Option key={region} value={region}>{region}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Origin Country"
                                            value={originCountryFilter}
                                            onChange={setOriginCountryFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.originCountries.map(country => (
                                                <Option key={country} value={country}>{country}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="District"
                                            value={districtFilter}
                                            onChange={setDistrictFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.districts.map(district => (
                                                <Option key={district} value={district}>{district}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Req ETD Week"
                                            value={reqEtdWeekFilter}
                                            onChange={setReqEtdWeekFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.reqEtdWeeks.map(week => (
                                                <Option key={week} value={week}>{week}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={3} lg={2}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Carrier"
                                            value={carrierFilter}
                                            onChange={setCarrierFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.carriers.map(carrier => (
                                                <Option key={carrier} value={carrier}>{carrier}</Option>
                                            ))}
                                        </Select>
                                    </Col>

                                    <Col xs={24} sm={12}  md={4} lg={3}>
                                        <Select
                                            mode="multiple"
                                            placeholder="Booking Status"
                                            value={bookingStatusFilter}
                                            onChange={setBookingStatusFilter}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            maxTagCount={0}
                                            maxTagTextLength={10}
                                        >
                                            {filterOptions.bookingStatuses.map(status => (
                                                <Option key={status} value={status}>{status}</Option>
                                            ))}
                                        </Select>
                                    </Col>



                                    <Col xs={24} sm={12} md={6} lg={6}>
                                        <Search
                                            placeholder="Search by TMS ID or Booking ID"
                                            value={tmsSearchQuery}
                                            onChange={(e) => setTmsSearchQuery(e.target.value)}
                                            allowClear
                                            style={{ width: '100%' }}
                                            size="small"
                                            prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
                                        />
                                    </Col>
                                </Row>

                                {/* Filter Pills */}
                                {(tradeFilter.length > 0 || originRegionFilter.length > 0 || destinationRegionFilter.length > 0 || 
                                 originCountryFilter.length > 0 || districtFilter.length > 0 || reqEtdWeekFilter.length > 0 || 
                                 carrierFilter.length > 0 || bookingStatusFilter.length > 0 || tmsSearchQuery || 
                                 Object.keys(columnFilters).length > 0) && (
                                    <div style={{ marginBottom: '16px', padding: '8px 16px', backgroundColor: '#f0f9ff', borderRadius: '6px', border: '1px solid #e0f2fe' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '12px', fontWeight: '500', color: '#0c4a6e', marginRight: '8px' }}>Applied Filters:</span>
                                            
                                            {/* Trade Filter Pills */}
                                            {tradeFilter.map(value => (
                                                <Tag
                                                    key={`trade-${value}`}
                                                    closable
                                                    onClose={() => removeTradeFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Trade: {value}
                                                </Tag>
                                            ))}

                                            {/* Origin Region Filter Pills */}
                                            {originRegionFilter.map(value => (
                                                <Tag
                                                    key={`origin-region-${value}`}
                                                    closable
                                                    onClose={() => removeOriginRegionFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Origin Region: {value}
                                                </Tag>
                                            ))}

                                            {/* Destination Region Filter Pills */}
                                            {destinationRegionFilter.map(value => (
                                                <Tag
                                                    key={`destination-region-${value}`}
                                                    closable
                                                    onClose={() => removeDestinationRegionFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Destination Region: {value}
                                                </Tag>
                                            ))}

                                            {/* Origin Country Filter Pills */}
                                            {originCountryFilter.map(value => (
                                                <Tag
                                                    key={`origin-country-${value}`}
                                                    closable
                                                    onClose={() => removeOriginCountryFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Origin Country: {value}
                                                </Tag>
                                            ))}

                                            {/* District Filter Pills */}
                                            {districtFilter.map(value => (
                                                <Tag
                                                    key={`district-${value}`}
                                                    closable
                                                    onClose={() => removeDistrictFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    District: {value}
                                                </Tag>
                                            ))}

                                            {/* Req ETD Week Filter Pills */}
                                            {reqEtdWeekFilter.map(value => (
                                                <Tag
                                                    key={`req-etd-week-${value}`}
                                                    closable
                                                    onClose={() => removeReqEtdWeekFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Req ETD Week: {value}
                                                </Tag>
                                            ))}

                                            {/* Carrier Filter Pills */}
                                            {carrierFilter.map(value => (
                                                <Tag
                                                    key={`carrier-${value}`}
                                                    closable
                                                    onClose={() => removeCarrierFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Carrier: {value}
                                                </Tag>
                                            ))}

                                            {/* Booking Status Filter Pills */}
                                            {bookingStatusFilter.map(value => (
                                                <Tag
                                                    key={`booking-status-${value}`}
                                                    closable
                                                    onClose={() => removeBookingStatusFilter(value)}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    Booking Status: {value}
                                                </Tag>
                                            ))}

                                            {/* TMS Search Query Pill */}
                                            {tmsSearchQuery && (
                                                <Tag
                                                    key="tms-search"
                                                    closable
                                                    onClose={removeTmsSearchQuery}
                                                    style={{ 
                                                        backgroundColor: '#0ea5e9', 
                                                        color: 'white', 
                                                        border: 'none',
                                                        borderRadius: '16px',
                                                        padding: '4px 12px',
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    TMS Search: {tmsSearchQuery}
                                                </Tag>
                                            )}

                                            {/* Column Filter Pills */}
                                            {Object.entries(columnFilters).map(([columnKey, values]) => 
                                                values.map(value => (
                                                    <Tag
                                                        key={`column-${columnKey}-${value}`}
                                                        closable
                                                        onClose={() => removeColumnFilter(columnKey, value)}
                                                        style={{ 
                                                            backgroundColor: '#0ea5e9', 
                                                            color: 'white', 
                                                            border: 'none',
                                                            borderRadius: '16px',
                                                            padding: '4px 12px',
                                                            fontSize: '12px'
                                                        }}
                                                    >
                                                        {columnKey}: {value}
                                                    </Tag>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    marginBottom: '10px' 
                                }}>
                                    <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: 'bold' }}>
                                        Total <strong>{filteredData.length}</strong> bookings
                                        {filteredData.length !== shipperBookingsData.length && (
                                            <span style={{ marginLeft: '8px', color: '#059669' }}>
                                                (filtered from {shipperBookingsData.length})
                                            </span>
                                        )}
                                    </div>
                                    
                                    {selectedRows.length > 0 && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ fontSize: '12px', color: '#6b7280' }}>
                                                {selectedRows.length} row(s) selected
                                            </span>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                                                <input
                                                    type="checkbox"
                                                    checked={showOnlySelected}
                                                    onChange={(e) => setShowOnlySelected(e.target.checked)}
                                                    style={{ margin: 0 }}
                                                />
                                                <span style={{ fontSize: '12px', color: '#6b7280' }}>
                                                    Show only selected
                                                </span>
                                            </label>
                                        </div>
                                    )}
                                </div>
                                
                                {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <div style={{ fontSize: '12px', color: '#6b7280' }}>
                                        Export data to CSV format
                                    </div>
                                    <Button
                                        type="primary"
                                        icon={<DownloadOutlined />}
                                        onClick={exportToCSV}
                                        size="small"
                                        style={{ borderRadius: '6px' }}
                                    >
                                        Export to CSV
                                    </Button>
                                </div> */}
                                
                                <div style={{ flex: 1, overflow: 'auto' }}>
                                    <Table
                                        key="booking-overview-table"
                                        columns={columns}
                                        dataSource={showOnlySelected ? filteredData.filter(item => selectedRows.includes(item.id)) : filteredData}
                                        rowKey="id"
                                        onChange={(pagination, filters, sorter) => {
                                            // Handle filter changes
                                            Object.entries(filters).forEach(([columnKey, filterValues]) => {
                                                if (filterValues && filterValues.length > 0) {
                                                    dispatch(setColumnFilter({ columnKey, values: filterValues as string[] }));
                                                } else {
                                                    // Remove the filter if no values are selected
                                                    const currentFilters = { ...columnFilters };
                                                    delete currentFilters[columnKey];
                                                    // We need to dispatch individual actions for each cleared filter
                                                    dispatch(setColumnFilter({ columnKey, values: [] }));
                                                }
                                            });
                                        }}
                                        rowSelection={{
                                            selectedRowKeys: selectedRows,
                                            onChange: handleRowSelection,
                                            selections: [
                                                {
                                                    key: 'all',
                                                    text: 'Select All',
                                                    onSelect: handleSelectAll,
                                                },
                                                {
                                                    key: 'clear',
                                                    text: 'Clear Selection',
                                                    onSelect: handleClearSelection,
                                                },
                                            ],
                                        }}
                                        pagination={{
                                            pageSize: newPageSize,
                                            showSizeChanger: true,
                                            showQuickJumper: true,
                                            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                                            pageSizeOptions: ['10', '20', '50', '100'],
                                            onShowSizeChange: (current, size) => {
                                                dispatch(setNewPageSize(size));
                                            }
                                        }}
                                        scroll={{ x: 'max-content', y: 'calc(100vh - 450px)' }}
                                        size="small"
                                        bordered
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '6px'
                                        }}
                                        rowClassName={(record) => {
                                            if (record['Exception?'] === 'Y') {
                                                return 'exception-row';
                                            }
                                            return '';
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    },
                    {
                        key: 'views',
                        label: 'Views',
                        children: (
                            <App>
                                <ViewsTab />
                            </App>
                        )
                    }
                ]}
                />
            </Card>

            <style>{`
        .exception-row {
          background-color: #fef2f2 !important;
        }
        .exception-row:hover {
          background-color: #fee2e2 !important;
        }
        .ant-table-thead > tr > th {
          background-color: #f9fafb !important;
          font-weight: 600 !important;
          font-size: 12px !important;
        }
        .ant-table-tbody > tr > td {
          font-size: 12px !important;
        }
        .ant-select-selector {
        padding: '3px';
          border-radius: 45px !important;
        }
        .ant-input-affix-wrapper {
          border-radius: 6px !important;
        }
        .ant-card-body {
            padding: 0 24px !important;
        }
      `}</style>
        </div>
    );
};

export default BookingOverviewNew;
