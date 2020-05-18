import React from 'react'
import PropTypes from 'prop-types'

import './textBox.less'

class TextBox extends React.Component {

  onChange = e => {
    this.props.onChange && this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div>
        {this.props.label && <div className='text-box-label'>{this.props.label}</div>}
        {this.props.readOnly && <div className='text-box-read-only'>{this.props.value}</div>}
        {!this.props.readOnly && <input
          className={'text-box'}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        />}
      </div>
    )
  }
}

TextBox.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
}

export default TextBox
