import { SET_TIMER, CLEAR_TIMER, RESET_TIMER } from '../actions/types'

const initialState = {
  timer: '',
  value: ''
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
      case RESET_TIMER:
        return {
          ...state,
          value: payload
        }
    default:
      return state
  }
}