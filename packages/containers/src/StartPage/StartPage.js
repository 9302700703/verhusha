import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'

import { ReplaceContent } from 'components'

import dogs from './backgroundImages'

class StartPage extends React.Component {
  render () {
    return (
      <div className='startPage'>
        <div className='topToolbar'>
          <button onClick={() => this.props.push('/')}>---</button>
        </div>
        <div className='background'>
          <ReplaceContent interval={6000} duration={1000} components={dogs}/>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(null, { push, goBack })(StartPage)
