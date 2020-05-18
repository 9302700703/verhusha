import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {

  render () {
    const radius = this.props.size / 4
    const sqrt = Math.sqrt(0.5)
    const a = this.props.size / 2 - sqrt * radius
    const b = this.props.size / 2 + sqrt * radius * 2
    return <svg width={b} height={b} className='toolbar-item-color'>
      <circle cx={a} cy={a} r={radius} fill='transparent' strokeWidth='2px'/>
      <path
        d={`M${this.props.size / 2} ${this.props.size / 2} L${b} ${b}`}
        strokeWidth='2px'/>
    </svg>
  }
}

Search.defaultProps = {
  size: 30
}

Search.propTypes = {
  size: PropTypes.number
}

export default Search