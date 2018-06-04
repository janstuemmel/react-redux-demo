import React from 'react'
import { connect } from 'react-redux'

import { authenticate } from './actions'
import { App, LoginForm } from './components' // careful, circular import

export const LoginFormContainer = connect(null, dispatch => ({
  login: (...args) => dispatch(authenticate(...args))
}))(LoginForm)

export const AppContainer = connect(state => state)(App)
