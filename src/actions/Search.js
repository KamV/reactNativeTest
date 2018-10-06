import {
  SEARCH_CHANGE
} from '../types'

const searchChanged = (text) => {
  return {
    type: SEARCH_CHANGE,
    payload: text
  }
}

export { searchChanged }
