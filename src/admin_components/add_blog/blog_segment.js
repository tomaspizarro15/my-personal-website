import React from 'react';
import './add_blog.css';




const BlogSegment = (props) => {
    return (
        <div className="blog_segment__container">
            <div className="blog_segment">
                {props.fields.map(field => {
                    return (
                        <div className="segment_fields" key = {field.id}>
                            <div className="segment_fields__title">
                                <label>{field.title}:</label>
                            </div>
                            {field.type === "input" ? <input value={field.value} onChange={props.change}/> : <textarea value={field.value} onChange={props.change}/>}
                        </div>

                    )
                })}

                <div className="segment_foot">
                    <button className="add_section_btn" type="button" onClick={props.create}>Done!</button>
                    <button className="delete_section_btn" type="button" onClick={props.delete}>X</button>
                </div>
            </div>
        </div>
    )
}


export default BlogSegment; 