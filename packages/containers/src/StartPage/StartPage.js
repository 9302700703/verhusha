import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'

class StartPage extends React.Component {
    render () {
        return (
            <div className='topToolbar'>
                <div>
                    <button onClick={() => this.props.push('/')}>---</button>
                    <button onClick={() => this.props.push('/ttt')}>ttt</button>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(null, { push, goBack })(StartPage)
