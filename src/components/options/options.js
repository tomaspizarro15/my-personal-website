import React from 'react';
import './options.css'



const Options = (props) => {
    return (
        <option value= {props.title}>{props.title}</option>
    )
}

export default Options; 