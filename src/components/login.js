import React from 'react'
import { Redirect } from 'react-router-dom'

import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Checkbox from 'antd/lib/checkbox'
import Alert from 'antd/lib/alert'

const FormItem = Form.Item

export default ({ token, login, err, loading, location }) => {

  let username, password
  
  const { from } = location.state || { from: { pathname: '/' } }

  const onSubmit = e => {
    e.preventDefault()
    login(username, password)
  }

  if (token) {
    return <Redirect to={from} />
  }

  return (
    <div style={styles.wrapper}>
      <Form onSubmit={onSubmit}>
        <FormItem>
          <Input
            size="large"
            placeholder="Email"
            type="text"             
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            onChange={ e => username = e.target.value } 
          />
        </FormItem>
        <FormItem>
          <Input
            size="large"          
            placeholder="Password"              
            type="password" 
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            onChange={ e => password = e.target.value } 
          />
        </FormItem>
        <FormItem>
          <Checkbox>Remember me</Checkbox>
          <Button 
            size="large"          
            icon="unlock"
            type="primary" 
            htmlType="submit" 
            style={styles.loginButton} loading={loading}>Log in</Button>
        </FormItem>
      </Form>
      { err ? <Alert message={err.message} type="error" closable showIcon /> : null }
    </div>
  )
}

const styles = {
  wrapper: {
    padding: 10,
    margin: '0 auto',
    maxWidth: 350,
    paddingTop: 50,
  },
  loginButton: { 
    width: '100%'
  }
}