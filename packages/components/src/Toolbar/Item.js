import React from 'react'
import Icon from '../Icon'

class Item extends React.Component {

  getMargin = () =>
    this.props.margin
      ? { margin: `0 ${this.props.margin}` }
      : { marginLeft: this.props.marginLeft, marginRight: this.props.marginRight }


  render () {
    return (
      <div className='toolbar-item toolbar-item-color' style={this.getMargin()} onClick={this.props.onClick}>
        {this.props.icon && <Icon type={this.props.icon} size={35} />}
        {this.props.title && <div className='disable-selection'>{this.props.title}</div>}
      </div>
    )
  }
}

export default Item
