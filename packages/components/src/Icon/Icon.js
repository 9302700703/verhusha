import React from 'react'
import * as icons from './icons'

class Icon extends React.Component {

  render () {
    const Comp = icons[this.props.type]
    return (
      <div className='icon position-center'>
        <Comp size={this.props.size} />
      </div>
    )
  }
}

Icon.Types = {
  LOGO: 'Logo',
  SEARCH: 'Search'
}

export default Icon
