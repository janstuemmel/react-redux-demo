import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import clientLocalStorage from './util/localStorage'

import {
  USER_AUTH_SUCCESS,
  USER_AUTH_REQUEST,
  USER_AUTH_FAILED,
  USER_AUTH_LOGOUT
} from './actions';

const initialAuthState = {
  token: clientLocalStorage.getItem('token') || null,
  err: null,
  loading: false
}

function auth(state = initialAuthState, action) {

  switch(action.type) {

    case USER_AUTH_REQUEST:
      return { ...state, loading: true, err: null }

    case USER_AUTH_SUCCESS:
      return { ...state, token: action.token, loading: false, err: null }

    case USER_AUTH_FAILED:
      return { ...state, err: action.err, loading: false }

    case USER_AUTH_LOGOUT:
      return { ...state, token: null, err: null }

    default:
      return state
  }
}

export default combineReducers({
  auth,
  loadingBar: loadingBarReducer  
})