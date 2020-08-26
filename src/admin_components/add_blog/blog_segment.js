import React from 'react';
import './add_blog.css';




const BlogSegment = (props) => {
    return (
        <div className="blog_segment__container">
            <div className="blog_segment">
                <div className="segment title">
                    <div className="segment_head title">
                        <p>title</p>
                    </div>
                </div>
                <div className="segment content">
                    <div className="segment_head content">
                        <p>content</p>
                    </div>
                </div>
                <div className="segment send">
                    <div className="segment_head title">
                        <p>send</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogSegment; 