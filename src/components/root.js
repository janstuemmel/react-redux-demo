import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import LoadingBar from 'react-redux-loading-bar'

import PrivateRoute from '../containers/privateRoute'
import Login from '../containers/login'
import App from '../containers/app'

export default () => {
  return (
    <div>
      <LoadingBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute component={App} />
      </Switch>
    </div>
  )
}