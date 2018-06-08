import clientLocalStorage from './util/localStorage'

import {
  USER_AUTH_SUCCESS,
  USER_AUTH_REQUEST,
  USER_AUTH_FAILED,
  USER_AUTH_LOGOUT
} from './actions';

const initialState = {
  token: clientLocalStorage.getItem('token') || null,
  error: null,
  loading: false
}

function rootReducer(state = initialState, action) {

  switch(action.type) {

    case USER_AUTH_REQUEST:
      return { ...state, loading: true }

    case USER_AUTH_SUCCESS:
      return { ...state, token: action.token, loading: false }

    case USER_AUTH_FAILED:
      return { ...state, err: action.err, loading: false }

    case USER_AUTH_LOGOUT:
      return { ...state, token: null }

    default:
      return state
  }
}

export default rootReducer
