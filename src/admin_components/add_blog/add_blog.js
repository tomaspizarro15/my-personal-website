import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from '../add_toolbar/blog_forms';
import BlogSegment from './blog_segment';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../util/modal/modal';
import Spacer from '../../util/spacer/spacer';
import BlogPreview from './blog_preview/blog_preview';


class AddBlog extends Component {

    state = {
        phrase: { message: "Nuevo segmento", color: "#212b85" },
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
            },
            {
                id: "1O92UO7781223U",
                title: "Apartado del blog",
                type: "select",
                value: "",
                sections: [

                ]
            }
        ],
        blog: {
            sectionId: "",
            titulo: "",
            seccion: "",
            apartado:"",
            segmentos: []
        },
        segmentos: [],

        sectionItems: [{ title: "seleccione un apartado" }],

        modal: { status: false, message: "¿Esta seguro de que quiere subir el blog?", height: 20, type: "" },
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
                let items = fields[fields.length - 2].sections = data.toolbar;
                fields[fields.length - 2].sections.unshift({
                    title: "Seleccione una opción", _id: uuidv4(), items: [{ title: "seleccione un apartado" }]
                })
                this.setState({ opciones: fields })
            })
            .catch(err => {
                console.log("Failed", err)
            })

    }


    //SECTION METHODS

    addSegment = () => {
        const newSegment = {
            id: uuidv4(),
            fields: [
                { id: uuidv4(), title: "Blog Title", type: "input", value: "" },
                { id: uuidv4(), title: "Blog Content", type: "textarea", value: "" },
            ]
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

    //MODAL METHOD (UI/UX)

    modalActivate = (event) => {
        event.preventDefault();
        let modalUpdated = { ...this.state.modal }
        if (this.state.modal.type !== "") {
            modalUpdated = { status: false, message: "¿Esta seguro de que quiere subir el blog?", height: 20, type: "" };
        } else {
            modalUpdated.status = !modalUpdated.status;
        }
        this.setState({ modal: modalUpdated })
    }

    // UX VALIDATION (blog methods)

    validateBlog = () => {
        let isValid = true;
        isValid = this.state.blog.segmentos.length >= 1 && isValid;
        isValid = this.state.opciones[0].value.length >= 6 && isValid;
        isValid = this.state.opciones[1].value !== "" && isValid
      
        this.handleBlog(isValid)
    }
    handleBlog = (isValid) => {
        const modal = { ...this.state.modal }
        console.log(this.state.blog)
        modal.status = true;
        if (isValid) {
            modal.message = "¡Blog Creado correctamente!";
            modal.type = 'good'
            this.fetchBlogToAPI();
        } else {
            modal.message = "ERROR: Datos invalidos!";
            modal.type = 'error'
        }
        this.setState({ modal: modal })
    }

    //fetching method into localhost:8080

    fetchBlogToAPI = () => {
       console.log(this.state.blog)
    }
    // INPUT HANDLERS 

    segmentInputHandler = (event, index) => {
        const newSegment = [...this.state.segmentos]
        if (event.target.toString().includes("TextArea")) {
            newSegment[index].fields[1].value = event.target.value;
        } else {
            newSegment[index].fields[0].value = event.target.value;
        }
        this.setState({ segmentos: newSegment })

    }

    segmentSubmitHandler = (event, index) => {
        const newSegments = [...this.state.segmentos]
        const segmentFields = newSegments[index].fields;

        const newSegment = {id: uuidv4(),  title: segmentFields[0].value, content: segmentFields[1].value }

        const newBlog = { ...this.state.blog }
        newBlog.segmentos.push(newSegment);

        newSegments.splice(index, 1);

        this.setState({ blog: newBlog, segmentos: newSegments })
    }

    sectionInputHandler = (event, i) => {
        let newOpciones = [...this.state.opciones];
        if (event.target.value === "Seleccione una opción") {
            newOpciones[i].value = "";
        } else {
            newOpciones[i].value = event.target.value;
        }
        let sectionItems;

        if (i === 1) {
            sectionItems = this.assingItemsToSection(newOpciones)
            newOpciones[2].sections = sectionItems;
        }

        const updatedBlog = {...this.state.blog}

        updatedBlog.titulo = newOpciones[0].value; 
        updatedBlog.seccion = newOpciones[1].value; 
        updatedBlog.apartado = newOpciones[2].value;
        updatedBlog.sectionId = newOpciones[1].sections[i]._id;
        this.setState({ opciones: newOpciones, sectionItems: sectionItems  ,blog: updatedBlog})
    }

    assingItemsToSection = (options) => {
        let sectionItems;
        options.map(opcion => {
            if (opcion.sections) {
                opcion.sections.map(section => {
                    if (opcion.value === section.title) {
                        section.items.push({_id : uuidv4()})
                        sectionItems = section.items;
                    }
                })
            }
        })
        return sectionItems;
    }
    render() {
        let items = []
        if (this.state.sectionItems) {
            items = [...this.state.sectionItems]
        }
        let opciones = [...this.state.opciones];
        const modal = { ...this.state.modal };
        const blog = { ...this.state.blog }
        return (
            <div className="add_blog__container">
                <Modal height={modal.height} status={modal.status} message={modal.message} type={modal.type} logo={null} click={this.validateBlog} close={this.modalActivate} />
                <Phrase phrase={{ message: "Añadir un Blog", color: "#212b85" }} />

                <form className="add_blog">
                    {opciones.map((opcion, i) => {
                        return (
                            <BlogForms
                                key={opcion.id}
                                field={opcion}
                                value={opcion.value}
                                change={(event) => { this.sectionInputHandler(event, i) }}
                            />
                        )
                    })}
                    <Spacer height="50px" />
                    <label className="blog_title">{this.state.blog.titulo}</label>
                    <BlogPreview blog={blog} />
                    {this.state.segmentos.map((segmento, i) => {
                        return (
                            <BlogSegment
                                key={segmento.id}
                                fields={segmento.fields}
                                index={i}
                                delete={() => { this.deleteSection(i) }}
                                create={() => { this.createSection(i) }}
                                submit={(event) => { this.segmentSubmitHandler(event, i) }}
                                change={(event) => { this.segmentInputHandler(event, i) }} />
                        )
                    })}
                    <button className="plus_button" type="button" onClick={this.addSegment}>+</button>
                    <button type="submit" className="submit_blog__button" onClick={(event) => { this.modalActivate(event) }}>Create Blog</button>
                    <Spacer height="50px" />
                </form>
            </div>
        )
    }
}


export default AddBlog; 