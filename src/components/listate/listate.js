import React from 'react';
import './listate.css';



const Listate = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.listado.map((elemento , i)=> {
                return(
                    <li key = {i} onMouseEnter={props.hover} onMouseLeave={props.hover}>
                        <p>{elemento.titulo}</p>
                    </li>
                )
            })}
        </div>
    )
}

export default Listate; 