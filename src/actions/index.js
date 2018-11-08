
import * as types from './ActionTypes';

export const fetchValue = () => {

    return { type: types.CURRENT_VALUE };
}

export function incrementValue() {
    return {
        type: types.INCREMENT
    };
}

export function decrementValue() {
    return {
        type: types.DECREMENT
    };
}