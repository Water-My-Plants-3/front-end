import axios from "axios";

// const URL = "https://watermyplants-core.herokuapp.com";

export const ERROR = 'ERROR';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';


export const createUser = user => {
    const newUser = axios.post("/create", user);
    return dispatch => {
        dispatch({ type: CREATING_USER });
        newUser
            .then(({ data }) => {
                dispatch({ type: CREATE_USER, payload: data });
            })
            .catch(err => {
                dispatch({ type: CREATE_USER_FAILED, payload: err });
            });
    };
};

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUser = () => {
    const user = axios.get("/get");
    return dispatch => {
        dispatch({ type: GETTING_USER });
        user
            .then(response => {
                dispatch({ type: GET_USER, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: GET_USER_FAILED, payload: err });
            });
    };
};

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

export const deleteUser = id => {
    const deletedUser = axios.delete("/delete", {
        data: { id }
    });
    return dispatch => {
        dispatch({ type: DELETING_USER });
        deletedUser
            .then(({ data }) => {
                dispatch({ type: DELETE_USER, payload: data });
            })
            .catch(err => {
                dispatch({ type: DELETE_USER_FAILED, payload: err });
            });
    };
};