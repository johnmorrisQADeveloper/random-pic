import { SET_IMAGE_URL, RESET_TIMER, FETCH_IMAGES } from './types'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
    accessKey: "6268a33709e53c96e99064e26e43b440bc8ed30040d2dc4c162b653421ebcbe0",
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
        unsplash.photos.getRandomPhoto({ count: 30, query: '' })
            .then(res => res.json())
            .then(json => dispatch({
                type: FETCH_IMAGES,
                payload: json
            }))
    }
}
