import { CREATE_POST, FETCH_POST } from "./actionType";

const initialState = {
    posts: [],
    fetchedPost: []
}

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [ ...state.posts, action.payload ]};
        case FETCH_POST:
            return {...state, fetchedPost: action.payload };    
        default: return state
    }
}