import { SET_IMAGE_URL, RESET_TIMER, FETCH_IMAGES } from './types'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  accessKey: '31222df60d7b7e338f4912bf9876b12b2075007d3d2c1fa68921230cdd619cbb',
  headers: {
    'X-Custom-Header': 'foo'
  },
  timeout: 500
})

export const setImageUrl = () => {
  return (dispatch) => {
    dispatch({
      type: SET_IMAGE_URL
    })
    dispatch({
      type: RESET_TIMER,
      payload: Math.random()
    })
  }
}

export const fetchImages = () => {
  return (dispatch) => {
    unsplash.photos.getRandomPhoto({ count: 30, query: '' })
      .then(res => res.json())
      .then(json => dispatch({
        type: FETCH_IMAGES,
        payload: json
      }))
  }
}
