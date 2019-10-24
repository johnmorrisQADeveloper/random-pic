import { SET_IMAGE_URL } from './../actions/types'

const initialState = {
  imageUrl: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: payload
      }
    default:
      return state
  }
}