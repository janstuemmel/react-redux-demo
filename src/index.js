import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import Root from './components/root'

import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>    
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default)
  })
}
