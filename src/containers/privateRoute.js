import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ token, component: Component, ...rest }) => {
    
  const render = props => {
    
    if(token) {
      return <Component {...props} />
    }

    return <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
  }
  
  return <Route {...rest} render={render} />
}

const mapStateToProps = state => ({ token: state.auth.token })

export default connect(mapStateToProps)(PrivateRoute)
