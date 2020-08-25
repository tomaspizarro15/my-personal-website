import React, { Component } from 'react';
import './add_toolbar.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from './blog_forms';
import AddSegment from '../add_segment/add_segment';
import ErrorHandler from '../../error/error_handler';




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
                title: "Titulo del blog",
                type: "input",
                value: "",
                placeholder: "Blog title"

            },
            {
                title: "Seccion del blog",
                type: "select",
                value: "",
                sections: []
            }

        ],

        newSection: "",
        responseMessage: "",
        statusCode: {},
        statusBlog: {},
        status: false,
        blogStatus : false,


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
                fields[1].sections = data.toolbar;
                fields[1].sections.unshift({
                    title: "Seleccione una opción"
                })
                this.setState({ fields: fields })
            })
            .catch(err => {
                console.log("Failed", err)
            })
    }



    submitBlog = (event) => {
        event.preventDefault();
        let values = [];

        const fields = [...this.state.fields];

        fields.map((field, i) => {
            values.unshift(
                field.value
            )
        })

        console.log(values)

        fetch('http://localhost:8080/admin/add-blog', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                blog: {
                    title: values[1],
                    section: values[0],
                }
            })

        })
            .then(promise => {
                console.log(promise)
                const statusBlog = { code: promise.status, status: promise.statusText }
                this.setState({ statusBlog: statusBlog  ,blogStatus : true})
                return promise.json()
            })
            .catch(err => {
                console.log(err)
            })

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
            statusCode = { code: promise.status, status: promise.statusText }
            this.setState({ statusCode: statusCode })
            return promise.json();
        })
            .then(response => {
                this.setState({ responseMessage: response, status: true, newSection: "" })
            })
            .catch(err => {
                console.log(err)
            })

        return statusCode;

    }

    inputSectionHandler = (event) => {
        this.setState({ newSection: event.target.value })
    }



    blogInputHandler = (event, i) => {
        const newFields = [...this.state.fields];

        newFields[i].value = event.target.value;

        this.setState({ fields: newFields })

    }

    render() {

        let fields = [...this.state.fields];
        let message = { ...this.state.title }
        return (
            <div className="add_blog__container">
                <Phrase phrase={message} />
                <form className="add_blog" onSubmit={(event) => this.submitBlog(event)}>
                    {fields.map((field, i) => {
                        return (
                            <React.Fragment>
                                <label>{field.title}</label>
                                <BlogForms value={field.value} field={field} change={(event) => this.blogInputHandler(event, i)} select={field.title} />
                            </React.Fragment>
                        )
                    })}
                    <button type="submit">Create blog</button>
                    <ErrorHandler error={this.state.statusBlog} status={this.state.blogStatus} />
                </form>
                <div className="add_section">
                    <Phrase phrase={this.state.phrases[0]} />
                    <AddSegment value={this.state.newSection} submit={(event) => this.submitSection(event)} change={(event) => this.inputSectionHandler(event)} />
                    <ErrorHandler error={this.state.statusCode} status={this.state.status} />
                </div>
            </div>
        )
    }
}

export default AddBlog; 