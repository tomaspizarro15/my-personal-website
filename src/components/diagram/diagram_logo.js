import React from 'react';
import './diagram.css';



const DiagramLogo = (props) => {

    let logoStyle = "diagram_item__icon"

    if(props.item.status){
        logoStyle = "diagram_item__icon on"
    }

    return(
        <ul className="diagram_item">
        <li className="item">
            <img className= {logoStyle} src={props.item.icon} onClick={props.click}></img>
        </li>
    </ul>
    )
}

export default DiagramLogo; 