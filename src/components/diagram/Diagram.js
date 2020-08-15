import React, { PureComponent } from 'react';
import './diagram.css';
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';


const Diagram = (props) => {
    return (
        <div className="diagram_container">
            <Phrase phrase = {{color : 'black' , message : props.content.title}}/>
           
        </div>
    );

}

export default Diagram;