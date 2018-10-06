import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'
import EventsReducer from './EventsReducer'

export default combineReducers({
  events: EventsReducer,
  search: SearchReducer
})
