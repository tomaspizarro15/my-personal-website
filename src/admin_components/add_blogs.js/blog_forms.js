import React from 'react';
import './add_blog.css';


const BlogForms = (props) => {
    let fields;
    switch (props.field.type) {
        case 'input':
           fields = (
               <input/>
           )
            break;
        case 'textarea':
           fields = (
            <textarea></textarea>
           )
            break;
        case 'select':
           fields = (
            <select>

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
