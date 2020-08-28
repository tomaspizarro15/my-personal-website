import React from 'react';
import './add_blog.css';




const BlogSegment = (props) => {




    return (
        <div className="blog_segment__container">
            <div className="blog_segment">
                {props.fields.map(field => {
                    return (
                        <div className="segment_fields">
                            <label>{field.title}</label>
                            {field.type === "input" ? <input /> : <textarea />}
                        </div>

                    )
                })}

                <div className="segment_send">
                    <div className="segment_head button">
                        <button className="add_section_btn" type="button" onClick={props.create}>Done!</button>
                        <button className="delete_section_btn" type="button" onClick={props.delete}>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogSegment; 