export const GET_POSTS = 'post/GET_POSTS'
export const GET_USERS = 'post/GET_USERS'

const initialState = {
    posts: [],
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return state
    }
}
