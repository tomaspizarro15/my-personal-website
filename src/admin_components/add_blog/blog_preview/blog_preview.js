import React from 'react';
import './blog_preview.css';


const BlogPreview = (props) => {

  console.log(props.blog)

  return (
    <div>
      {props.blog.segmentos.map(segment => {
        return (
          <div>
            <label className="segment_preview__title">{segment.title}</label>
            <p className="segment_preview__content">{segment.content}</p>
          </div>
        )
      })}
    </div>

  )
}

export default BlogPreview;