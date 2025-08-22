import React, { useState } from 'react';
import { Card, Button, Input, Modal, Form, Space, Tooltip, Popconfirm, Checkbox, App } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, SaveOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { createCustomView, updateCustomView, deleteCustomView, setActiveView } from '../../store/slices/bookingOverviewSlice';
import { shipperBookingsData } from '../../data/bookingOverviewData';

const ViewsTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { customViews, activeViewId } = useSelector((state: RootState) => state.bookingOverview);
  const { message } = App.useApp();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingView, setEditingView] = useState<any>(null);
  const [form] = Form.useForm();

  // Get all available columns from the data
  const allColumns = shipperBookingsData.length > 0 ? Object.keys(shipperBookingsData[0]) : [];

  // Update form values when editing view changes
  React.useEffect(() => {
    if (editingView) {
      form.setFieldsValue({
        name: editingView.name,
        columns: editingView.columns || []
      });
    } else {
      form.setFieldsValue({
        name: '',
        columns: allColumns.slice(0, 10)
      });
    }
  }, [editingView, form, allColumns]);

  const handleCreateView = () => {
    setEditingView(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditView = (view: any) => {
    setEditingView(view);
    form.setFieldsValue({
      name: view.name,
      columns: view.columns
    });
    setIsModalVisible(true);
  };

  const handleDeleteView = (viewId: string) => {
    dispatch(deleteCustomView(viewId));
    message.success('View deleted successfully');
  };

  const handleActivateView = (viewId: string) => {
    dispatch(setActiveView(viewId));
    message.success('View activated successfully');
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form values submitted:', values); // Debug log
      
      if (editingView) {
        dispatch(updateCustomView({
          id: editingView.id,
          name: values.name,
          columns: values.columns
        }));
        message.success('View updated successfully');
      } else {
        dispatch(createCustomView({
          id: `view_${Date.now()}`,
          name: values.name,
          columns: values.columns
        }));
        message.success('View created successfully');
      }
      
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingView(null);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
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
              <div style={{ marginBottom: '12px' }}>
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
            </Card>
          ))}
        </div>
      )}

      <Modal
        title={editingView ? 'Edit View' : 'Create New View'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
        okText={editingView ? 'Update' : 'Create'}
        cancelText="Cancel"
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
          
          <Form.Item
            name="columns"
            label="Select Columns"
            rules={[{ required: true, message: 'Please select at least one column' }]}
          >
            <Checkbox.Group
              options={allColumns.map(column => ({ label: column, value: column }))}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px',
                maxHeight: '300px', 
                overflow: 'auto',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                padding: '12px'
              }}
              onChange={(checkedValues) => {
                console.log('Checkbox values changed:', checkedValues); // Debug log
                form.setFieldsValue({ columns: checkedValues });
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ViewsTab;
