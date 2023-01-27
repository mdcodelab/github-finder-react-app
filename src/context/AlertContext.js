import React from "react";
import alertReducer from "./AlertReducer";


const AlertContext=React.createContext();

const initialState=null;

const AlertProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(alertReducer, initialState);

    //set an alert
const setAlert =(msg, type) => {
    return dispatch({type: "SET_ALERT", payload: {msg, type}})
    setTimeout(()=> {
        dispatch({type: "REMOVE_ALERT"})
    }, 3000)
}

    return <AlertContext.Provider value={{
        alert:state,
        setAlert
    }}>
        {children}
    </AlertContext.Provider>
}

export {AlertProvider, AlertContext};

export const useGlobalAlert = () => {
    return React.useContext(AlertContext);
}