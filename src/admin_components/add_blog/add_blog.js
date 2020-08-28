import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from '../add_toolbar/blog_forms';
import blogSegment from './blog_segment';
import BlogSegment from './blog_segment';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../util/modal/modal';


class AddBlog extends Component {

    state = {
        phrase: { message: "Añadir segmentos", color: "#212b85" },
        opciones: [
            {
                id: "41HMV73NHGV1y%$$KA",
                title: "Titulo del blog",
                type: "input",
                value: "",
                placeholder: "Blog title"
            },
            {
                id: "56781XSDKL%J123U",
                title: "Seccion del blog",
                type: "select",
                value: "",
                sections: [

                ]
            }
        ],
        blog: {
            titulo: "",
            seccion: "",
            segmentos: [
                {}
            ]
        },
        segmentos: [],


        modal: { status: false, message: "¿Esta seguro de que quiere subir el blog?", height: 20 },
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
                const fields = [...this.state.opciones]
                fields[fields.length - 1].sections = data.toolbar;
                fields[fields.length - 1].sections.unshift({
                    title: "Seleccione una opción"
                })
                this.setState({ opciones: fields })
            })
            .catch(err => {
                console.log("Failed", err)
            })

    }

    changeHandler = (event, i) => {

        let newOpciones = [...this.state.opciones];
        if (event.target.value === "Seleccione una opción") {
            newOpciones[i].value = "";
        } else {
            newOpciones[i].value = event.target.value;
        }
        this.setState({ opciones: newOpciones })
    }

    addSegment = () => {
        const newSegment = {
            id: uuidv4(),
            fields: [
                {
                    id: uuidv4(), title:"Blog Title",type :"input", value:"",
                },
                {
                    id: uuidv4(), title:"Blog Content",type:"textarea" , value:"",
                }]
        }
        const segments = [...this.state.segmentos]

        segments.push(
            newSegment
        )
        this.setState({ segmentos: segments })
    }

    deleteSection = (index) => {
        const segments = [...this.state.segmentos]
        segments.splice(index, 1)
        this.setState({ segmentos: segments })
    }
    createSection = (index) => {
        const segments = [...this.state.segmentos]
        segments[index].status = !segments.status;
        this.setState({ segmentos: segments })
    }

    modalActivate = (event) => {
        event.preventDefault();
        const modalUpdated = { ...this.state.modal }
        modalUpdated.status = !modalUpdated.status;
        this.setState({ modal: modalUpdated })
    }

    submitBlog = () => {
        console.log("Click submit")
        console.log(this.state.blog.segmentos.length)
        if (this.state.blog.segmentos.length === 1) {
            const modal = { ...this.state.modal }
            modal.status = true;
            modal.message = "ERROR: El blog esta vacio!";
            this.setState({ modal: modal })

        }
    }

    render() {
        let opciones = [...this.state.opciones];
        const modal = { ...this.state.modal }
        console.log(this.state.segmentos);
        return (
            <div className="add_blog__container">
                <Modal height={modal.height} status={modal.status} message={modal.message} click={this.submitBlog} close={this.modalActivate} />
                <Phrase phrase={{ message: "Añadir un Blog", color: "#212b85" }} />
                <form className="add_blog" onSubmit={null}>
                    {opciones.map((opcion, i) => {
                        return (
                            <BlogForms key={opcion.id} field={opcion} value={opcion.value} change={(event) => { this.changeHandler(event, i) }} />
                        )
                    })}
                    <Phrase phrase={this.state.phrase} />

                    {this.state.segmentos.map((segmento, i) => {
                        return (
                            <BlogSegment fields={segmento.fields} key={segmento.id} delete={() => { this.deleteSection(i) }} create={() => { this.createSection(i) }} />
                        )
                    })}
                    <button className="plus_button" type="button" onClick={this.addSegment}>New segment</button>
                    <button type="submit" onClick={(event) => { this.modalActivate(event) }}>Submit blog</button>
                </form>
            </div>
        )
    }
}


export default AddBlog; 