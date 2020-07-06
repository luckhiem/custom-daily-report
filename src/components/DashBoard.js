import React from 'react'
import { Row, Col, Card } from 'antd'
import { getPercentage } from '@/untils'
import { Consumer } from '../contexts/expand'

const MyCardItem = ({
  labelColor,
  label,
  title,
  content,
  clickHander,
}) => <Card
  onClick={clickHander}
  bodyStyle={{ padding: '12px' }}
  hoverable>
    <p className='card_item_label' style={{ color: labelColor }}>
      {label}
    </p>
    <p className='card_item_title' style={{ color: labelColor }}>{title}</p>
    <p className='card_item_content'>{content}</p>
  </Card>



export default class DashBoard extends React.Component{
  render() {
    const totalTestCase = this.props.dataDashboard.totalTestCase;
    const totalAutomationTest = this.props.dataDashboard.totalAutomationTest;

    const TotalTask = {
      title: totalTestCase,
      content: 'Total Test Case'
    }
    const OnProgressTask = {
      title: totalAutomationTest,
      content: 'Automation Test Case'
    }

    const cardsList = [TotalTask, OnProgressTask]
    const TaskDone = {
      title: totalTestCase - totalAutomationTest,
      content: 'Percent Auto Test Case',
      label: `${getPercentage(totalAutomationTest, totalTestCase)} %`,
      labelColor: '#d466d6',
    }
    cardsList.push(TaskDone)
    const length = cardsList.length
    const gutter = (24 % length) ? 0 : 12
    return (
      <Consumer>
        {
          ({ toggleExpand }) => (
            <div className='dash_board'>
              <Row
                gutter={gutter}
                type='flex'
                justify='space-around'>
                {
                  cardsList.map(item =>
                    <Col key={item.content} span={Math.floor(24 / length)}>
                      <MyCardItem
                        {...item}
                        clickHander={item.clickHander && item.clickHander(toggleExpand)} />
                    </Col>
                  )
                }
              </Row>
            </div>
          )
        }
      </Consumer>
    )
  }
}