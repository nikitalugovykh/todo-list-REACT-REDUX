import { CREATE_POST, FETCH_POST } from "./actionType";

export function createPost( post ) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function fetchPost ( ) {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        console.log(json);
        dispatch({
            type: FETCH_POST,
            payload: json
        })
    }    
}