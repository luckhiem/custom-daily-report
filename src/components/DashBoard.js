import React from 'react'
import { Row, Col, Card } from 'antd'
import { getPercentage, scrollTo } from '@/untils'
import { Consumer } from '../contexts/expand'

export const MyCardItem = ({
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

const getScrollDownFunc = test => toggleExpand => () => test && scrollTo(test.testFilePath, toggleExpand)

const DashBoard = ({
  numTotalTask,
  numOnProgressTask,
  numFinishTask,
}) => {
  const TotalTask = {
    title: numTotalTask,
    content: 'Total Task'
  }
  const OnProgressTask = {
    title: numOnProgressTask,
    content: 'On Progress Task'
  }

  const FinishTask = {
    title: numFinishTask,
    content: 'Finished Task'
  }

  const numTaskDone = numFinishTask;
  const numTaskRemain = numTotalTask - numFinishTask;

  const cardsList = [TotalTask, OnProgressTask, FinishTask]
  if (numTaskDone) {
    const TaskDone = {
      title: numFinishTask,
      content: 'Percent Task Done',
      label: `${getPercentage(numFinishTask, numTotalTask)} %`,
      labelColor: '#d466d6',
      // clickHander: getScrollDownFunc(todoTest),
    }
    cardsList.push(TaskDone)
  }
  if (numTaskRemain) {
    const TaskRemain = {
      title: numTaskRemain,
      content: 'Percent Task Remain',
      label: `${getPercentage(numTaskRemain, numTotalTask)} %`,
      labelColor: '#cf1322',
      // clickHander: getScrollDownFunc(execErrorTest),
    }
    cardsList.push(TaskRemain)
  }
  const length = cardsList.length
  const gutter = (24 % length) ? 0 : 12
  return <Consumer>
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
}

export default DashBoard
