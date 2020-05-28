import { FETCH_PLANT_START, FETCH_PLANT_SUCCESS, FETCH_PLANT_FAIL } from '../actions/plantActions'
import {POST_PLANT_START, POST_PLANT_SUCCESS, POST_PLANT_FAIL } from '../actions/plantActions'

const initialState = {
    plants: [],
    isFetching:false,
    id: Number,
    error:""

}



export const plantReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PLANT_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_PLANT_SUCCESS:
            return{
                ...state,
                plants: action.payload,
                isFetching: false,
                id: action.payload.id 
            }
        case FETCH_PLANT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        //post a plant 
        case POST_PLANT_START:
            return{
                ...state,
                isFetching: true
            }
        case POST_PLANT_SUCCESS:
            return{
                ...state,
                plants: [...state.plants, action.payload],
                isFetching: false
            }
        case POST_PLANT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}