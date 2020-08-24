import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from './blog_forms';
import AddSegment from '../add_segment/add_segment';
import ErrorHandler from '../../error/error_handler';
import Toolbar from '../../components/toolbar/Toolbar';



class AddBlog extends Component {

    state = {
        phrases: [
            { message: "Crear nueva sección ", color: "#212b185" }
        ],
        title: { message: "Crear nuevo blog", color: "black" },
        options: [
            { title: "JavaScript" },
            { title: "React" },
            { title: "Node" },
            { title: "Express" },
            { title: "Hello" },
        ],
        title: { id: "0", title: "Blog title", value: "" },
        content: { id: "1", title: "Blog content", value: "" },
        options: { id: "2", title: "Blog option", value: "", options: [] },

        fields: [
            {
                title: "Blog Title",
                type: "input",
                value: "",
                placeholder: "Blog title"

            },
            {
                title: "Blog content",
                type: "textarea",
                value: "",
                placeholder: "Blog title"

            },
            {
                title: "Blog  Segment",
                type: "select",
                value: "",
                sections: []
            }

        ],

        newSection: "",
        responseMessage: "",
        statusCode: {},
        status: false,

    }
    componentDidMount() {
        fetch('http://localhost:8080/toolbar', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return res.json()
            })
            .then(data => {
                const fields = [...this.state.fields]
                fields[2].sections = data.toolbar; 
                this.setState({fields : fields})
            })
            .catch(err => {
                console.log("Failed", err)
            })
    }
    onChangeHandler = (event, id) => { }


    submitBlog = (event) => {
        event.preventDefault();
    }

    submitSection = (event) => {

        let statusCode;

        event.preventDefault();
        console.log(this.state.newSection)
        fetch('http://localhost:8080/admin/add-segment', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: this.state.newSection,
            })
        }).then(promise => {
            statusCode = { code: promise.status, status: promise.statusText}
            this.setState({ statusCode: statusCode })
            return promise.json();
        })
            .then(response => {
                this.setState({responseMessage: response , status : true})
            })
            .catch(err => {
              
            })
   
        return statusCode;

    }

    inputSectionHandler = (event) => {
        this.setState({ newSection: event.target.value })
    }

    render() {
        console.log(this.state.fields)
        let message = { ...this.state.title }
        return (
            <div className="add_blog__container">
                <Phrase phrase={message} />
                <form className="add_blog" onSubmit={(event) => this.submitBlog(event)}>
                    {this.state.fields.map(field => {
                        return (
                            <React.Fragment>
                                <label>{field.title}</label>
                                <BlogForms field={field} />
                            </React.Fragment>
                        )
                    })}
                    <button type="submit">Create blog</button>
                </form>
                <div className="add_section">
                    <Phrase phrase={this.state.phrases[0]} />
                    <AddSegment value={this.state.newSection} submit={(event) => this.submitSection(event)} change={(event) => this.inputSectionHandler(event)} />
                    <ErrorHandler error={this.state.statusCode} status= {this.state.status}/>
                </div>
            </div>
        )
    }
}

export default AddBlog; 