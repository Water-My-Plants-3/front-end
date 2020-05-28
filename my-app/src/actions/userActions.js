import axiosWithAuth from "../utils/axiosWithAuth";
import jwtdecode from 'jwt-decode'

export const ERROR = 'ERROR';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER = 'DELETE_USER';


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


export const loginUser = user => {
    return dispatch => {
        dispatch({ type: LOGIN_USER_START })
        axiosWithAuth()
            .post("/users/login", user)
            .then(({ data }) => {
                console.log(data, "##")
                localStorage.setItem("token", data.payload)

                const userId = jwtdecode(data.payload).userid
                console.log(userId,"%%")

                dispatch({ type: LOGIN_USER_SUCCESS, payload: 3})
            })
            .catch(err => {
                dispatch({ type: LOGIN_USER_FAILED, payload: err });
            })
    }
};


export const updateUser = (user) => {
    return dispatch => {
    dispatch({ type: UPDATE_USER_START });
        axiosWithAuth()
        .put(`/users/${user.id}`, user)
            .then(response => {
                dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: UPDATE_USER_FAILED, payload: err });
            });
    };
};

export const deleteUser = id => {
    return dispatch => {
        dispatch({ type: DELETE_USER_START });
        axiosWithAuth()
        .delete(`${id}`)
        .then(({ data }) => {
            dispatch({ type: DELETE_USER, payload: data });
          })
        .catch(err => console.log(err));
    };
}
