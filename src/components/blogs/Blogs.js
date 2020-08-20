import React, { Component } from 'react';
import './blogs_card.css';



class Blogs extends Component {
    state = {
        blogs: [

        ]
    };


    componentDidUpdate() {

        const getBlogs = () => {

            fetch('http://localhost:8080', {
                method: 'GET',
            })
                .then(res => {
                    return res.json()
                })
                .then(blogs => {
                    console.log(blogs)
                })
                .catch(err => {
                    throw new Error(err)
                })

        }

    }

    render() {

        let adminBlog;
        let isValid = false;

        if (isValid) {
            adminBlog = (
                <div className="admin_header__container">
                    <nav className="admin_header">
                        <Link to="/admin/add-blog">
                            Create new blog
                        </Link>
                    </nav>
                </div>

            )
        }

        return (
            <div className="blogs_container">
                {adminBlog}
            </div>
        )
    }
}

export default Blogs; 