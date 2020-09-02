import React, { Component } from 'react';
import './blogs_card.css';



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
            .then(promise => promise.json())
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
                console.log(err)
            })
    }

    render() {
        return (
            <div className="blogs_container">
                <h1>{this.state.params.blog}</h1>
                <p>{this.state.blog.title}</p>
            </div>
        )
    }

}

export default Blogs;
