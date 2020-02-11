import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'

import Root from './Root'

import '../../_styles/_main.global.less'

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  {},
  compose(
    applyMiddleware(
      routerMiddleware({}),

    )
  )
)

render(
  <Provider store={{}}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)