import { combineReducers } from 'redux';
import { plantReducer as plants } from './plantReducer';
import { userReducer as user } from './userReducer';
// import {singlePlantReducer as plant} from './singlePlantReducer'

export default combineReducers({
    plants,
    user,
    
});