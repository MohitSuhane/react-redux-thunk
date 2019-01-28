import {
    GET_POSTS,
    GET_USERS,
} from '../reducers/posts.reducer';

import { apiBaseURL } from './actions.util'
import { axiosGet } from '../utils/axios.wrapper'

export const getUsers = () => {
    const url = `${apiBaseURL}/users`;
    return dispatch => {
        return axiosGet(dispatch, url, (response) => {
            dispatch({ type: GET_USERS, payload: response.data });
        });
    };
};

export const getPosts = () => {
    const url = `${apiBaseURL}/posts`;
    return dispatch => {
        return axiosGet(dispatch, url, (response) => {
            dispatch({ type: GET_POSTS, payload: response.data });
        });
    };
};
