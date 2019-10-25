import { SET_IMAGE_URL, FETCH_IMAGES } from './../actions/types'

const initialState = {
  imageUrl: '',
  images: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: state.images.pop().urls.full
      }
    case FETCH_IMAGES:
      return {
        ...state,
        images: [...state.images, ...payload]
      }
    default:
      return state
  }
}
