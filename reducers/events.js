export const GET_EVENTS = 'events/GET_EVENTS'
export const ADD_EVENT = 'events/ADD_EVENT'

const INITIAL_STATE = {
  events: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state }
    case ADD_EVENT:
      return { ...state, events: action.payload }
    default:
      return state
  }
}
