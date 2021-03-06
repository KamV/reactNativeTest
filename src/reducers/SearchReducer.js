import {
  SEARCH_CHANGE
} from '../types'

const INITIAL_STATE = {
  searchValue: ''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_CHANGE:
    return {
      ...state,
      searchValue: action.payload
    }
  default: return state
  }
}
