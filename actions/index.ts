import {
    POST_DELETE_SUCCESS,
    POST_DELETE_LOADING,
    POST_LOAD_SUCCESS,
    SHOW_CURRENT_POST_SUCCESS,
    SHOW_CURRENT_POST_LOADING,
    POST_ADD_LOADING,
    POST_ADD_SUCCESS,
} from '../constants/actionTypes';
import PostAPI from '../api/postAPI';

const api = new PostAPI();

export const deletePostById = (id) => {
    return dispatch => {
        dispatch(deletePost());
        api.deletePostById(id).then(() => {dispatch(deletePostSuccess(id))});
    };
};
export const createNewPost = (title, body) => {
    return dispatch => {
        dispatch(createPost());
        api.createNewPost(title, body).then((res) => {dispatch(createPostSuccess(title, body))});
    };
};
export const showCurrentPost = (id) => {
    return dispatch => {
        dispatch(showPost());
        api.getCurrentPost(id).then((res) => {dispatch(showPostSuccess(res))});
    };
};

export const loadPosts = (post) => ({type: POST_LOAD_SUCCESS, payload: {post}});
export const deletePostSuccess = (id) => ({type: POST_DELETE_SUCCESS, payload: {id}});
export const deletePost = () => ({type: POST_DELETE_LOADING});
export const createPostSuccess = (title, description) => ({type: POST_ADD_SUCCESS, payload: {title, description}});
export const createPost = () => ({type: POST_ADD_LOADING});
export const showPost = () => ({type: SHOW_CURRENT_POST_LOADING});
export const showPostSuccess = (post) => ({type: SHOW_CURRENT_POST_SUCCESS, payload: {post}});
