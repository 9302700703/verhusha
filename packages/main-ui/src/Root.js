import React from 'react'
import { connect } from 'react-redux'
import { HashRouter, Switch, Route, Router } from 'react-router-dom'
import { push, goBack } from 'react-router-redux'
import { StartPage } from 'containers'

import routes from './routes'

const getRoutes = (routes, parentPath) => {
  const result = []
  routes.forEach(item => {
    const path = parentPath ? parentPath + item.path + '/' : item.path
    result.push(<Route exact key={path} path={path} component={item.component} />)
    item.children && result.push(...getRoutes(item.children, path))
  })
  return result
}

class Root extends React.Component {
  render () {
    return (
      <div className='main'>
        <StartPage>
          <Router history={this.props.history}>
            {getRoutes(routes)}
          </Router>
        </StartPage>
      </div>
    )
  }
}

export default connect(
    null, { push, goBack }
)(Root)
