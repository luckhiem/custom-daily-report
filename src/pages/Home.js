import React, { Component } from 'react'
import { BackTop } from 'antd'
import DashBoard from '../components/DashBoard'
import Information from '../components/Information'
import {
  AppstoreOutlined,
  PieChartOutlined,
} from '@ant-design/icons';


const dataDashboard = {
  totalTestCase: 100,
  totalAutomationTest: 67,
  numFinishTask: 10,
}

class HomePage extends Component {
  state = {
    dataDashboard: dataDashboard,
  }
  render() {
    return (
      <div>
        <BackTop />
        <h3 className='area_subject'><AppstoreOutlined /> Dashboard</h3>
        <DashBoard {...this.state.dataDashboard} />
        <h3 className='area_subject'><PieChartOutlined /> Information</h3>
        <Information />
      </div>
    )
  }
}

export default HomePage
