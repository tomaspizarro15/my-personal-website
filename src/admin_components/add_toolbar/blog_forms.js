import React from 'react';
import './add_toolbar.css';


const BlogForms = (props) => {
    let fields;
    switch (props.field.type) {
        case 'input':
            fields = (
                <React.Fragment>
                    <p>{props.field.title}</p>
                    <input value={props.value} onChange={props.change} />
                </React.Fragment>
            )
            break;
        case 'textarea':
            fields = (
                <React.Fragment>
                    <p>{props.field.title}</p>
                    <textarea value={props.value} onChange={props.change}></textarea>
                </React.Fragment>
            )
            break;
        case 'select':
            fields = (
                <React.Fragment>
                    <p>{props.field.title}</p>
                    <select onChange={props.change}>
                        {props.field.sections.map((section) => {
                            return (
                                <option  key = {section._id}value={section.title}>{section.title}</option>
                            )
                        })}
                    </select>
                </React.Fragment>
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
