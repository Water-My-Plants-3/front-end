import { combineReducers } from 'redux';
import { plantReducer as plants } from './plantReducer';
import { userReducer as user } from './userReducer';

export default combineReducers({
    plants,
    user,
});