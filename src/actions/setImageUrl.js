import { SET_IMAGE_URL, RESET_TIMER, FETCH_IMAGES } from './types'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
    accessKey: "2b2be799597f560c99494095ae9e6e856c2bf2cae4e653616fb4bcab7329ca14",
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
        unsplash.photos.getRandomPhoto({ count: 30, query: 'bbc' }) // superheros, car, boat, bike, computer, phone, animals, 

            .then(res => res.json())
            .then(json => dispatch({
                type: FETCH_IMAGES,
                payload: json
            }))
    }
}
