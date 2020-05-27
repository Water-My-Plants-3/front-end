// import React from "react";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

// const URL = "https://watermyplants-core.herokuapp.com/api/users";

export const ERROR = 'ERROR';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';

// (`${URL}/register`, user)

export const createUser = user => {
    return dispatch => {
        dispatch({ type: CREATE_USER_START })
        axiosWithAuth()
            .post("/users/register", user)
            .then(({ data }) => {
                console.log("aaa", data)
                dispatch({ type: CREATE_USER_SUCCESS, payload: data })
            })
            .catch(err => {
                dispatch({ type: CREATE_USER_FAILED, payload: err })
            })
    }
};

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUser = user => {
    return dispatch => {
        dispatch({ type: GET_USER_START })
        axiosWithAuth()
            .post("/users/login", user)
            .then(({ data }) => {
                dispatch({ type: GET_USER_SUCCESS, payload: data })
            })
            .catch(err => {
                dispatch({ type: GET_USER_FAILED, payload: err });
            })
    }
};

// export const DELETE_USER_START = 'DELETE_USER_START';
// export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
// export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

// export const deleteUser = id => {
//     const deletedUser = axios.delete(`${URL}/users/${id}`, {
//         data: { id }
//     });
//     return dispatch => {
//         dispatch({ type: DELETE_USER_START });
//         deletedUser
//             .then(({ data }) => {
//                 dispatch({ type: DELETE_USER_SUCCESS, payload: data });
//             })
//             .catch(err => {
//                 dispatch({ type: DELETE_USER_FAILED, payload: err });
//             });
//     };
// };
