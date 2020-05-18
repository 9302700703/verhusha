import React from 'react'
import { Contact, LoginPage, RegistrationForm, TestBranch, UserEditForm } from 'containers'
import { Grid } from 'components'

export default [
  {
    path: '/',
    component: () => <div>
      {/*<div>asdfasdf</div>*/}
      {/*<div>asdfafd</div>*/}
    </div>,
  },
  {
    path: '/regist',
    component: RegistrationForm
  },
  {
    path: '/user',
    component: UserEditForm
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/testBranch',
    component: TestBranch
  },
  {
    path: '/loginPage',
    component: LoginPage
  },
  {
    path: '/grid',
    component: () =>
      <div className='under-toolbar position-top-left' style={{ height: 500, width: 700 }}>
        <Grid
          data={{
            columns: [
              { col: 'A', width: 60 },
              { col: 'C', width: 60 }
            ],
            rows: {
              '0': {
                values: [
                  { col: 'A', value: 'value1' },
                  { col: 'C', value: 'value3' }
                ],
                height: 70
              },
              '2': {
                values: [
                  { col: 'C', value: 'value2' }
                ],
                height: 50
              }
            }
          }}
          columns={[
            {
              // key: 'id',
              column: 'A',
              // name: 'ИД',
              width: 30
            },
            {
              // key: 'name',
              column: 'C',
              name: 'Наименование',
              width: 60
            }
          ]}
          rows={{
            '0': {
              values: [
                { column: 'A', value: 'value1' },
                { column: 'C', value: 'value3' }
              ],
              height: 70
            },
            '3': {
              values: [
                { column: 'C', value: 'value2' }
              ],
              height: 50
            }
          }}
          // rows={[
          //   { id: 1, name: 'name1', index: 'A' },
          //   { id: 2, name: 'name2', index: 'C' }
          // ]}
        /></div>
  }
]
