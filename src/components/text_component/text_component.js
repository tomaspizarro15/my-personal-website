import React from 'react';
import './text_component.css';



const TextComponent = (props) => {

    const text = [props.paragraphs[0].text]
    text.unshift("     ");
    return (
        <div className="text_component__container">
            <div className="text_component">
                <h1 className="text_component__title">{props.title}</h1>
                {props.paragraphs.map((paragraph) => {
                    console.log( "TEXT COMPONENT PARAGRAPH ID", paragraph.id , "AT:" , props.title)
                    return (
                        <p key={paragraph.id} className="text_component__paragraph">{paragraph.text}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default TextComponent;