import React from 'react';
import './error_handler.css';



const ErrorHandler = (props) => {

    let message = ""; 
    let color ="";
    let opacity = "0"; 
    if(props.status) {
        console.log("Component Triggered")
        opacity = "1";
    }

        if(props.error.code >= 400) {
            if(props.error.code === 409){
                message ="SECCION CREADA ANTERIORMENTE";
                color ="red";
            }else {
                message="INGRESE DATOS VALIDOS";
                color ="red";
            }
           
        }else if(props.error.code >= 500){
            message="No se puede crear el producto, por favor intentelo  nuevamente mas tarde";
            color ="red";
        }else if(props.error.code <= 300){
            message ="Producto añadido correctamente";
            color = "#212B85";
        }


    return(
        <div className="error_container" style={{borderColor: color , opacity : opacity }}>
            <div className="error_component">
                    <p>{message}</p>
            </div>
        </div>
    );
}

export default ErrorHandler;