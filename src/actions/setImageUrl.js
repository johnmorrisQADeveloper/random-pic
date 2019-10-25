import { SET_IMAGE_URL, RESET_TIMER, FETCH_IMAGES } from './types'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
    accessKey: "b1fc9d1eca5d00d409bcdadb09aeb6f73eed77507ff8715a13a824bd4c7095c1",
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
