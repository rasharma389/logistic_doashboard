import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Card, Button, Input, Modal, Form, Space, Tooltip, Popconfirm, Checkbox, App, Row, Col } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, SearchOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { createCustomView, updateCustomView, deleteCustomView, setActiveView, setNewFilters, setColumnFilter, clearNewFilters, clearColumnFilters } from '../../store/slices/bookingOverviewSlice';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const ViewsTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { customViews, activeViewId } = useSelector((state: RootState) => state.bookingOverview);
  const { message } = App.useApp();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingView, setEditingView] = useState<any>(null);
  const [form] = Form.useForm();
  const [columnSearchQuery, setColumnSearchQuery] = useState('');
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  // Get all available columns from the data - memoized to prevent recreation
  const allColumns = useMemo(() => {
    return shipperBookingsData.length > 0 ? Object.keys(shipperBookingsData[0]) : [];
  }, []);

  // Filter columns based on search query
  const filteredColumns = useMemo(() => {
    if (!columnSearchQuery) return allColumns;
    return allColumns.filter(column => 
      column.toLowerCase().includes(columnSearchQuery.toLowerCase())
    );
  }, [allColumns, columnSearchQuery]);

  // Update form values when editing view changes - removed form and allColumns from dependencies
  useEffect(() => {
    if (editingView) {
      const columns = editingView.columns || [];
      setSelectedColumns(columns);
      form.setFieldsValue({
        name: editingView.name,
        columns: columns
      });
    } else if (isModalVisible) {
      // Only reset when modal is visible to avoid unnecessary resets
      const defaultColumns = allColumns.slice(0, 10);
      setSelectedColumns(defaultColumns);
      form.setFieldsValue({
        name: '',
        columns: defaultColumns
      });
    }
  }, [editingView, isModalVisible]);

  const handleCreateView = useCallback(() => {
    setEditingView(null);
    form.resetFields();
    setColumnSearchQuery('');
    setSelectedColumns(allColumns.slice(0, 10));
    setIsModalVisible(true);
  }, [form, allColumns]);

  const handleEditView = useCallback((view: any) => {
    setEditingView(view);
    setSelectedColumns(view.columns || []);
    setColumnSearchQuery('');
    form.setFieldsValue({
      name: view.name,
      columns: view.columns
    });
    setIsModalVisible(true);
  }, [form]);

  const handleDeleteView = useCallback((viewId: string) => {
    dispatch(deleteCustomView(viewId));
    message.success('View deleted successfully');
  }, [dispatch, message]);

  const handleActivateView = useCallback((viewId: string) => {
    dispatch(setActiveView(viewId));
    
    // Apply saved filters if they exist
    const view = customViews.find(v => v.id === viewId);
    if (view && view.savedFilters) {
      // Apply global filters first
      dispatch(setNewFilters({
        tradeFilter: view.savedFilters.tradeFilter,
        originRegionFilter: view.savedFilters.originRegionFilter,
        destinationRegionFilter: view.savedFilters.destinationRegionFilter,
        originCountryFilter: view.savedFilters.originCountryFilter,
        districtFilter: view.savedFilters.districtFilter,
        reqEtdWeekFilter: view.savedFilters.reqEtdWeekFilter,
        carrierFilter: view.savedFilters.carrierFilter,
        bookingStatusFilter: view.savedFilters.bookingStatusFilter,
        tmsSearchQuery: view.savedFilters.tmsSearchQuery,
        dateRangeFilter: view.savedFilters.dateRangeFilter
      }));

      // Apply column filters
      Object.entries(view.savedFilters.columnFilters).forEach(([columnKey, values]) => {
        dispatch(setColumnFilter({ columnKey, values }));
      });
    } else {
      // Clear all filters if no saved filters exist
      dispatch(clearNewFilters());
      dispatch(clearColumnFilters());
    }
    
    message.success('View activated successfully');
  }, [dispatch, message, customViews]);

  const handleModalOk = useCallback(async () => {
    try {
      const values = await form.validateFields();
      // Use selectedColumns state instead of form values for columns
      const columns = selectedColumns.length > 0 ? selectedColumns : allColumns.slice(0, 10);
      
      if (editingView) {
        dispatch(updateCustomView({
          id: editingView.id,
          name: values.name,
          columns: columns
        }));
        message.success('View updated successfully');
      } else {
        dispatch(createCustomView({
          id: `view_${Date.now()}`,
          name: values.name,
          columns: columns
        }));
        message.success('View created successfully');
      }
      
      setIsModalVisible(false);
      form.resetFields();
      setColumnSearchQuery('');
      setSelectedColumns([]);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  }, [form, editingView, dispatch, message, selectedColumns, allColumns]);

  const handleModalCancel = useCallback(() => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingView(null);
    setColumnSearchQuery('');
    setSelectedColumns([]);
  }, [form]);

  const handleSelectAllColumns = useCallback(() => {
    const newSelection = [...filteredColumns];
    setSelectedColumns(newSelection);
  }, [filteredColumns]);

  const handleDeselectAllColumns = useCallback(() => {
    setSelectedColumns([]);
  }, []);

  const handleColumnToggle = useCallback((column: string, checked: boolean) => {
    const newSelection = checked
      ? [...selectedColumns, column]
      : selectedColumns.filter((col: string) => col !== column);
    setSelectedColumns(newSelection);
  }, [selectedColumns]);

  return (
    <div style={{ 
      padding: '16px', 
      height: 'calc(100vh - 350px)', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px',
        flexShrink: 0
      }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
          Custom Views
        </h3>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleCreateView}
        >
          Create New View
        </Button>
      </div>

      {customViews.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>
            No custom views created yet. Create your first view to get started.
          </p>
          <Button type="primary" onClick={handleCreateView}>
            Create Your First View
          </Button>
        </Card>
      ) : (
        <div 
          className="views-container"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '16px',
            overflowY: 'auto',
            paddingRight: '8px',
            paddingBottom: '20px'
          }}
        >
          {customViews.map((view) => (
            <Card
              key={view.id}
              style={{
                border: activeViewId === view.id ? '2px solid #0ea5e9' : '1px solid #e2e8f0',
                backgroundColor: activeViewId === view.id ? '#f0f9ff' : 'white'
              }}
              actions={[
                <Tooltip title="Activate View">
                  <EyeOutlined 
                    key="activate" 
                    onClick={() => handleActivateView(view.id)}
                    style={{ 
                      color: activeViewId === view.id ? '#0ea5e9' : '#6b7280',
                      fontSize: '16px'
                    }}
                  />
                </Tooltip>,
                <Tooltip title="Edit View">
                  <EditOutlined 
                    key="edit" 
                    onClick={() => handleEditView(view)}
                    style={{ color: '#0ea5e9', fontSize: '16px' }}
                  />
                </Tooltip>,
                <Tooltip title="Delete View">
                  <Popconfirm
                    title="Delete this view?"
                    description="Are you sure you want to delete this view? This action cannot be undone."
                    onConfirm={() => handleDeleteView(view.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined 
                      key="delete" 
                      style={{ color: '#ef4444', fontSize: '16px' }}
                    />
                  </Popconfirm>
                </Tooltip>
              ]}
            >
              <div style={{ marginBottom: '12px', padding: '10px 0' }}>
                <h4 style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '16px', 
                  fontWeight: '600',
                  color: activeViewId === view.id ? '#0ea5e9' : '#374151'
                }}>
                  {view.name}
                </h4>
                <p style={{ 
                  margin: 0, 
                  fontSize: '12px', 
                  color: '#6b7280'
                }}>
                  {Array.isArray(view.columns) ? view.columns.length : 0} columns • Created {new Date(view.createdAt).toLocaleDateString()}
                </p>
              </div>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '4px',
                maxHeight: '60px',
                overflow: 'hidden'
              }}>
                {Array.isArray(view.columns) && view.columns.slice(0, 5).map((column, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '2px 6px',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#6b7280'
                    }}
                  >
                    {column}
                  </span>
                ))}
                {Array.isArray(view.columns) && view.columns.length > 5 && (
                  <span style={{ 
                    padding: '2px 6px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#6b7280'
                  }}>
                    +{view.columns.length - 5} more
                  </span>
                )}
              </div>

              {/* Global Filters Section */}
              {view.savedFilters && (
                <div style={{ marginTop: '12px' }}>
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '6px' 
                  }}>
                    Global Filters:
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '4px'
                  }}>
                    {view.savedFilters.tradeFilter.length > 0 && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Trade: {view.savedFilters.tradeFilter.join(', ')}
                      </span>
                    )}
                    {view.savedFilters.originRegionFilter.length > 0 && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Origin: {view.savedFilters.originRegionFilter.join(', ')}
                      </span>
                    )}
                    {view.savedFilters.destinationRegionFilter.length > 0 && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Dest: {view.savedFilters.destinationRegionFilter.join(', ')}
                      </span>
                    )}
                    {view.savedFilters.carrierFilter.length > 0 && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Carrier: {view.savedFilters.carrierFilter.join(', ')}
                      </span>
                    )}
                    {view.savedFilters.bookingStatusFilter.length > 0 && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Status: {view.savedFilters.bookingStatusFilter.join(', ')}
                      </span>
                    )}
                    {view.savedFilters.tmsSearchQuery && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Search: {view.savedFilters.tmsSearchQuery}
                      </span>
                    )}
                    {view.savedFilters.dateRangeFilter.startDate && view.savedFilters.dateRangeFilter.endDate && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        Date: {view.savedFilters.dateRangeFilter.startDate} - {view.savedFilters.dateRangeFilter.endDate}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Column Filters Section */}
              {view.savedFilters && view.savedFilters.columnFilters && Object.keys(view.savedFilters.columnFilters).length > 0 && (
                <div style={{ marginTop: '12px' }}>
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '6px' 
                  }}>
                    Column Filters:
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '4px'
                  }}>
                    {Object.entries(view.savedFilters.columnFilters).map(([column, values]) => (
                      <span key={column} style={{
                        padding: '2px 6px',
                        backgroundColor: '#0ea5e9',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: 'white'
                      }}>
                        {column}: {Array.isArray(values) ? values.join(', ') : values}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      <Modal
        title={editingView ? 'Edit View' : 'Create New View'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={900}
        okText={editingView ? 'Update' : 'Create'}
        cancelText="Cancel"
        style={{ top: 20 }}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="View Name"
            rules={[{ required: true, message: 'Please enter a view name' }]}
          >
            <Input placeholder="Enter view name" />
          </Form.Item>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#dc2626' }}>* Select Columns</label>
            
            {/* Search and Controls */}
            <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
              <Col span={16}>
                <Input
                  placeholder="Search columns..."
                  prefix={<SearchOutlined />}
                  value={columnSearchQuery}
                  onChange={(e) => setColumnSearchQuery(e.target.value)}
                  allowClear
                />
              </Col>
              <Col span={8}>
                <Space>
                  <Button 
                    size="small" 
                    onClick={handleSelectAllColumns}
                    icon={<CheckOutlined />}
                  >
                    Select All
                  </Button>
                  <Button 
                    size="small" 
                    onClick={handleDeselectAllColumns}
                    icon={<CloseOutlined />}
                  >
                    Deselect All
                  </Button>
                </Space>
              </Col>
            </Row>

            {/* Column Selection Grid */}
            <div style={{ 
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '16px',
              maxHeight: '400px',
              overflow: 'auto'
            }}>

              
              {filteredColumns.length > 0 ? (
                <Row gutter={[8, 8]}>
                  {filteredColumns.map((column) => (
                    <Col span={8} key={column}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '4px',
                        backgroundColor: selectedColumns.includes(column) ? '#f0f9ff' : 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onClick={() => handleColumnToggle(column, !selectedColumns.includes(column))}
                      >
                        <Checkbox
                          checked={selectedColumns.includes(column)}
                          onChange={(e) => handleColumnToggle(column, e.target.checked)}
                          style={{ marginRight: '8px' }}
                        />
                        <span style={{ 
                          fontSize: '12px',
                          color: selectedColumns.includes(column) ? '#0ea5e9' : '#374151',
                          fontWeight: selectedColumns.includes(column) ? '500' : 'normal'
                        }}>
                          {column}
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '40px 20px',
                  color: '#6b7280'
                }}>
                  {allColumns.length === 0 ? (
                    <div>
                      <p style={{ marginBottom: '8px' }}>No columns available</p>
                      <p style={{ fontSize: '12px' }}>Loading booking data...</p>
                      <p style={{ fontSize: '10px', color: '#dc2626' }}>shipperBookingsData length: {shipperBookingsData.length}</p>
                    </div>
                  ) : columnSearchQuery ? (
                    <div>
                      <p style={{ marginBottom: '8px' }}>No columns match your search</p>
                      <p style={{ fontSize: '12px' }}>Try a different search term</p>
                    </div>
                  ) : (
                    <div>
                      <p style={{ marginBottom: '8px' }}>No columns found</p>
                      <p style={{ fontSize: '12px' }}>Debug info: allColumns length = {allColumns.length}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Selection Summary */}
            <div style={{ 
              marginTop: '12px', 
              padding: '8px 12px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '4px',
              fontSize: '12px',
              color: '#64748b'
            }}>
              {selectedColumns.length} of {filteredColumns.length} columns selected
              {columnSearchQuery && ` (filtered from ${allColumns.length} total)`}
            </div>
          </div>
        </Form>
      </Modal>

      <style>{`
        /* Custom scrollbar styling */
        .views-container::-webkit-scrollbar {
          width: 8px;
        }
        .views-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .views-container::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        .views-container::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Add a subtle shadow at the bottom when scrollable */
        .views-container {
          position: relative;
        }
        .views-container::after {
          content: '';
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          height: 10px;
          background: linear-gradient(transparent, rgba(0,0,0,0.05));
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default ViewsTab;
