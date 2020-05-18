import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'

import { Icon, ReplaceContent, Toolbar } from 'components'

import dogs from './backgroundImages'

class StartPage extends React.Component {
  render () {
    return (
      <div className='startPage'>
        <Toolbar>
          <Toolbar.Item title='VITA-PET.RU' left onClick={() => this.props.push('')}/>
          <Toolbar.Item title='Регистрация' onClick={() => this.props.push('regist')}/>
          {/*<Toolbar.Item title='Контакты' onClick={() => this.props.push('contact')}/>*/}
          {/*<Toolbar.Item title='Grid' onClick={() => this.props.push('grid')}/>*/}
          {/*<Toolbar.Item title='TestBranch' onClick={() => this.props.push('testBranch')}/>*/}
          <Toolbar.Item title='Вход' onClick={() => this.props.push('loginPage')}/>
          <Toolbar.Item icon={Icon.Types.SEARCH} />
        </Toolbar>
        <div className='background'>
          <ReplaceContent interval={15000} duration={1000} components={dogs}/>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(null, { push, goBack })(StartPage)
