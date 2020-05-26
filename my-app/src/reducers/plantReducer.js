import { FETCH_PLANT_START, FETCH_PLANT_SUCCESS, FETCH_PLANT_FAIL } from '../actions/plantActions'

const initialState = {
    plants: [],
    isFetching:false,
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
                players: action.payload,
                isFetching: false
            }
        case FETCH_PLANT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}