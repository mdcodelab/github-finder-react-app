import React from 'react';
import {AiOutlineAlert} from "react-icons/ai";
import { useGlobalAlert } from '../../context/AlertContext';

function Alert() {
    const {alert}=useGlobalAlert();

    if (alert !== null) {
        return (<p className="alert">{alert.type === "error" && (
            <AiOutlineAlert className="alert-icon"></AiOutlineAlert>
        )} <strong>{alert.msg}</strong></p>
    
        )
    }

}

export default Alert;
