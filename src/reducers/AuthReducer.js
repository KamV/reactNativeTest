import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_FAILURE
} from '../types'

const INITIAL_STATE = {
  authenticated: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AUTH_USER:
    return {
      ...state,
      authenticated: true,
      error: {}
    }
  case UNAUTH_USER:
    return {
      ...state,
      authenticated: false,
      error: {}
    }
  case SIGNIN_FAILURE:
    return {
      ...state,
      error: {
        signin: action.payload
      }
    }
  default: return state
  }
}
