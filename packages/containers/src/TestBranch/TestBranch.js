import React from 'react'
import cookie from 'react-cookie'
// import {} from 'react-native-cookies'
// import Cookies from 'js-cookie'
import { compose } from 'redux'
import { withState } from 'recompose'

class TestBranch extends React.Component {

  componentDidMount() {
    this.props.ttt && this.props.setEntityName('Livestock')
  }

  createUser = () => {
    fetch('Transport/createUser/createUser', { method: 'POST', body: JSON.stringify({ name: 'username', pas: 'password' }) })
  }
  login = () => {
    fetch('Transport/login/login', {
      method: 'POST',
      body: JSON.stringify({ name: 'username', password: 'password' }),
      credentials: 'include'
    })
      .then(r => r.json(), k => console.log(k)).then(r => Object.keys(r).forEach(key => document.cookie = `${key}=${r[key]}`))
  }
  testMethod = () => {
    fetch('Transport/testAuth/testAuth', { method: 'POST', body: JSON.stringify({ }) })
  }

  render () {
    return (
      <div className='under-toolbar'>
        <button onClick={this.createUser}>createUser</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.testMethod}>testMethod</button>
        <button onClick={() => console.log(document.cookie)}>cookie</button>
        <button onClick={() => document.cookie = 'key=value'}>setCookie</button>
      </div>
    )
  }
}

const editForm = (formProps) => Component => {
  const Branch = props => {

    const WithoutFetch = props => <Component { ...props } ttt/>

    class WithFetch extends React.Component {

      state = {

      }

      componentDidMount() {
        // fetch('Transport/login/login', {
        //   method: 'POST',
        //   body: JSON.stringify({ entityName: formProps(this.props).entityName })
        // })
      }

      render() {
        return <Component { ...this.props }/>
      }
    }

    return props.entityName
      ? <WithFetch { ...props }/>
      : <WithoutFetch { ...props }/>
  }
  return Branch
}

export default compose(
  withState('entityName', 'setEntityName', null),
  editForm(
  props => ({
    ...props,
    entityName: props.entityName
  })
))(TestBranch)
