import { Events } from './types'
import { eventsList } from '../common/data'

export const getEvents = () => dispatch => {
  dispatch({
    type: Events.GET_EVENTS,
    payload: eventsList
  })
}