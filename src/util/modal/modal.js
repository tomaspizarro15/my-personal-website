import React from 'react';
import './modal.css';
import error from './error.png';
import done from './done.png';
const Modal = (props) => {

    let modalClass = "modal_container off"
    let logo;
    let actionButton = props.click; 

    if (props.status) {
        modalClass = "modal_container"
    }
    if (props.type === "error") {
        logo = (
            <img src={error} alt="modal_logo"></img>
        );
        actionButton = props.close; 
    } else if (props.type === "good") {
        logo = (
            <img src={done} alt="modal_logo"></img>
        );
        actionButton = props.close; 
    } else {
        logo =
            <div>

            </div>
            ;
    }

    return (
        <div className={modalClass}>
            <div className="modal">
                <div className="modal_title">
                    <div className="modal_title_msg">
                        <p className="modal_message">{props.message}</p>
                    </div>
                  
                    <div className="modal_title_close">
                        <button onClick={props.close}>X</button>
                    </div>
                </div>
                {logo}
                <div className="modal_button">
                    <button onClick={actionButton}>¡De acuerdo!</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;