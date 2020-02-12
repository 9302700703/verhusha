import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'

class StartPage extends React.Component {
    render () {
        return (
            <div className='startPage'>
                <div className='topToolbar'>
                    <button onClick={() => this.props.push('/')}>---</button>
                    <button onClick={() => this.props.push('/page1')}>page1</button>
                    <button onClick={() => this.props.push('/page1/page1')}>page1/page1</button>
                    <button onClick={() => this.props.push('/page2')}>page2</button>
                </div>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(null, { push, goBack })(StartPage)
