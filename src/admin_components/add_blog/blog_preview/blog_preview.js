import React from 'react';
import './blog_preview.css';


const BlogPreview = (props) => {


  return (
    <div className="segment_preview__container">
    <h1>{props.blog.title}</h1>
      {props.blog.segmentos.map(segment => {
        return (
          <div id ={segment.id} className="segment_preview">
            <label className="segment_preview__title">{segment.title}</label>
            <p className="segment_preview__content">{segment.content}</p>
          </div>
        )
      })}
    </div>

  )
}

export default BlogPreview;