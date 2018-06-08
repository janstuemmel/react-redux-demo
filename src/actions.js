import { login } from './api'
import clientLocalStorage from './util/localStorage'

export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST'
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_FAILED = 'USER_AUTH_FAILED'
export const USER_AUTH_LOGOUT = 'USER_AUTH_LOGOUT'

export const userAuthRequest = () => ({ type: USER_AUTH_REQUEST })
export const userAuthSuccess = token => ({ type: USER_AUTH_SUCCESS, token })
export const userAuthFailed = err => ({ type: USER_AUTH_FAILED, err })
export const userAuthLogout = () => ({ type: USER_AUTH_LOGOUT })

export const authenticate = (username, password) => {
  
  return dispatch => {

    // set loading state
    dispatch(userAuthRequest())

    // request login
    return login(username, password)
      .then(token => {

        // save token on the client
        clientLocalStorage.setItem('token', token)
        
        dispatch(userAuthSuccess(token))
      })
      .catch(err => dispatch(userAuthFailed(err)))
  }
}


export const logout = () => {

  return dispatch => {

    // remove local token
    clientLocalStorage.removeItem('token')
  
    dispatch(userAuthLogout())
  }
}