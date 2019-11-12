import { combineReducers } from 'redux'
import setImageUrlReducer from './setImageUrlReducer'
import setTimerReducer from './setTimerReducer'

export default combineReducers({
  imageUrl: setImageUrlReducer,
  setTimer: setTimerReducer
})
