import React from 'react';
import 'antd/dist/antd.css';
import { hot } from 'react-hot-loader'
import './index.css';
import { Layout, Menu } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectPage1 from './pages/ProjectPage1';
import ProjectPage2 from './pages/ProjectPage2';
import data from './data.json';

const { Header, Content, Footer, Sider } = Layout;

const dataDashboard = {
    totalTestCase: data.dataTest[1].total,
    totalAutomationTest: data.dataTest[0].total,
}

const menuItems = {
    "Elite": [
        {
            "name": "Automation",
            "total": 120
        },
        {
            "name": "Total Test Case",
            "total": 300
        }
    ],
    "Luxury": [
        {
            "name": "Automation",
            "total": 120
        },
        {
            "name": "Total Test Case",
            "total": 300
        }
    ]
}
const generateMenu = () => {
    const menuData = Object.keys(menuItems);
    const menu = [];
    for (let i = 0; i < menuData.length; i++) {
        let index = i + 1;
        menu.push(
            < Menu.Item key={index} >
                <ProjectOutlined />
                <span>{menuData[i]}</span>
                <Link to={"/" + menuData[i]} />
            </Menu.Item >
        )
    }
    return menu
}

const generatePageData = () => {
    const menuKeys = Object.keys(menuItems)
    const menuPage = []
    for (let i = 0; i < menuKeys.length; i++) {
        let routeMenuItems = "/" + menuKeys[i];
        const dataDashboard = {
            totalTestCase: menuItems[menuKeys[i]][1].total,
            totalAutomationTest: menuItems[menuKeys[i]][0].total,
        }
        console.log(dataDashboard)
        menuPage.push(
            <Route exact path={routeMenuItems} component={() => <ProjectPage1 dataDashboard={dataDashboard}/>} />
        )
    }
    return menuPage
}

const menuGenerate = generateMenu(menuItems);
const pageGenerate = generatePageData(menuItems);


class SiderDemo extends React.Component {
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
                            {menuGenerate}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{
                            textAlign: "center",
                            fontSize: "large",
                        }}>Report</Header>
                        <Content style={{ margin: '0 16px' }}>
                            {pageGenerate}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>KhiemLuc Design ©2020</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default hot(module)(SiderDemo)
