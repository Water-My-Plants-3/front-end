import axios from "axios";
import { Auth } from "../utils/axiosWithAuth";

// const URL = "https://watermyplants-core.herokuapp.com/api";

export const ERROR = 'ERROR';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';

// Auth()
export const createUser = user => {
    const newUser = axios
    .post('https://watermyplants-core.herokuapp.com/api/users/register', user)
    return dispatch => {
        dispatch({ type: CREATE_USER_START })
        newUser
            .then(({ data }) => {
                console.log("aaa", data)
                dispatch({ type: CREATE_USER_SUCCESS, payload: data })
            })
            .catch(err => {
                dispatch({ type: CREATE_USER_FAILED, payload: err })
            })
    }
};

// export const GET_USER_START = 'GET_USER_START';
// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
// export const GET_USER_FAILED = 'GET_USER_FAILED';

// export const getUser = () => {
//     const user = axios.get(`${URL}/users/login`);
//     return dispatch => {
//         dispatch({ type: GET_USER_START });
//         user
//             .then(response => {
//                 dispatch({ type: GET_USER_SUCCESS, payload: response.data });
//             })
//             .catch(err => {
//                 dispatch({ type: GET_USER_FAILED, payload: err });
//             });
//     };
// };

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