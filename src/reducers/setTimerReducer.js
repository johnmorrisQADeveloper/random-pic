import { SET_TIMER, CLEAR_TIMER } from '../actions/types'

const initialState = {
  timer: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIMER:
      return {
        ...state,
        timer: payload
      }
    case CLEAR_TIMER:
      return {
        ...state,
        timer: payload
      }
    default:
      return state
  }
}