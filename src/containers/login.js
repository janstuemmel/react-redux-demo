import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authenticate } from '../actions'

import Login from '../components/login'

const mapDispatchToProps = dispatch => ({
  login: (...args) => dispatch(authenticate(...args)) 
})

const mapStateToProps = state => ({ 
  err: state.auth.err, 
  loading: state.auth.loading, 
  token: state.auth.token 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))