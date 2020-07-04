import React, { Component } from 'react'
import { BackTop } from 'antd'
import DashBoard from '../components/DashBoard'
import Information from '../components/Information'
import {
  AppstoreOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import data from '../data.json';

const dataDashboard = {
  totalTestCase: data.dataTest[1].total,
  totalAutomationTest: data.dataTest[0].total,
}

class ProjectPage2 extends Component {
  state = {
    dataDashboard: dataDashboard,
  }
  render() {
    return (
      <div>
        <BackTop />
        <h3 className='area_subject'><AppstoreOutlined /> Dashboard Dashbord</h3>
        <DashBoard {...this.state.dataDashboard} />
        <h3 className='area_subject'><PieChartOutlined /> Information Information</h3>
        <Information />
      </div>
    )
  }
}

export default ProjectPage2
