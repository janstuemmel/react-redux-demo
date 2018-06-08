import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authenticate } from '../actions'

import Login from '../components/login'

const mapDispatchToProps = dispatch => ({
  login: (...args) => dispatch(authenticate(...args)) 
})

const mapStateToProps = state => ({ 
  err: state.err, 
  loading: state.loading, 
  token: state.token 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))