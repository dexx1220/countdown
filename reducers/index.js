import { combineReducers } from 'redux'
import EventsReducer from './events'

export default combineReducers({
  events: EventsReducer
})
