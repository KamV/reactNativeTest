import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import AuthReducer from './AuthReducer'
import SearchReducer from './SearchReducer'
import EventsReducer from './EventsReducer'

export default combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  events: EventsReducer,
  search: SearchReducer
})
