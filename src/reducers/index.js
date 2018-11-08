import { combineReducers } from 'redux';
import ValueReducer from './ValueReducer';

export default combineReducers({
    value: ValueReducer
});