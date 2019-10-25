import { SET_IMAGE_URL, RESET_TIMER, FETCH_IMAGES } from './types'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
    accessKey: "8b5fe49544403dfe0d562a064503cc84cd0798a5caa1dd8967b6dc4ff4e86cec",
    headers: {
        "X-Custom-Header": "foo"
    },
    timeout: 500,
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
        unsplash.photos.getRandomPhoto({ count: 30 })
            .then(res => res.json())
            .then(json => dispatch({
                type: FETCH_IMAGES,
                payload: json
            }))
    }
}
