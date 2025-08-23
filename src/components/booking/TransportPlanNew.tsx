import React from 'react';
import { Card, Typography, Space, Divider, Row, Col } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { FaShip } from 'react-icons/fa';

const { Title, Text } = Typography;

const TransportPlanNew: React.FC<{data: any}> = ({data}) => {
//   const { data } = useAppSelector(state => state.transportPlan);
    console.log('data', data);
  // Group consecutive entries by port and term for transshipment ports
  const groupedEntries = React.useMemo(() => {
    const groups: Array<{
      term: string;
      port: string;
      entries: typeof data.ts;
      vesselBefore?: string;
      vesselAfter?: string;
    }> = [];

    let currentGroup: typeof data.ts = [];
    let currentTerm = '';
    let currentPort = '';

    data.ts.forEach((entry: { term: string; port: string; vesselVoyage: any; }, index: number) => {
      if (entry.term !== currentTerm || entry.port !== currentPort) {
        // Save previous group if it exists
        if (currentGroup.length > 0) {
          const vesselBefore = index > 0 ? data.ts[index - 1].vesselVoyage : undefined;
          const vesselAfter = index < data.ts.length ? entry.vesselVoyage : undefined;
          
          groups.push({
            term: currentTerm,
            port: currentPort,
            entries: [...currentGroup],
            vesselBefore,
            vesselAfter
          });
        }
        
        // Start new group
        currentGroup = [entry];
        currentTerm = entry.term;
        currentPort = entry.port;
      } else {
        currentGroup.push(entry);
      }
    });

    // Add the last group
    if (currentGroup.length > 0) {
      groups.push({
        term: currentTerm,
        port: currentPort,
        entries: [...currentGroup],
        vesselAfter: undefined
      });
    }

    return groups;
  }, [data.ts]);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '0'
  };

  const mainContainerStyle: React.CSSProperties = {
    maxWidth: '100%',
    margin: '0',
    padding: '20px'
  };

  const portCardStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    borderRadius: '16px',
    minHeight: '50px',
    minWidth: '500px'
  };

  const vesselStyle: React.CSSProperties = {
    marginLeft: '32px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  const vesselTextStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: '#13c2c2'
  };

  const portTitleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    margin: 0
  };

  const dateStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    margin: 0
  };

  const etaEtdStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 500,
    color: '#666666'
  };

  const milestoneRowStyle: React.CSSProperties = {
    marginBottom: '10px'
  };

  const milestoneKeyStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: '#666666'
  };

  const milestoneValueStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: '#333333'
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px'
  };
  return (
    <div style={containerStyle}>
      <div style={mainContainerStyle}>
        <Row gutter={24}>
          {/* Main Route Visualization */}
          <Col>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {groupedEntries.map((group, groupIndex) => (
                <React.Fragment key={`${group.term}-${group.port}-${groupIndex}`}>
                  {/* Port Section */}
                  <Space align="center" size="small" style={{ width: '100%' }}>
                    <div style={iconContainerStyle}>
                      <EnvironmentOutlined style={{ fontSize: '24px', color: '#333333' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        {group.entries.map((entry: { term: any; departureArrival: string; port: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, entryIndex: any) => (
                          <Card 
                            key={`${entry.term}-${entry.departureArrival}-${entryIndex}`} 
                            style={portCardStyle}
                            bodyStyle={{ padding: '10px' }}
                          >
                            <Row justify="space-between" align="middle">
                              <Col>
                                <Title level={5} style={portTitleStyle}>
                                  {entry.port}
                                </Title>
                              </Col>
                              <Col>
                                <Text style={etaEtdStyle}>
                                  {entry.departureArrival === 'Departure' ? 'ETD:' : 'ETA:'}
                                </Text>
                              </Col>
                              <Col>
                                <Title level={5} style={dateStyle}>
                                  {entry.date}
                                </Title>
                              </Col>
                            </Row>
                          </Card>
                        ))}
                      </Space>
                    </div>
                  </Space>

                  {/* Vessel Section - Show vessel after this port group (except for the last group) */}
                  {groupIndex < groupedEntries.length - 1 && (
                    <div style={vesselStyle}>
                      <Space align="center" size="large" style={{ width: '100%' }}>
                        <FaShip style={{ fontSize: '20px', color: '#666666' }} />
                        <div>
                          <Text style={vesselTextStyle}>
                            {group.entries[group.entries.length - 1].vesselVoyage}
                          </Text>
                          {/* Add red dashed line for specific vessels if needed */}
                          {group.entries[group.entries.length - 1].vesselVoyage === 'Maerks 552' && (
                            <div style={{
                              height: '2px',
                              width: '96px',
                              marginTop: '4px',
                              background: 'repeating-linear-gradient(to right, #ff4d4f 0%, #ff4d4f 4px, transparent 4px, transparent 8px)'
                            }}></div>
                          )}
                        </div>
                      </Space>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </Space>
          </Col>

          {/* Vertical Divider */}
          <Col>
            <Divider type="vertical" style={{ height: '100%', borderColor: '#d9d9d9' }} />
          </Col>

          {/* Cutoffs Card Sidebar */}
          <Col style={{ width: '240px' }}>
            <Card 
              title="Cut-off Dates"
              style={{ 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
              headStyle={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#333333',
                backgroundColor: '#fafafa',
                borderBottom: '1px solid #f0f0f0'
              }}
              bodyStyle={{ padding: '16px' }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Row justify="space-between" align="middle" style={milestoneRowStyle}>
                  <Col>
                    <Text style={milestoneKeyStyle}>SI:</Text>
                  </Col>
                  <Col>
                    <Text style={milestoneValueStyle}>{data.cutoff.si}</Text>
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" style={milestoneRowStyle}>
                  <Col>
                    <Text style={milestoneKeyStyle}>VGM:</Text>
                  </Col>
                  <Col>
                    <Text style={milestoneValueStyle}>{data.cutoff.vgm}</Text>
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" style={milestoneRowStyle}>
                  <Col>
                    <Text style={milestoneKeyStyle}>CY:</Text>
                  </Col>
                  <Col>
                    <Text style={milestoneValueStyle}>{data.cutoff.cy}</Text>
                  </Col>
                </Row>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TransportPlanNew;