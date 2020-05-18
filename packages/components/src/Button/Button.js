import React from 'react'
import PropTypes from 'prop-types'

import './button.less'

class Button extends React.Component {

  state = {
    buttonColor: '#F5F5FF'
  }

  render() {
    return (
      <div>
        <div className='button' style={{ backgroundColor: this.state.buttonColor }}
             onClick={this.props.onClick}
             onMouseEnter={() => this.setState({ buttonColor: '#E0E0FF' })}
             onMouseLeave={() => this.setState({ buttonColor: '#F5F5FF' })}
             onMouseDown={() => this.setState({ buttonColor: '#D0D0FF' })}
             onMouseUp={() => this.setState({ buttonColor: '#E0E0FF' })}
        >{this.props.label}</div>
      </div>
    )
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
