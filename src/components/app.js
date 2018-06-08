import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'

import PrivateRoute from '../containers/privateRoute'

const Dummy = ({ match }) => <div>Route {match.url}</div>

const NotFound = ({ location }) => {
  return <div>404! {location.pathname} not found.</div>
}

export default ({ token, logout }) => {

  const onLogout = e => {
    e.preventDefault()
    logout()
  }

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>        
        <li><Link to="/other">Other</Link></li>
        <li><Link to="/other2">Other2</Link></li>
        <li><Link to="/not-exists">404</Link></li>            
        <li><Link to="/login">Login</Link></li>
        <li><a href="#" onClick={onLogout}>Logout</a></li>
      </ul>  
      <Switch>
        <Route exact path="/" component={() => <div>Root, token is {token}</div>} />
        <Route path="/other" component={Dummy} />
        <Route path="/other2" component={Dummy} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
