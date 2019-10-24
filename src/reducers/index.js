import { combineReducers } from 'redux'
import setImageUrlReducer from './setImageUrlReducer'



export default combineReducers({
    imageUrl: setImageUrlReducer
})

