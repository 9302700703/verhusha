import React from 'react'
import Item from './Item'

class Toolbar extends React.Component {
  render () {
    return (
      <div className='toolbar'>
        <div className='toolbar-line'/>
          {this.props.children}
      </div>
    )
  }
}

Toolbar.Item = Item

export default Toolbar
