import React from 'react'
import { Page1, Page2 } from 'containers'

export default [
  {
    path: '/',
    component: () => <div>main</div>,
    children: [
      {
        path: 'page1',
        component: Page1,
        children: [
          {
            path: 'page1',
            component: Page1
          }
        ]
      },
      {
        path: 'page2',
        component: Page2
      }
    ]
  }
]
