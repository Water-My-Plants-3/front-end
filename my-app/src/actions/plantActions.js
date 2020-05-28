import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_PLANT_START = "FETCH_PLANT_START"
export const FETCH_PLANT_SUCCESS = "FETCH_PLANT_SUCCESS"
export const FETCH_PLANT_FAIL = "FETCH_PLANT_FAIL"

export const POST_PLANT_START = "POST_PLANT_START"
export const POST_PLANT_SUCCESS = "POST_PLANT_SUCCESS"
export const POST_PLANT_FAIL = "POST_PLANT_FAIL"

export const PUT_PLANT_START = "PUT_PLANT_START"
export const PUT_PLANT_SUCCESS = "PUT_PLANT_SUCCESS"
export const PUT_PLANT_FAIL = "PUT_PLANT_FAIL"

export const DELETE_PLANT_START = "DELETE_PLANT_START"
export const DELETE_PlANT_SUCCESS = "DELETE_PLANT_SUCCESS"
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL"


export const fetchPlants = userid => {
    console.log("id is", userid)
    return dispatch => {
        dispatch({ type: FETCH_PLANT_START })
        return axiosWithAuth()
            .get(`/plants/user/${userid}`)
            .then(res => {
                console.log("hetir", res)
            dispatch({ type: FETCH_PLANT_SUCCESS, payload: res })
            })
            .catch(err => {
                console.log("not here", err);
            dispatch({ type: FETCH_PLANT_FAIL, payload: err })
            })
    }
};

export const createPlant = (post) => {
    return dispatch => {
        dispatch({ type: POST_PLANT_START })
        axiosWithAuth()
            .post(`/plants`)
            .then(res => { console.log(res) })
    }
}

export const updatePlant = () => {
    return dispatch => {
        dispatch({ type: PUT_PLANT_START })
        axiosWithAuth()
            .put(`${URL}`)  // waiting on endpoint to update plant 
    }
}

export const deletePlant = () => {
    return dispatch => {
        dispatch({ type: DELETE_PLANT_START })
        axiosWithAuth()
            .delete(`${URL}`) // waiting on endpoint to delete plant 
    }
}
