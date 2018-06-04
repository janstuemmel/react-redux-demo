import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { AppContainer } from './containers'

import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default)
  })
}
