import React from 'react';
import './phrases.css';



const Phrase = (props) => {
    return (
        <div className="phrase_container">
            <div className="phrase">
                <p style={{color : props.phrase.color}}>
                    {props.phrase.message}
                </p>
            </div>
        </div>
    )
}

export default Phrase