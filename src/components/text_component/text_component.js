import React from 'react';
import './text_component.css'; 



const TextComponent = (props) => {
    return (
        <div className ="text_component__container">
         <div className="text_component">
         <h1 className="text_component__title">{props.title}</h1>
            {props.paragraphs.map(paragraph => {
                return(
                    <p className="text_component__paragraph">{paragraph.text}</p>
                )
            })}
         </div>
        </div>
    )
}

export default TextComponent;