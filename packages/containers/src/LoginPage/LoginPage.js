import React from 'react'
import { connect } from 'react-redux'
import { push } from "react-router-redux";

import { login } from 'server'
import { Layout, Workspace, TextBox, Button } from 'components'

class LoginPage extends React.Component {

  state = {
    login: null,
    password: null
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keyPress)
  }

  keyPress = e => e.keyCode === 13 && this.login()

  login = () => login(this.state.login, this.state.password)

  render () {
    return (
      <div className='full-size position-center'>
        <Workspace>
          <Layout>
            <Layout.Column size={50}>
              <Layout.Row>
                <TextBox value='Для полного доступа к услугам VITA-PET.RU необходимо авторизоваться или зарегистрироваться' readOnly/>
              </Layout.Row>
              <Layout.Row>
                <TextBox placeholder='Введите логин' onChange={login => this.setState({ login })}/>
              </Layout.Row>
              <Layout.Row>
                <TextBox placeholder='Введите пароль'  onChange={password => this.setState({ password })}/>
              </Layout.Row>
              <Layout.Row position={Layout.Row.Position.RIGHT}>
                <div>
                  <Button label='Зарегестрироваться' onClick={() => this.props.push('regist')}/>
                  <Button label='Войти' onClick={this.login}/>
                </div>
              </Layout.Row>
            </Layout.Column>
          </Layout>
        </Workspace>
      </div>
    )
  }
}

export default connect(null, { push })(LoginPage)
