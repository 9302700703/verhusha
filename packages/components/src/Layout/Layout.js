import React from 'react'
import Row from './Row'
import Column from './Column'

class Layout extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Layout.Row = Row
Layout.Column = Column

export default Layout
