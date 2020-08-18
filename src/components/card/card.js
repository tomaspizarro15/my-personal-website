import React from 'react';
import './card.css';
import icon from './list_icon.png'

const Card = (props) => {

    return (
        <div className="card_container">
            <div className="card_logo">
                <div className="card_logo__image">
                    <img src={props.card.logo}></img>
                </div>
                <div className="card_logo__name">
                    <p style={{ color: props.card.color }}>{props.card.name}</p>
                    <a href={props.card.link} target="_blank">
                        <img src={icon}></img>
                    </a>
                </div>
            </div>
            <div className="card_info">
                <div className="card_info__text">
                    <p >{props.card.text}</p>

                </div>
            </div>
        </div>
    )

}

export default Card;