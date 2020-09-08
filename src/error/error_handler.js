import React from 'react';
import './error_handler.css';



const ErrorHandler = (props) => {

    let message = "";
    let color = "";
    let opacity = "0";
    if (props.status) {
        console.log("Component Triggered")
        opacity = "1";
    }


        switch (props.error.code) {
            case 409:
                message = "La seccion ya fue creada anteriormente";
                color = "red";
                break;
            case 422:
                message = "Todos los campos deben ser validos";
                color = "red";
                break;
            case 504:
                message = "Algo salio mal intentelo de nuevo mas tarde";
                color = "red";
                break;
            case 201: 
                message ="Seccion creada correctamente!"
                color ="#212b85"
            default:
                break;
        }
    return (
        <div className="error_container" style={{ borderColor: color, opacity: opacity }}>
            <div className="error_component">
                <p>{message}</p>
            </div>
        </div>
    );
}

export default ErrorHandler;