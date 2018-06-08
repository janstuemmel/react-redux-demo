import React from 'react'
import { Redirect } from 'react-router-dom'

export default ({ token, login, err, loading, location }) => {

  let username, password
  
  const { from } = location.state || { from: { pathname: '/' } }

  const onSubmit = e => {
    e.preventDefault()
    login(username.value, password.value)
  }

  if (token) {
    return <Redirect to={from} />
  }

  return (
    <div>
      <p>{err ? err.message : 'Please login'}</p>
      <p>{loading ? 'Loading' : ''}</p>      
      <form onSubmit={onSubmit}>
        <input type="text" ref={node => username = node} />
        <input type="password" ref={node => password = node} />
        <input type="submit" />
      </form>
    </div>
  )
}