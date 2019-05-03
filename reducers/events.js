import { Events } from '../actions/types'

const INITIAL_STATE = {
  events: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Events.GET_EVENTS:
      return { ...state, events: action.payload }
    case Events.ADD_EVENT:
      return { ...state, events: action.payload }
    default:
      return state
  }
}
