import React from 'react'

class Workspace extends React.Component {
  render () {
    return (
      <div className='workspace'>
        {this.props.children}
      </div>
    )
  }
}

export default Workspace
