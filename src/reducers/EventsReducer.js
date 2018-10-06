import {
  EVENTS_FETCHED,
  EVENTS_FAILED
} from '../types'

const INITIAL_STATE = {
  data: []
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EVENTS_FETCHED:
    return {
      ...state,
      data: action.payload
    }
  case EVENTS_FAILED:
    return {
      ...state
    }
  default: return state
  }
}
