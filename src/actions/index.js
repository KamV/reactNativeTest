import {
  SEARCH_CHANGE,
  EVENTS_FETCHED,
  EVENTS_FAILED
} from '../types'

export const searchChanged = (text) => {
  return {
    type: SEARCH_CHANGE,
    payload: text
  }
}

export const getEvents = (text) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({ type: EVENTS_FETCHED, payload: success })
    return success
  }
  function onError(error) {
    dispatch({ type: EVENTS_FAILED, payload: error })
  }
  try {
    const URL = `https://api.tvmaze.com/search/shows?q=${text}`
    const res = await fetch(URL, { method: 'GET' })
    const success = await res.json()
    return onSuccess(success)
  } catch (error) {
    return onError(error)
  }
}
