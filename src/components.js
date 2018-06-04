import React from 'react'
import { LoginFormContainer } from './containers'

export const App = ({ token, loading, err }) => {

  if (token) {
    return <div>youre logged in! Token is "{token}"</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>{err ? err.message : 'Please login'}</p>
      <LoginFormContainer />
    </div>
  )
}


export const LoginForm = ({ login }) => {

  let username, password

  const onSubmit = e => {
    e.preventDefault()
    login(username.value, password.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={node => username = node} />
      <input type="password" ref={node => password = node} />
      <input type="submit" />
    </form>
  )
}

export const AuthBoundary = ({ token, children }) => {

  if (!token) {
    return <LoginFormContainer />
  }

  return children
}
