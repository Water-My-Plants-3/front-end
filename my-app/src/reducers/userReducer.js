import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,

    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,

    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILED,

    // DELETE_USER_START,
    // DELETE_USER_SUCCESS,
    // DELETE_USER_FAILED,

    // ERROR,

} from "../actions/userActions";

const intialState = {
    isFetching: false,
    user: {},
    username: '',
    password: '',
    id: null,
    error: null,
}

export const userReducer = (state = intialState, action) => {
    switch (action.type) {

        case CREATE_USER_START:
            return {
                ...state,
                isFetching: true,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                id: action.payload.id,
                error: false,
            }
        case CREATE_USER_FAILED:
            return {
                ...state,
                error: action.payload.Error,
            }

        // user login
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: false,
            }
        case LOGIN_USER_FAILED:
            return {
                ...state,
                error: action.payload.Error,
            }
        default:
            return state
    }
};
