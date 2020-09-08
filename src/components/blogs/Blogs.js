import React, { Component } from 'react';
import './blogs.css';



class Blogs extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        blog: {
            params: {},
            title: "",
            segments: [],
        },
        params: {},
    }

    componentDidMount() {
        fetch('http://localhost:8080/blogs/' + this.props.match.params.id + '/' + this.props.match.params.blog)
            .then(promise => {

                return promise.json()
            })
            .then(blog => {
                console.log("BLOG:>", blog)
                this.setState({ blog: blog })
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidUpdate(nextState) {
        if (this.props.match.params !== nextState.match.params) {
            this.fetchComponent();
        }
    }
    fetchComponent = () => {
        fetch('http://localhost:8080/blogs/' + this.props.match.params.id + '/' + this.props.match.params.blog)
            .then(promise => promise.json())
            .then(blog => {
                console.log(blog)
                this.setState({ blog: blog })
            })
            .catch(err => {
                console.log("Not found")

            })
    }

    render() {
        let modal;

        if (this.state.blog.title === "") {
            modal = (
                <div className="blog_loader__container">
                    <div className="blog_loader"></div>
                </div>
            )

        }
        return (
            <div className="blogs_container">
                {modal}
                <h1 className="blogs_title">{this.state.blog.title}</h1>
                {this.state.blog.segments.map(segment => {
                    return (
                        <div className="blogs_segment__container">
                            <label className="blogs_segment__title">{segment.title}</label>
                            <text className="blogs_segment__content">{segment.content}</text>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Blogs;
