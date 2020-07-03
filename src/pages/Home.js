import React, { Component } from 'react'
import { BackTop, Switch } from 'antd'
import TableItem from '../components/Table'
import DashBoard from '../components/DashBoard'
import Information from '../components/Information'
import {
  GoldOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  ProfileOutlined,
} from '@ant-design/icons';


const dataDashboard = {
  numTotalTask: 100,
  numOnProgressTask: 67,
  numFinishTask: 10,
}

const taskInfo = {
  testResults: [{
    id: "KPB-1",
    project_id: "project custom report",
    status: "In Progress",
    name: "Khiem Luc",
    description: "Make Mary a sandwich.",
    cost: 3,
    priority: 0,
    tags: "",
    recurring_schedule: null,
    created_at: "2018-01-01T12:00:00.000+01:00",
    updated_at: "2018-01-01T12:00:00.000+01:00",
    deleted_at: null,
  },
  {
    id: "KPB-2",
    project_id: "project custom report",
    status: "In Progress",
    name: "Khiem Luc",
    description: "Make Mary a sandwich.",
    cost: 5,
    priority: 0,
    tags: "",
    recurring_schedule: null,
    created_at: "2018-01-01T12:00:00.000+01:00",
    updated_at: "2018-01-01T12:00:00.000+01:00",
    deleted_at: null,
  }]
}

class HomePage extends Component {
  state = {
    ...window.realData,
    globalExpandState: window.realData._reporterOptions.expand || false,
    dataDashboard: dataDashboard,
    taskInfo: taskInfo
  }
  render() {
    const { customInfos } = window.realData._reporterOptions
    let CustomInfoComp
    if (customInfos && customInfos.length > 0) {
      CustomInfoComp = (
        <>
          <h3 className='area_subject'><GoldOutlined />Custom Information</h3>
          <CustomInformation customInfos={customInfos} />
        </>
      )
    }
    return (
      <div>
        <BackTop />
        <h3 className='area_subject'><AppstoreOutlined /> Dashboard</h3>
        <DashBoard {...this.state.dataDashboard} />
        <h3 className='area_subject'><PieChartOutlined /> Information</h3>
        <Information {...this.state.taskInfo} />
        {/* <h3 className='area_subject expand_box'>
          <span><ProfileOutlined /> Details</span>
          <span className='expand_title'>
            <span className='text'>Expand All</span>
            <Switch
              onChange={(checked) => this.setState({ globalExpandState: checked })}
              checked={this.state.globalExpandState} />
          </span>
        </h3> */}
        {/* <div style={{ background: '#fff', padding: 12 }}>
          <TableItem {...this.state} />
        </div> */}
      </div>
    )
  }
}

export default HomePage
