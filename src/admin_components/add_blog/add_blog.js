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
            apartado: "",
            segmentos: []
        },
        segmentos: [],
        sectionId: "",

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
                console.log(fields)
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
        this.handleBlog()
    }
    handleBlog = (isValid) => {


        this.fetchBlogToAPI();

    }

    //fetching method into localhost:8080

    fetchBlogToAPI = () => {
        let blog = { ...this.state.blog }
        console.log("TO SEND BLOG:", blog)
        fetch('http://localhost:8080/admin/add-blog', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sectionId: blog.sectionId,
                section: blog.seccion,
                fragment: blog.apartado,
                title: blog.titulo,
                segments: blog.segmentos,
            })
        })
            .then(response => {
                const modal = { ...this.state.modal }
                modal.status = true;
                console.log(response)
                switch (response.status) {
                    case 201:
                        modal.type = "good";
                        modal.message = "blog creado correctamente!";
                        blog = {};
                        break;
                    case 422:
                        modal.type = "error";
                        modal.message = "Error : Blog creado anteriormente!";
                        break;
                    case 409:
                        modal.type = "error";
                        modal.message = "Error : datos invalidos o no especificados!";
                    default:
                        break;
                }
                this.setState({ modal: modal })
            })
            .catch(err => {
                console.log(err)
            })
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

        const newSegment = { id: uuidv4(), title: segmentFields[0].value, content: segmentFields[1].value }

        const newBlog = { ...this.state.blog }
        newBlog.segmentos.push(newSegment);

        newSegments.splice(index, 1);

        this.setState({ blog: newBlog, segmentos: newSegments })
    }

    sectionInputHandler = (event, i) => {
        let newOpciones = [...this.state.opciones];

        newOpciones[i].value = event.target.value;

        const updatedBlog = { ...this.state.blog }

        if (i === 1) {
            newOpciones[i].sections.map(section => {
                if (section.title === event.target.value) {
                    updatedBlog.sectionId = section._id;
                    newOpciones[2].sections = section.items;
                    newOpciones[2].value = section.items[0].title;
                }
            })
        }
        updatedBlog.titulo = newOpciones[0].value;
        updatedBlog.seccion = newOpciones[1].value;
        updatedBlog.apartado = newOpciones[2].value;

        this.setState({ opciones: newOpciones, blog: updatedBlog })
    }

    assingItemsToSection = (options) => {
        let sectionItems;
        options.map(opcion => {
            if (opcion.sections) {
                opcion.sections.map(section => {
                    if (opcion.value === section.title) {
                        section.items.push({ _id: uuidv4() })
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
                <Modal height={modal.height} status={modal.status} message={modal.message} type={modal.type} logo={null} click={() => this.validateBlog(modal.status)} close={this.modalActivate} />
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