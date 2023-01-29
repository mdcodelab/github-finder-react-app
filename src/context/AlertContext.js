import React from "react";
import alertReducer from "./AlertReducer";


const AlertContext=React.createContext();

const initialState=null;

const AlertProvider = ({children}) => {
    const[state, dispatch]=React.useReducer(alertReducer, initialState);

    //set an alert
    let timeoutId=null;

    const setAlert =(msg, type) => {
        dispatch({type: "SET_ALERT", payload: {msg, type}})
        timeoutId = setTimeout(()=> {
            dispatch({type: "REMOVE_ALERT"})
        }, 3000)
    }

const clearTimeout = () => {
    clearTimeout(timeoutId);
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