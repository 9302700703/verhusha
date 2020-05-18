import React from 'react'
import PropTypes from 'prop-types'

class Row extends React.Component {

  render () {
    return (
      <div className={`layout-row${this.props.position ? ' layout-row-' + this.props.position : ''}`}>
        {this.props.children}
      </div>
    )
  }

}

Row.Position = {
  RIGHT: 'right',
  LEFT: 'left',
  CENTER: 'center'
}

Row.propTypes = {
  position: PropTypes.oneOf([ Row.Position.RIGHT, Row.Position.LEFT, Row.Position.CENTER ])
}

export default Row
