
export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST'
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_FAILED = 'USER_AUTH_FAILED'

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

export const userAuthRequest = () => ({ type: USER_AUTH_REQUEST })
export const userAuthSuccess = token => ({ type: USER_AUTH_SUCCESS, token })
export const userAuthFailed = err => ({ type: USER_AUTH_FAILED, err })

// example fetch
const login = (username, password) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === 'foo' && password === 'bar') {
        return res('t0000k3333n')
      }
      return rej(new Error('wrong credentials'))
    }, 200)
  })
}
