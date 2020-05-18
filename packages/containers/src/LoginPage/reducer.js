import { login } from 'server'

export const loginTtt = (state = {}, action) => {
  if (action.type === 'LOGIN') {
    return action
  }
  return state
}

