import React from 'react'
import { render } from 'react-dom'
import Ttt from 'containers'
// import { Router, Route, Switch } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import Route from 'react-router-dom/es/Route'

import '../../_styles/_main.global.less'

render(
  <div className='ttt'>
    <HashRouter>
      <Route exact path='/' component={(props) => <div>
        {Object.keys(props).map((key, index) => {
          return <div key={index}>
            {key} {props[key]
              ? typeof props[key] === 'string'
                ? props[key]
                : Object.keys(props[key]).map((key2, index2) => {
                  return <div style={{ paddingLeft: 20 }}>{key2}: {typeof props[key][key2]}</div>
              })
              : 'undefined'
            }
          </div>
        })}
      </div>}/>
      <Route exact path='/ttt' component={() => <Link to='/'>---</Link>}/>
    </HashRouter>
  </div>,
  document.getElementById('root')
)