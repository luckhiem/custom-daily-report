import React, { Component } from 'react'
import { BackTop, PageHeader, Descriptions } from 'antd'
import DashBoard from '../components/DashBoard'
import Information from '../components/Information'
import {
  AppstoreOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import '../styles/index.less'

class AnalystPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="site-page-header-ghost-wrapper" style={{ margin: '16px 0' }}>
          <PageHeader
            ghost={false}
            title="Title"
            subTitle="This is a subtitle">
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Association"><a>421421</a>
              </Descriptions.Item>
              <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
              <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
              <Descriptions.Item label="Remarks">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <BackTop />
          <h3 className='area_subject'><AppstoreOutlined /> Dashboard</h3>
          <DashBoard dataDashboard={this.props.dataDashboard} />
          <h3 className='area_subject'><PieChartOutlined /> Information</h3>
          <Information dataInformation={this.props.dataInformation} />
        </div>
      </div>
    )
  }
}

export default AnalystPage
