import React from 'react';
import './phrases.css';



const Phrase = (props) => {
    return (
        <div className="phrase_container">
            <div className="phrase">
                <h1 style={{color : props.color}}>
                    {props.message}
                </h1>
            </div>
        </div>
    )
}

export default Phrase