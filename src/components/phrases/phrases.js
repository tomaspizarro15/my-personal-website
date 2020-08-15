import React from 'react';
import './phrases.css';



const Phrase = (props) => {
    
    let color = props.color.toString()
    return (
        <div className="phrase_container">
            <div className="phrase">
                <h1 style={{color : '#212B85'}}>
                    {props.message}
                </h1>
            </div>
        </div>
    )
}

export default Phrase