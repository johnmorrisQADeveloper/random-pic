import { SET_IMAGE_URL, RESET_TIMER, FETCH_IMAGES } from './types'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
    accessKey: "3e1737426503364f4bb5d18ecbaf6e3142ffeddd18b43cdc48c682a524b0b052",
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
