import React from 'react'
import { connect } from 'react-redux'

import App from '../components/app'

import { logout } from '../actions'

const mapStateToProps = state => ({ 
  err: state.auth.err, 
  loading: state.auth.loading, 
  token: state.auth.token 
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)