import { login } from './api'

export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST'
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_FAILED = 'USER_AUTH_FAILED'

export const userAuthRequest = () => ({ type: USER_AUTH_REQUEST })
export const userAuthSuccess = token => ({ type: USER_AUTH_SUCCESS, token })
export const userAuthFailed = err => ({ type: USER_AUTH_FAILED, err })

export const authenticate = (username, password) => {
  return dispatch => {

    // set loading state
    dispatch(userAuthRequest())

    // request login
    return login(username, password)
      .then(token => dispatch(userAuthSuccess(token)))
      .catch(err => dispatch(userAuthFailed(err)))
  }
}
