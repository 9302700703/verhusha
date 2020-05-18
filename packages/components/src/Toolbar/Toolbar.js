import React from 'react'
import Item from './Item'

class Toolbar extends React.Component {
  render () {
    return (
      <div>
        <div className='toolbar' style={{ justifyContent: 'flex-start' }}>
          <div className='toolbar-line'/>
          {this.props.children.filter(child => child.props.left)}
        </div>
        <div className='toolbar1'>
          <div className='toolbar-line'/>
          {this.props.children.filter(child => !child.props.left)}
        </div>
      </div>
    )
  }
}

Toolbar.Item = Item

export default Toolbar
