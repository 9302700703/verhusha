import React from 'react'

import { Workspace, Layout, Toolbar, TextBox } from 'components'

class UserEditForm extends React.Component {
  render () {
    return (
      <div className='under-toolbar position-top-left'>
        <Toolbar>
          <Toolbar.Item title='Сохранить'/>
          <Toolbar.Item title='Назад'/>
        </Toolbar>
        <Workspace>
          <Layout>
            <h2>Редактирование информации о пользователе</h2>
            <Layout.Row>
              <TextBox label='Имя пользователя'/>
            </Layout.Row>
            <Layout.Row>
              <TextBox label='Пароль'/>
            </Layout.Row>
          </Layout>
        </Workspace>
      </div>
    )
  }
}

export default UserEditForm
