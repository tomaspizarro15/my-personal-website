import React from 'react';
import './add_toolbar.css';


const BlogForms = (props) => {
    let fields;

    switch (props.field.type) {
        case 'input':
           fields = (
               <input value= {props.value} onChange={props.change}/>
           )
            break;
        case 'textarea':
           fields = (
            <textarea  value= {props.value} onChange={props.change}></textarea>
           )
            break;
        case 'select':
           fields = (
            <select onChange = {props.change}>
                {props.field.sections.map((section) => {
                    return(
                        <option value={section.title}>{section.title}</option>
                    )
                })}
            </select>
           )
            break;
        default:
            break;
    }

    return (
        fields
    )
}

export default BlogForms; 
