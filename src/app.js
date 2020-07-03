import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Layout} from 'antd'
import HomePage from './pages/Home'
import FooterInfo from './components/FooterInfo'
import './styles/app.less'
import './styles/index.less'
import './styles/dashBoard.less'
import './styles/information.less'
import './styles/footer.less'
import { GithubFilled, AreaChartOutlined } from '@ant-design/icons'

const defaultTitle = 'Report'
const { Header, Content, Footer } = Layout
class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const IconComp = <a target='_blank' className='icon' href='https://github.com/luckhiem/custom-daily-report'><GithubFilled /></a>
    const logoImg = <a className='avatar' shape='square' size='large' style={{ marginRight: '0.5em' }} ><AreaChartOutlined /></a>
    return (
      <Layout className='layout'>
        <Header className='header'>
          {logoImg}
          <span>{defaultTitle}</span>
          {IconComp}
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <HomePage />
        </Content>
        <Footer style={{ marginTop: '50px', background: '#000' }}>
          <FooterInfo />
        </Footer>
      </Layout>
    )
  }
}

export default hot(module)(App)
