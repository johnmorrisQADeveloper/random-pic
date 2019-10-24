import { SET_IMAGE_URL } from './types'
import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({
    accessKey: "3353a0386e1d785fb98ab0c2e686a6954a15852aeb0e4b40bb22ba952325491a",
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
    }
}
