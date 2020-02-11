import React from 'react'
import { connect } from 'react-redux'
import { HashRouter, Switch, Route, Router } from 'react-router-dom'
import { push, goBack } from 'react-router-redux'
import { StartPage } from 'containers'



class Root extends React.Component {
  render () {
    return (
      <div>
        <StartPage>
          <Router history={this.props.history}>
            <Route exact path='/' component={(props) => {
              return <button onClick={() => this.props.push('/ttt')}>ttt</button>
            }}/>
            <Route exact path='/ttt' component={(props) => {
              return <button onClick={() => this.props.goBack()}>---</button>
            }}/>
          </Router>
        </StartPage>
      </div>
    )
  }
}

export default connect(
    null, { push, goBack }
)(Root)
