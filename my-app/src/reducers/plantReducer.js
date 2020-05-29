import { FETCH_PLANT_START, FETCH_PLANT_SUCCESS, FETCH_PLANT_FAIL } from '../actions/plantActions'
import {POST_PLANT_START, POST_PLANT_SUCCESS, POST_PLANT_FAIL } from '../actions/plantActions'

const initialState = {
    plants: [],
    plantsFetching:false,
    plantUId: null,
    error:"",
}



export const plantReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PLANT_START:
            return{
                ...state,
                plantsFetching: true
            }
        case FETCH_PLANT_SUCCESS:
            return{
                ...state,
                plants: action.payload,
                plantsFetching: false,
            }
        case FETCH_PLANT_FAIL:
            return{
                ...state,
                error: action.payload,
                plantsFetching: false
            }
        //post a plant 
        case POST_PLANT_START:
            return{
                ...state,
                plantsFetching: true
            }
        case POST_PLANT_SUCCESS:
            return{
                ...state,
                // plants: ...state.plants, action.payload,
                plantsFetching: false
            }
        case POST_PLANT_FAIL:
            return{
                ...state,
                error: action.payload,
                plantsFetching: false
            }
        default:
            return state
    }
}