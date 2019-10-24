import { SET_IMAGE_URL } from './types'
import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({
    accessKey: "45479befbace259382ff160bd6ac6f9e3b635c89f40c9df5594b90ea0f11424b",
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
