import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import PrivateRoute from '../containers/privateRoute'
import Login from '../containers/login'
import App from '../containers/app'


export default () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute component={App} />
    </Switch>
  )
}