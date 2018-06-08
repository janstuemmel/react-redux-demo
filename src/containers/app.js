import React from 'react'
import { connect } from 'react-redux'

import App from '../components/app'

import { logout } from '../actions'

const mapStateToProps = state => ({ 
  err: state.err, 
  loading: state.loading, 
  token: state.token 
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)