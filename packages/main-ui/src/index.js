import React from 'react'
import { render } from 'react-dom'
import Ttt from 'containers'

import '../../_styles/_main.global.less'

render(
  <div className='ttt'>
    <Ttt/>
  </div>,
  document.getElementById('root')
)