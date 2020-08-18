import React from 'react';
import './listate.css';
import Phrase from '../phrases/phrases';



const Listate = (props) => {

    let phrase = { message: props.title, color: '#212B85' }

    return (
        <React.Fragment>
            <Phrase phrase={phrase} />
            <div className="list_container">

                <ul className="list">
                    {props.listado.map((elemento, i) => {
                        return (
                            <li className="list_item" key={i} onMouseEnter={props.hover} onMouseLeave={props.hover}>
                                <h1>{elemento.title}</h1>
                                <p>{elemento.code}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Listate; 