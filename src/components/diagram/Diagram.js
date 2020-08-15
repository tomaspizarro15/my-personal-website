import React, { PureComponent } from 'react';
import './diagram.css';
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';


const Diagram = (props) => {

    let stickStyle = "item_stick";
    
    return (
        <div className="diagram_container">
            <Phrase phrase={{ color: 'black', message: props.content.title }} />
            <div className="diagram_items">
                {props.content.items.map(item => {
                    return (
                        <div className="item_container">
                            <ul className="diagram_item">
                                <li className="item">
                                    <img className="diagram_item__icon" src={item.icon}></img>
                                </li>

                            </ul>
                            <div className="item__line">
                                <div className= {stickStyle}></div>
                            </div>
                            <div>   

                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );

}

export default Diagram;