import React from 'react'
import {} from 'compo'

class Page1 extends React.Component {

  state = {
    opacity: 0,
    t: null
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     const ttt = this.state.opacity === 1
  //     const t = setInterval(() => {
  //       if (ttt) {
  //         const newOpacity = Math.round((this.state.opacity - 0.01) * 100) / 100
  //         this.setState({opacity: newOpacity })
  //         newOpacity === 0 && clearInterval(this.state.t)
  //       } else {
  //         const newOpacity = Math.round((this.state.opacity + 0.01) * 100) / 100
  //         this.setState({opacity: newOpacity })
  //         newOpacity === 1 && clearInterval(this.state.t)
  //       }
  //     }, 10)
  //     this.setState({ t })
  //   }, 3000)
  // }

  render () {
    return (
      <div>
        <div style={{ opacity: this.state.opacity }}>++++++++++</div>
        <div style={{ opacity: 1 - this.state.opacity }}>0000000000</div>
      </div>
    )
  }
}

export default Page1
