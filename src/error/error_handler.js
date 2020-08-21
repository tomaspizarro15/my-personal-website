import React from 'react';
import './error_handler.css';



const ErrorHandler = (props) => {
    return(
        <div className="error_container">
            <div className="error_component">
                    <h1>Something went wrong</h1>
                    <p>{props.message}</p>
                    <p>{props.status}</p>
            </div>
        </div>
    );
}

export default ErrorHandler;