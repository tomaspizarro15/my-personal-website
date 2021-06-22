import React, { Component } from 'react';
import './add_toolbar.css';
import Phrase from '../../../components/phrases/phrases';
import BlogForms from './blog_forms';
import AddSegment from '../add_segment/add_segment';
import ErrorHandler from './../../../error/errorComponents/404';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
class AddToolbar extends Component {
    state = {
        phrases: [
            { message: "Crear nueva sección ", color: "#212b85" },
            { message: "Crear nuevo apartado", color: "#212b85" },
        ],
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
                title: "Titulo del apartado",
                type: "input",
                value: "",
                placeholder: "Blog title"
            },
            {
                title: "Seccion del apartado",
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
        blogStatus: false,


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
                fields[fields.length - 1].sections = data.toolbar;
                fields[fields.length - 1].sections.unshift({
                    title: "Seleccione una opción"
                })
                this.setState({ fields: fields })
            })
            .catch(err => {
                console.log("Failed", err)
            })
    }
    submitApartado = (event) => {
        event.preventDefault();
        let values = [];

        const fields = [...this.state.fields];
        fields.map((field, i) => {
            values.unshift(
                field.value
            )
        })
        fetch('http://localhost:8080/admin/add-blog', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : this.props.token, 
            },
            body: JSON.stringify({
                title: values[1].toLowerCase(),
                section: values[0],
            })
        })
            .then(promise => {
                console.log(promise)
                const statusBlog = { code: promise.status, status: promise.statusText }
                this.setState({ statusBlog: statusBlog, blogStatus: true })

                if (promise.status === 201) {
                    setTimeout(() => {
                        window.location.reload();
                    }, 1250);
                }

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
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.props.token,
            },
            body: JSON.stringify({
                id: uuidv4(),
                title: this.state.newSection,
            })
        }).then(promise => {
            statusCode = { code: promise.status, status: promise.statusText }
            this.setState({ statusCode: statusCode })
            return promise.json();
        })
            .then(response => {
                console.log("Response new section", response)
                const newFields = [...this.state.fields];
                newFields[0].value = "";
                this.setState({ responseMessage: response, status: true, newSection: "", fields: newFields })

                if (response.code === 201) {
                    setTimeout(() => {
                        window.location.reload();
                    }, 1250);
                }
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
        console.log("Render")
        console.log(this.state.statusBlog)
        let fields = [...this.state.fields];
        fields.map((field, i) => {

            field.id = i;

        })
        return (
            <div className="add_blog__container">
                <Phrase phrase={this.state.phrases[1]} />
                <form className="add_blog" onSubmit={(event) => this.submitApartado(event)}>
                    {fields.map((field) => {
                        return (
                            <BlogForms key={fields.id} value={field.value} field={field} change={(event) => this.blogInputHandler(event, field.id)} select={field.title} />
                        )
                    })}
                    <button className="add_blog_btn" type="submit">Create blog</button>
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
const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}
export default connect(mapStateToProps)(AddToolbar); 