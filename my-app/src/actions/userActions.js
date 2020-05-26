import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const GET_FRIENDS = 'GET_USER';
export const ERROR = 'ERROR';

export const createUser = user => {
    const newUser = axios.post(`${URL}/create`, user);
    return dispatch => {
      dispatch({ type: CREATING_USER });
      newUser
        .then(({ data }) => {
          dispatch({ type: CREATE_USER, payload: data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };

  export const getUser = () => {
    const user = axios.get(`${URL}/get`);
    return dispatch => {
      dispatch({ type: GETTING_USER });
      user
        .then(response => {
          dispatch({ type: GET_USER, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };