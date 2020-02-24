import React from 'react'

class Row extends React.Component {

  render () {
    return (
      <div className='layout-row'>
        {this.props.children}
      </div>
    )
  }

}

export default Row
