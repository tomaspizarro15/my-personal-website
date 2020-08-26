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
                    {props.listado.map(elemento => {
                        return (
                            <li className="list_item" key={elemento.id} onMouseEnter={props.hover} onMouseLeave={props.hover}>
                                <div className="list_item_text">
                                    <h1>{elemento.title}:</h1>
                                    <p>{elemento.code}</p>
                                </div>
                                <div className="list_item_icon">
                                    <a href = {elemento.href} target="_blank">
                                        <img src={props.icon} alt="list_icon" />
                                    </a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Listate; 