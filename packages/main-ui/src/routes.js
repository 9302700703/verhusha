import React from 'react'
import { Contact, RegistrationForm } from 'containers'

export default [
  {
    path: '/',
    component: () => <div>
      <div>asdfasdf</div>
      <div>asdfafd</div>
    </div>,
  },
  {
    path: '/regist',
    component: RegistrationForm
  },
  {
    path: '/contact',
    component: Contact
  }
]
