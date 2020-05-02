import {
    POST_DELETE_LOADING,
    POST_DELETE_SUCCESS,
    POST_LOAD_SUCCESS,
    POST_ADD_LOADING,
    SHOW_CURRENT_POST_LOADING,
    SHOW_CURRENT_POST_SUCCESS,
} from '../constants/actionTypes';

export const initialState = {
    post: [],
    loading: false,
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case POST_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                post: payload.post,
                loading: false,
            });
        }
        case POST_DELETE_SUCCESS: {
            return {post: state.post.filter(({id}) => +payload.id !== +id), loading: false};
        }
        case POST_DELETE_LOADING: {
            return {post: state.post, loading: true};
        }
        case POST_ADD_LOADING: {
            return {post: state.post, loading: true};
        }
        case SHOW_CURRENT_POST_LOADING: {
            return {post: state.post, loading: true};
        }
        case SHOW_CURRENT_POST_SUCCESS: {
            return Object.assign({}, state, {
                post: payload.post,
                loading: false,
            });
        }

        default: {
            return state;
        }
    }
};
