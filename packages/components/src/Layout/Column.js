import React from 'react'

class Column extends React.Component{

  render () {
    return (
      <div className='layout-column' style={{ width: this.props.size + 'vw'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Column
