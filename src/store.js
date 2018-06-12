import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { loadingBarMiddleware } from 'react-redux-loading-bar'

import app from './reducers'

const errorReporter = store => next => action => {
  if (action.err) {
    console.error(action.err.message)
  }
  next(action)
}

const loadingBar = loadingBarMiddleware({
  promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILED'],
})

export default function configureStore() {
  const store = createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger, loadingBar)
  )

  return store
}
