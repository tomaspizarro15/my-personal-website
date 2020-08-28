import React from 'react';
import './modal.css';


const Modal = (props) => {

    let modalClass = "modal_container off"

    if (props.status) {
        modalClass = "modal_container"
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
                <div className="modal_button">
                    <button onClick={props.click}>¡De acuerdo!</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;