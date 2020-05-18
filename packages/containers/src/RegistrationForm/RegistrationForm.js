import React from 'react'
import { request } from 'server'

import { Layout, Workspace, TextBox, Button } from 'components'

const text = 'Пожалуйста, подтвердите существующий адрес электронной почты, который зарегистрирован на Вас. Все почтовые сообщения с интернет-портала будут ' +
  'отсылаться на этот адрес. Адрес электронной почты будет использован только по Вашему желанию: для восстановления пароля или получения новостей и уведомлений'

class RegistrationForm extends React.Component {

  state = {
    eMail: null
  }

  register = () => request('registrationService/register', { mail: this.state.eMail })

  render () {
    return (
      <div className='full-size position-center'>
        <Workspace>
          <Layout>
            <Layout.Row>
              <Layout.Column size={40}>
                <TextBox value={text} readOnly/>
              </Layout.Column>
            </Layout.Row>
            <Layout.Row>
              <Layout.Column size={20}>
                <TextBox placeholder='Адрес электронной почты' onChange={eMail => this.setState({ eMail })}/>
              </Layout.Column>
              <Layout.Column size={20}>
                <Button label='Отправить' onClick={this.register}/>
              </Layout.Column>
            </Layout.Row>
          </Layout>
        </Workspace>
      </div>
    )
  }
}

export default RegistrationForm
