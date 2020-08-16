import React from 'react';
import './diagram.css';



const DiagramInfo = (props) => {

    let diagramStyle = "diagram_info"

    if (!props.info.status) {
        diagramStyle = "diagram_info off"
    }
    return (
        <div className={diagramStyle}>
            <div className ="diagram_textarea"> 
                <h1 className="diagram_info__title">{props.info.title}</h1>
                <p className ="diagram_info__text">{props.info.description}</p>
                <a className ="diagram_info__anchor" href= {props.info.href}>Leer mas</a>
            </div>
        </div>
    )

}

export default DiagramInfo; 