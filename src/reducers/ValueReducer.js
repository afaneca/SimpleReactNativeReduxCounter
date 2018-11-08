const INITIAL_STATE = {
    val: 0
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case "FETCH_VALUE":
            return { ...state, val: state.val };
        case "INCREMENT_VALUE":
            return {...state, val: state.val + 1}
        case "DECREMENT_VALUE":
            return { ...state, val: state.val - 1 }

        default:
            return state;
    }
};