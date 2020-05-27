import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,

    // GET_USER_START,
    // GET_USER_SUCCESS,
    // GET_USER_FAILED,

    // DELETE_USER_START,
    // DELETE_USER_SUCCESS,
    // DELETE_USER_FAILED,

    // ERROR,

} from "../actions/userActions";

const intialState = {
    isFetching: false,
    user: {},
    creatingUser: false,
    error: null,
}

export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        // user register
        case CREATE_USER_START:
            return {
                ...state,
                creatingUser: true,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                creatingUser: false,
                error: false,
            }
        case CREATE_USER_FAILED:
            return {
                ...state,
                creatingUser: false,
                error: action.payload.Error,
            }
        default:
            return state
    }
};
