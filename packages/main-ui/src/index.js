import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createHashHistory } from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'

import Root from './Root'

import '../../_styles/_main.global.less'

const history = createHashHistory({ baseName: '/' })
const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

render(
  <Provider store={store}>
    <Root history={history}/>
  </Provider>,
  document.getElementById('root')
)