import React, { useState, useMemo } from 'react';
import { Table, Input, Select, Space, Card, Typography, Row, Col, Tooltip, Tabs, App } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import { SearchOutlined, FilterTwoTone } from '@ant-design/icons';
import { shipperBookingsData } from '../../data/bookingOverviewData';
import { FilterOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
import { mapShipperBookingToCarrierBooking } from '../../utils/dataMapping';
import ViewsTab from './ViewsTab';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { setNewFilters, clearNewFilters, setNewPageSize, setSelectedRows, toggleRowSelection, clearSelectedRows } from '../../store/slices/bookingOverviewSlice';
const { Search } = Input;
const { Option } = Select;

const BookingOverviewNew: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    
    // Get filter states, page size, selected rows, and custom views from Redux
    const { newFilters, newPageSize, selectedRows, customViews, activeViewId } = useSelector((state: RootState) => state.bookingOverview);
    const {
        tradeFilter,
        originRegionFilter,
        destinationRegionFilter,
        originCountryFilter,
        districtFilter,
        reqEtdWeekFilter,
        tmsSearchQuery
    } = newFilters;

    // Setter functions that dispatch to Redux
    const setTradeFilter = (value: string[]) => dispatch(setNewFilters({ tradeFilter: value }));
    const setOriginRegionFilter = (value: string[]) => dispatch(setNewFilters({ originRegionFilter: value }));
    const setDestinationRegionFilter = (value: string[]) => dispatch(setNewFilters({ destinationRegionFilter: value }));
    const setOriginCountryFilter = (value: string[]) => dispatch(setNewFilters({ originCountryFilter: value }));
    const setDistrictFilter = (value: string[]) => dispatch(setNewFilters({ districtFilter: value }));
    const setReqEtdWeekFilter = (value: string[]) => dispatch(setNewFilters({ reqEtdWeekFilter: value }));
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

        return {
            trades: trades.sort(),
            originRegions: originRegions.sort(),
            destinationRegions: destinationRegions.sort(),
            originCountries: originCountries.sort(),
            districts: districts.sort(),
            reqEtdWeeks: reqEtdWeeks.sort()
        };
    }, []);

    // Filter data based on all filters
    const filteredData = useMemo(() => {
        return shipperBookingsData.filter(item => {
            const matchesTrade = tradeFilter.length === 0 || tradeFilter.includes(item['Trade']);
            const matchesOriginRegion = originRegionFilter.length === 0 || originRegionFilter.includes(item['Origin region']);
            const matchesDestinationRegion = destinationRegionFilter.length === 0 || destinationRegionFilter.includes(item['Destination region']);
            const matchesOriginCountry = originCountryFilter.length === 0 || originCountryFilter.includes(item['Origin country']);
            const matchesDistrict = districtFilter.length === 0 || districtFilter.includes(item['district']);
            const matchesReqEtdWeek = reqEtdWeekFilter.length === 0 || reqEtdWeekFilter.includes(item['req ETD wk']);
            const matchesTmsSearch = !tmsSearchQuery ||
                item['TMS #']?.toLowerCase().includes(tmsSearchQuery.toLowerCase()) ||
                item.id?.toLowerCase().includes(tmsSearchQuery.toLowerCase());

            return matchesTrade && matchesOriginRegion && matchesDestinationRegion &&
                matchesOriginCountry && matchesDistrict && matchesReqEtdWeek && matchesTmsSearch;
        });
    }, [tradeFilter, originRegionFilter, destinationRegionFilter, originCountryFilter, districtFilter, reqEtdWeekFilter, tmsSearchQuery]);

    // Clear all filters
    const clearAllFilters = () => {
        dispatch(clearNewFilters());
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
    }, [shipperBookingsData, customViews, activeViewId]);

         return (
         <div style={{ padding: '16px', height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
            {/* Filters Section */}
                         <Card
                 title="Carrier Bookings"
                 style={{ marginBottom: '16px' }}
                 extra={
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Tooltip title="Go to Carrier Bookings">
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
                         originCountryFilter.length > 0 || districtFilter.length > 0 || reqEtdWeekFilter.length > 0 || tmsSearchQuery) && (
                            <Tooltip title="Clear All Filters">
                                <FilterOutlined 
                                    style={{ color: '#0ea5e9', fontSize: 16, cursor: 'pointer' }} 
                                    onClick={clearAllFilters}
                                />
                            </Tooltip>
                        )}
                    </div>
                 }
             >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={4} lg={3}>
                        <Select
                            mode="multiple"
                            placeholder="Trade"
                            value={tradeFilter}
                            onChange={setTradeFilter}
                            allowClear
                            style={{ width: '100%' }}
                            size="small"
                            maxTagCount={2}
                            maxTagTextLength={10}
                        >
                            {filterOptions.trades.map(trade => (
                                <Option key={trade} value={trade}>{trade}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} sm={12} md={4} lg={3}>
                        <Select
                            mode="multiple"
                            placeholder="Origin Region"
                            value={originRegionFilter}
                            onChange={setOriginRegionFilter}
                            allowClear
                            style={{ width: '100%' }}
                            size="small"
                            maxTagCount={2}
                            maxTagTextLength={10}
                        >
                            {filterOptions.originRegions.map(region => (
                                <Option key={region} value={region}>{region}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} sm={12} md={4} lg={3}>
                        <Select
                            mode="multiple"
                            placeholder="Destination Region"
                            value={destinationRegionFilter}
                            onChange={setDestinationRegionFilter}
                            allowClear
                            style={{ width: '100%' }}
                            size="small"
                            maxTagCount={2}
                            maxTagTextLength={10}
                        >
                            {filterOptions.destinationRegions.map(region => (
                                <Option key={region} value={region}>{region}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} sm={12} md={4} lg={3}>
                        <Select
                            mode="multiple"
                            placeholder="Origin Country"
                            value={originCountryFilter}
                            onChange={setOriginCountryFilter}
                            allowClear
                            style={{ width: '100%' }}
                            size="small"
                            maxTagCount={2}
                            maxTagTextLength={10}
                        >
                            {filterOptions.originCountries.map(country => (
                                <Option key={country} value={country}>{country}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} sm={12} md={4} lg={3}>
                        <Select
                            mode="multiple"
                            placeholder="District"
                            value={districtFilter}
                            onChange={setDistrictFilter}
                            allowClear
                            style={{ width: '100%' }}
                            size="small"
                            maxTagCount={2}
                            maxTagTextLength={10}
                        >
                            {filterOptions.districts.map(district => (
                                <Option key={district} value={district}>{district}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} sm={12} md={4} lg={3}>
                        <Select
                            mode="multiple"
                            placeholder="Req ETD Week"
                            value={reqEtdWeekFilter}
                            onChange={setReqEtdWeekFilter}
                            allowClear
                            style={{ width: '100%' }}
                            size="small"
                            maxTagCount={2}
                            maxTagTextLength={10}
                        >
                            {filterOptions.reqEtdWeeks.map(week => (
                                <Option key={week} value={week}>{week}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="Search by TMS ID or Booking ID"
                            value={tmsSearchQuery}
                            onChange={(e) => setTmsSearchQuery(e.target.value)}
                            allowClear
                            style={{ width: '100%', maxWidth: '400px' }}
                            size="small"
                            prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
                        />
                    </Col>
                </Row>
            </Card>

            {/* Views and Data Table Tabs */}
            <Tabs
                defaultActiveKey="overview"
                style={{ marginBottom: '16px' }}
                items={[
                    {
                        key: 'overview',
                        label: 'Overview',
                        children: (
                            <Card style={{ height: 'calc(100vh - 280px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
                                
                                <div style={{ flex: 1, overflow: 'auto' }}>
                                    <Table
                                        key="booking-overview-table"
                                        columns={columns}
                                        dataSource={showOnlySelected ? filteredData.filter(item => selectedRows.includes(item.id)) : filteredData}
                                        rowKey="id"
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
                            </Card>
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
          border-radius: 6px !important;
        }
        .ant-input-affix-wrapper {
          border-radius: 6px !important;
        }
      `}</style>
        </div>
    );
};

export default BookingOverviewNew;
