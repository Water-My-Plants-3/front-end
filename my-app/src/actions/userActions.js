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

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

export const loginUser = user => {
    return dispatch => {
        dispatch({ type: LOGIN_USER_START })
        axiosWithAuth()
            .post("/users/login", user)
            .then(({ data }) => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
            })
            .catch(err => {
                dispatch({ type: LOGIN_USER_FAILED, payload: err });
            })
    }
};

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUser = () => {
    return dispatch => {
    dispatch({ type: GET_USER_START });
        axiosWithAuth()
        .get("/users/")
            .then(response => {
                dispatch({ type: GET_USER_SUCCESS, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: GET_USER_FAILED, payload: err });
            });
    };
};
