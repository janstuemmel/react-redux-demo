import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'

import PrivateRoute from '../containers/privateRoute'

import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import Breadcrumb from 'antd/lib/breadcrumb'
import Icon from 'antd/lib/icon'
import Avatar from 'antd/lib/avatar'
import Dropdown from 'antd/lib/dropdown'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Dummy = ({ match }) => <div>Route {match.url}</div>
const NotFound = ({ location }) => <div>404! {location.pathname} not found.</div>

export default ({ token, logout }) => {

  const userMenu = (
    <Menu>
      <Menu.Item><span>Settings</span></Menu.Item>
      <Menu.Item onClick={logout}>Logout</Menu.Item>
    </Menu>
  )

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0, borderBottom: '1px solid #ddd' }}>  
        <div style={styles.logo} />
          <div style={{ textAlign: 'right', marginRight: '15px' }}>
            <Dropdown overlay={userMenu}>
              <Avatar size="large" style={{ backgroundColor: 'green' }}>JS</Avatar>
            </Dropdown>
          </div>
      </Header>
      <Layout>
        <Sider style={{ height: 'calc(100vh - 65px)', background: '#fff' }}>
          <Menu theme="light" mode="horizontal" mode="inline">
            <Menu.Item><Link to="/">Home</Link></Menu.Item>
            <Menu.Item><Link to="/other">Other</Link></Menu.Item>
            <Menu.Item><Link to="/other2">Other2</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <div style={{ padding: 10 }}>
            <Switch>
              <Route exact path="/" component={() => <div>Root, token is {token}</div>} />
              <Route path="/other" component={Dummy} />
              <Route path="/other2" component={Dummy} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}


const styles = {
  logo: {
    height: 31,
    width: 170,
    background: '#ddd',
    margin: 16,
    float: 'left'
  }
}