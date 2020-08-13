import React from 'react';
import './phrases.css';



const Phrase = (props) => {
    return (
        <div className="phrase_container">
            <div classNmae="phrase"><h1>
                {props.message}
            </h1></div>
        </div>
    )
}

export default Phrase