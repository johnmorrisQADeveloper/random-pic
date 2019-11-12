import { SET_TIMER, CLEAR_TIMER } from './types'

export const setTimer = () => {
  return (dispatch) => {
    dispatch({
      type: SET_TIMER,
      payload: true
    })
  }
}

export const clearTimer = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_TIMER,
      payload: false
    })
  }
}
