import { Auth } from "../utils/axiosWithAuth";

// const URL = "https://watermyplants-core.herokuapp.com";

export const CREATE_USER = 'CREATE_USER';
export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';
export const ERROR = 'ERROR';

export const createUser = user => {
    const newUser = Auth().post("/create", user);
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
    const user = Auth().get("/get");
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

  export const deleteUser = id => {
    const deletedUser = Auth().delete("/delete", {
      data: { id }
    });
    return dispatch => {
      dispatch({ type: DELETING_USER });
      deletedUser
        .then(({ data }) => {
          dispatch({ type: DELETE_USER, payload: data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };