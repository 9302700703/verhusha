import { login as ttt } from 'server'

export const login = (name, password) => dispatch => {
  dispatch(ttt({
    name,
    password
  })).then(t => dispatch({ type: 'LOGIN', ...t }))
}
