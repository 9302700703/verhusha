import React from 'react'

import { Layout, Workspace } from 'components'

class RegistrationForm extends React.Component {
  render () {
    return (
      <div className='full-size position-center'>
        <Workspace>
          <Layout>
            <Layout.Row>
              <Layout.Column size={40}>
                Пожалуйста, подтвердите существующий адрес электронной почты, который зарегистрирован на Вас. Все почтовые сообщения с интернет-портала будут отсылаться на этот адрес. Адрес электронной почты будет использован только по Вашему желанию: для восстановления пароля или получения новостей и уведомлений
              </Layout.Column>
            </Layout.Row>
            <Layout.Row>
              <Layout.Column size={20}><input/></Layout.Column>
              <Layout.Column size={20}><button>Отправить</button></Layout.Column>
            </Layout.Row>
          </Layout>
        </Workspace>
      </div>
    )
  }
}

export default RegistrationForm
