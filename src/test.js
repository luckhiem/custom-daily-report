import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import logo from './asset/linkedin.svg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectPage1 from './pages/ProjectPage1';
import ProjectPage2 from './pages/ProjectPage2';
import data from './data.json';

const { Header, Content, Footer, Sider } = Layout;

const dataDashboard = {
    totalTestCase: data.dataTest[1].total,
    totalAutomationTest: data.dataTest[0].total,
}

export default class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        dataDashboard: dataDashboard,
        location: this.props.location
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={[this.state.location]} mode="inline">
                            <Menu.Item key="1">
                                <ProjectOutlined />
                                <span>ProjectPage1</span>
                                <Link to="/ProjectPage1" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <ProjectOutlined />
                                <span>ProjectPage2</span>
                                <Link to="/ProjectPage2" />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{
                            textAlign: "center",
                            fontSize: "large",
                        }}>Report</Header>
                        <Content style={{ margin: '0 16px' }}>
                            <Route exact path="/ProjectPage1" component={ProjectPage1} />
                            <Route exact path="/ProjectPage2" component={ProjectPage2} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>KhiemLuc Design ©2020</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}