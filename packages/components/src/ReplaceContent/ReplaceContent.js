import React from 'react'
import { PropTypes } from 'prop-types'
import { round } from 'utils'
import { FPS } from './constants'

/**
 * Компонент предназначен для периодичной плавной смены переданного контента
 */
class ReplaceContent extends React.Component {

  state = {
    opacity: this.props.components.map((t, tt) => tt === 0 ? 1 : 0)
  }

  componentDidMount() {
    const { components, duration, interval } = this.props
    const opaFrame = round(FPS / duration, 5)
    setInterval(() => {
      const newOpacity = [ ...this.state.opacity ]
      const firstIndex = this.state.opacity.findIndex(o => o > 0)
      const nextIndex = firstIndex + 1 === components.length ? 0 : firstIndex + 1
      const intervalID = setInterval(() => {
        newOpacity[firstIndex] = round(this.state.opacity[firstIndex] - opaFrame, 5)
        newOpacity[nextIndex] = round(this.state.opacity[nextIndex] + opaFrame, 5)

        this.setState({ opacity: newOpacity })
      }, FPS)
      setTimeout(() => {
        clearInterval(intervalID)
        this.setState({ opacity: newOpacity.map(o => o <= 0.5 ? 0 : 1) })
      }, duration)
    }, interval)
  }

  render () {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {this.props.components.map((Comp, index) => {
          return <div key={index} className='full-size' style={{ opacity: this.state.opacity[index] }}><Comp/></div>
        })}
      </div>
    )
  }
}

ReplaceContent.defaultProps = {
  duration: 1000,
  interval: 10000
}

ReplaceContent.propTypes = {
  /** Список элементов, которые будут плавно сменять друг друга */
  components: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.node, PropTypes.func ])).isRequired,
  /** Периодичность смены контента */
  interval: PropTypes.number,
  /** Время смены контента */
  duration: (props, propName, componentName) => {
    if (props[propName] > props.interval) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. `' + propName + '` must by less than `interval`.'
      );
    }
  },
}

export default ReplaceContent
