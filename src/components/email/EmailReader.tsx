import React, { useEffect } from 'react';
import { Layout, Input, List, Typography, Button, Space, Tag, Spin, Empty, Upload, message, Tooltip, Pagination } from 'antd';
import { 
  SearchOutlined, 
  StarOutlined, 
  StarFilled, 
  DeleteOutlined, 
  ReloadOutlined,
  UploadOutlined,
  MailOutlined,
  PaperClipOutlined,
  ClockCircleOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { 
  fetchFolders,
  fetchEmails,
  selectEmail,
  toggleEmailStar,
  deleteEmail,
  uploadEMLFile,
  searchEmails,
  changeFolder,
  changePage,
  clearError
} from '../../store/slices/emailSlice';
import type { EmailMessage } from '../../types/email';

const { Sider, Content } = Layout;
const { Text, Title } = Typography;
const { Search } = Input;

const EmailReader: React.FC = () => {
  const dispatch = useDispatch();
  const { 
    emails, 
    folders, 
    selectedEmail, 
    selectedFolder, 
    searchQuery,
    pagination,
    loading, 
    emailLoading, 
    error 
  } = useSelector((state: RootState) => state.email);

  // Load folders on component mount
  useEffect(() => {
    dispatch(fetchFolders() as any);
    dispatch(fetchEmails() as any);
  }, [dispatch]);

  // Show error messages
  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleEmailClick = (email: EmailMessage) => {
    dispatch(selectEmail(email.id) as any);
  };

  const handleStarToggle = async (email: EmailMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleEmailStar(email.id) as any);
  };

  const handleDelete = async (email: EmailMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteEmail(email.id) as any);
    message.success('Email moved to trash');
  };

  const handleSearch = (value: string) => {
    dispatch(searchEmails(value) as any);
  };

  const handleFolderChange = (folderId: string) => {
    dispatch(changeFolder(folderId) as any);
  };

  const handlePageChange = (page: number) => {
    dispatch(changePage(page) as any);
  };

  const handleEMLUpload = async (file: File) => {
    dispatch(uploadEMLFile(file) as any);
    message.success('EML file uploaded successfully');
    return false; // Prevent default upload behavior
  };

  const handleRefresh = () => {
    dispatch(fetchEmails() as any);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) {
      return '📄';
    } else if (fileType.includes('image')) {
      return '🖼️';
    } else if (fileType.includes('video')) {
      return '🎥';
    } else if (fileType.includes('audio')) {
      return '🎵';
    } else if (fileType.includes('zip') || fileType.includes('rar') || fileType.includes('archive')) {
      return '📦';
    } else if (fileType.includes('word') || fileType.includes('document')) {
      return '📝';
    } else if (fileType.includes('excel') || fileType.includes('spreadsheet')) {
      return '📊';
    } else if (fileType.includes('powerpoint') || fileType.includes('presentation')) {
      return '📈';
    } else {
      return '📎';
    }
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ff4d4f';
      case 'low': return '#52c41a';
      default: return '#1890ff';
    }
  };

  return (
    <Layout style={{ height: 'calc(100vh - 100px)', backgroundColor: '#f5f5f5', overflow: 'hidden' }}>
      {/* Left Sidebar - Email List */}
      <Sider 
        width={400} 
        style={{ 
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e8e8e8',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden'
        }}
        breakpoint="lg"
        collapsedWidth={0}
      >
        {/* Header */}
        <div style={{ 
          padding: '16px',
          borderBottom: '1px solid #f0f0f0',
          backgroundColor: '#fafafa',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <Title level={4} style={{ margin: 0, color: '#1f2937' }}>
              <MailOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
              Email Reader
            </Title>
            <Space>
              <Upload
                accept=".eml,.msg"
                showUploadList={false}
                beforeUpload={handleEMLUpload}
              >
                <Tooltip title="Upload EML file">
                  <Button type="text" icon={<UploadOutlined />} size="small" />
                </Tooltip>
              </Upload>
              <Tooltip title="Refresh">
                <Button 
                  type="text" 
                  icon={<ReloadOutlined />} 
                  size="small"
                  onClick={handleRefresh}
                  loading={loading}
                />
              </Tooltip>
            </Space>
          </div>
          
          <Search
            placeholder="Search emails..."
            allowClear
            onSearch={handleSearch}
            style={{ marginBottom: '12px' }}
            prefix={<SearchOutlined />}
          />

          {/* Folder Tabs */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {folders.map(folder => (
              <Button
                key={folder.id}
                type={selectedFolder === folder.id ? 'primary' : 'default'}
                size="small"
                onClick={() => handleFolderChange(folder.id)}
                style={{ 
                  fontSize: '12px',
                  height: '28px',
                  textTransform: 'capitalize'
                }}
              >
                {folder.name}
                {folder.unreadCount > 0 && (
                  <span style={{ 
                    marginLeft: '4px',
                    backgroundColor: '#ff4d4f',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '0 6px',
                    fontSize: '10px'
                  }}>
                    {folder.unreadCount}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Email List */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: 0,
          overflowY: 'auto',
          height: 'inherit'
        }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <Spin size="large" />
            </div>
          ) : emails.length === 0 ? (
            <Empty 
              description="No emails found"
              style={{ marginTop: '60px' }}
            />
          ) : (
            <>
              <List
                dataSource={emails}
                style={{ 
                  flex: 1, 
                  overflow: 'auto',
                  minHeight: 0
                }}
                renderItem={(email) => (
                  <List.Item
                    key={email.id}
                    onClick={() => handleEmailClick(email)}
                    style={{
                      cursor: 'pointer',
                      padding: '12px 16px',
                      backgroundColor: selectedEmail?.id === email.id ? '#e6f7ff' : 'transparent',
                      borderLeft: selectedEmail?.id === email.id ? '3px solid #1890ff' : '3px solid transparent',
                      borderBottom: '1px solid #f0f0f0'
                    }}
                    className="email-list-item"
                  >
                    <div style={{ width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <Text 
                          strong={!email.isRead}
                          style={{ 
                            fontSize: '13px',
                            color: email.isRead ? '#666' : '#1f2937',
                            flex: 1,
                            marginRight: '8px'
                          }}
                          ellipsis
                        >
                          <UserOutlined style={{ marginRight: '4px', fontSize: '11px' }} />
                          {email.from.split('@')[0]}
                        </Text>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Text style={{ fontSize: '11px', color: '#999' }}>
                            {formatDate(email.date)}
                          </Text>
                          <Button
                            type="text"
                            size="small"
                            icon={email.isStarred ? <StarFilled style={{ color: '#faad14' }} /> : <StarOutlined />}
                            onClick={(e) => handleStarToggle(email, e)}
                            style={{ padding: '0', width: '16px', height: '16px' }}
                          />
                        </div>
                      </div>
                      
                      <Text 
                        strong={!email.isRead}
                        style={{ 
                          fontSize: '14px',
                          color: email.isRead ? '#333' : '#1f2937',
                          display: 'block',
                          marginBottom: '4px'
                        }}
                        ellipsis
                      >
                        {email.subject}
                      </Text>
                      
                      <Text 
                        style={{ 
                          fontSize: '12px',
                          color: '#666',
                          display: 'block',
                          marginBottom: '6px'
                        }}
                        ellipsis
                      >
                        {email.body.substring(0, 100)}...
                      </Text>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                          {email.priority !== 'normal' && (
                            <Tag 
                              color={getPriorityColor(email.priority)}
                              style={{ fontSize: '10px', padding: '0 4px', margin: 0 }}
                            >
                              {email.priority.toUpperCase()}
                            </Tag>
                          )}
                          {email.attachments && email.attachments.length > 0 && (
                            <PaperClipOutlined style={{ fontSize: '11px', color: '#666' }} />
                          )}
                          {!email.isRead && (
                            <div style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#1890ff'
                            }} />
                          )}
                        </div>
                        
                        <Button
                          type="text"
                          size="small"
                          icon={<DeleteOutlined />}
                          onClick={(e) => handleDelete(email, e)}
                          style={{ 
                            padding: '0', 
                            width: '16px', 
                            height: '16px',
                            color: '#ff4d4f'
                          }}
                        />
                      </div>
                    </div>
                  </List.Item>
                )}
              />
              
            </>
          )}
        </div>
        {/* Pagination */}
              <div style={{ 
                padding: '12px 16px',
                borderTop: '1px solid #f0f0f0',
                backgroundColor: '#fafafa',
                flexShrink: 0
              }}>
                <Pagination
                  current={pagination.page}
                  pageSize={pagination.pageSize}
                  total={pagination.total}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  showQuickJumper
                  showTotal={(total, range) => 
                    `${range[0]}-${range[1]} of ${total} emails`
                  }
                  size="small"
                />
              </div>
      </Sider>

      {/* Right Content - Email Detail */}
      <Content style={{ 
        backgroundColor: '#ffffff', 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}>
        {emailLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Spin size="large" />
          </div>
        ) : selectedEmail ? (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Email Header */}
            <div style={{ 
              padding: '24px',
              borderBottom: '1px solid #f0f0f0',
              backgroundColor: '#fafafa',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <Title level={3} style={{ margin: 0, color: '#1f2937', flex: 1, marginRight: '16px' }}>
                  {selectedEmail.subject}
                </Title>
                <Space>
                  <Button
                    type="text"
                    icon={selectedEmail.isStarred ? <StarFilled style={{ color: '#faad14' }} /> : <StarOutlined />}
                    onClick={(e) => handleStarToggle(selectedEmail, e)}
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={(e) => handleDelete(selectedEmail, e)}
                    danger
                  />
                </Space>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
                <div>
                  <Text strong style={{ fontSize: '12px', color: '#666' }}>From: </Text>
                  <Text style={{ fontSize: '14px' }}>{selectedEmail.from}</Text>
                </div>
                <div>
                  <Text strong style={{ fontSize: '12px', color: '#666' }}>To: </Text>
                  <Text style={{ fontSize: '14px' }}>{selectedEmail.to.join(', ')}</Text>
                </div>
                {selectedEmail.cc && selectedEmail.cc.length > 0 && (
                  <div>
                    <Text strong style={{ fontSize: '12px', color: '#666' }}>CC: </Text>
                    <Text style={{ fontSize: '14px' }}>{selectedEmail.cc.join(', ')}</Text>
                  </div>
                )}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ClockCircleOutlined style={{ fontSize: '12px', color: '#666' }} />
                    <Text style={{ fontSize: '12px', color: '#666' }}>
                      {new Date(selectedEmail.date).toLocaleString()}
                    </Text>
                  </div>
                  {selectedEmail.priority !== 'normal' && (
                    <Tag color={getPriorityColor(selectedEmail.priority)}>
                      {selectedEmail.priority.toUpperCase()} PRIORITY
                    </Tag>
                  )}
                </div>
                
                {selectedEmail.attachments && selectedEmail.attachments.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <PaperClipOutlined style={{ fontSize: '14px', color: '#666' }} />
                    <Text style={{ fontSize: '12px', color: '#666' }}>
                      {selectedEmail.attachments.length} attachment{selectedEmail.attachments.length > 1 ? 's' : ''}
                    </Text>
                  </div>
                )}
              </div>
            </div>

            {/* Attachments */}
            {selectedEmail.attachments && selectedEmail.attachments.length > 0 && (
              <div style={{ 
                padding: '16px 24px',
                borderBottom: '1px solid #f0f0f0',
                backgroundColor: '#f9f9f9',
                flexShrink: 0
              }}>
                <Text strong style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
                  Attachments:
                </Text>
                <Space wrap>
                  {selectedEmail.attachments.map(attachment => (
                    <div
                      key={attachment.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 16px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e8e8e8',
                        borderRadius: '6px',
                        fontSize: '13px',
                        minWidth: '200px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      className="attachment-item"
                    >
                      <span style={{ fontSize: '18px' }}>{getFileIcon(attachment.type)}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ 
                          fontWeight: '500', 
                          color: '#1f2937',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {attachment.name}
                        </div>
                        <div style={{ 
                          fontSize: '11px', 
                          color: '#6b7280',
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '2px'
                        }}>
                          <span>{attachment.type.split('/')[1]?.toUpperCase() || 'FILE'}</span>
                          <span>{formatFileSize(attachment.size)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Space>
              </div>
            )}

            {/* Email Body */}
            <div style={{ 
              flex: 1,
              padding: '24px',
             overflow: 'auto',
             minHeight: 0
            }}>
              {selectedEmail.htmlBody ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: selectedEmail.htmlBody }}
                  style={{ 
                    lineHeight: '1.6',
                    fontSize: '14px',
                    color: '#333'
                  }}
                />
              ) : (
                <pre style={{ 
                  fontFamily: 'inherit',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.6',
                  fontSize: '14px',
                  color: '#333',
                  margin: 0
                }}>
                  {selectedEmail.body}
                </pre>
              )}
            </div>
          </div>
        ) : (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%',
            flexDirection: 'column',
            color: '#999'
          }}>
            <MailOutlined style={{ fontSize: '64px', marginBottom: '16px' }} />
            <Text style={{ fontSize: '16px', color: '#666' }}>
              Select an email to read its content
            </Text>
          </div>
        )}
      </Content>

      <style>{`
        .email-list-item:hover {
          background-color: #f5f5f5 !important;
        }

        .attachment-item:hover {
          background-color: #f0f9ff !important;
          border-color: #1890ff !important;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.15);
        }
        .ant-layout-sider-children {
          display: flex;
          flex-direction: column;
        }
        
        @media (max-width: 992px) {
          .ant-layout-sider {
            position: fixed !important;
           height: calc(100vh - 56px) !important;
            z-index: 1000;
          }
        }
      `}</style>
    </Layout>
  );
};

export default EmailReader;