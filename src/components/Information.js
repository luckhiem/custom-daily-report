import React from 'react'
import { Row, Col, Card } from 'antd'
import {
  PieChartFilled,
  BoxPlotFilled,
  ClockCircleFilled,
  FolderFilled,
  CompassFilled,
} from '@ant-design/icons'
import SimplePieChart from '../charts/SimplePieChart.js';
import SimpleBarChart from '../charts/SimpleBarChart.js';
import '../styles/information.less'

const date = new Date().toDateString();

const LabelInfo = ({ title, icon, context }) =>
  <p>
    <span className='label_title'>{icon} {title}</span>
    <span>{context}</span>
  </p>


export default class Information extends React.Component {
  render() {
    return (
      <Row>
        <Col span={14}>
          <p className='chart_title'><PieChartFilled style={{ marginRight: '10px' }} />Total Test</p>
          <SimpleBarChart dataTest={this.props.dataInformation} />
        </Col>
        <Col span={10}>
          <p className='chart_title'><PieChartFilled style={{ marginRight: '10px' }} />Ratio</p>
          <SimplePieChart dataTest={this.props.dataInformation} />
        </Col>
        <Col span={24} className='main_information'>
          <Card>
            <Row span={24}>
              <Col span={16}>
                <LabelInfo title='Date' context={date} icon={<BoxPlotFilled />} />
                <LabelInfo title='Time' context={date} icon={<ClockCircleFilled />} />
                <LabelInfo title='Employee' context="Bui Minh Tuan" icon={<FolderFilled />} />
              </Col>
              <Col span={8}>
                <LabelInfo title='Time Work' context={8} icon={<CompassFilled />} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}