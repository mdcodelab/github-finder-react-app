
function alertReducer (state, action) {
    if(action.type === "SET_ALERT") {
        return action.payload;
    }
    else if (action.type === "REMOVE_ALERT"){
        return  null;
    } else {
        return state;
    }
}

export default alertReducer