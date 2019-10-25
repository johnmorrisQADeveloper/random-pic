import { SET_IMAGE_URL, RESET_TIMER } from './types'
import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({
    accessKey: "c57425732dd1b75bebcd3da7fcb27fef01be7cb74b1470d6b28ab33a4583b870",
    headers: {
        "X-Custom-Header": "foo"
    },
    timeout: 500
})

export const setImageUrl = () => {
    return (dispatch) => {
        unsplash.photos.getRandomPhoto()
            .then(res => res.json())
            .then(json => dispatch({
                type: SET_IMAGE_URL,
                payload: json.urls.full
            }))

        // dispatch({
        //     type: SET_IMAGE_URL,
        //     payload: 'test.png'
        // })
        dispatch({
            type: RESET_TIMER,
            payload: Math.random()
        })

    }
}
