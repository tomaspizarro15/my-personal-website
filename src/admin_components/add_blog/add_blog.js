import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from '../add_toolbar/blog_forms';
import BlogSegment from './blog_segment';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../util/modal/modal';
import Spacer from '../../util/spacer/spacer';


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
        
        sectionItems : [],

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
    addSegment = () => {
        const newSegment = {
            id: uuidv4(),
            fields: [
                {
                    id: uuidv4(), title: "Blog Title", type: "input", value: "",
                },
                {
                    id: uuidv4(), title: "Blog Content", type: "textarea", value: "",
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
        let modalUpdated = { ...this.state.modal }
        if (this.state.modal.type !== "") {
            modalUpdated = { status: false, message: "¿Esta seguro de que quiere subir el blog?", height: 20, type: "" };
        } else {
            modalUpdated.status = !modalUpdated.status;
        }
        this.setState({ modal: modalUpdated })
    }

    checkBlog = () => {

        console.log()

        let isValid = true;

        isValid = this.state.blog.segmentos.length >= 1 && isValid;

        console.log("valid?", isValid)
        isValid = this.state.opciones[0].value.length >= 6 && isValid;

        console.log("valid?", isValid)
        isValid = this.state.opciones[1].value !== "" && isValid;
        console.log("valid?", isValid)

        const modal = { ...this.state.modal }
        modal.status = true;

        if (isValid) {
            modal.message = "¡Blog Creado correctamente!";
            modal.type = 'good'

            this.fetchBlog();

        } else {
            modal.message = "ERROR: Datos invalidos!";
            modal.type = 'error'
        }

        this.setState({ modal: modal })
    }

    fetchBlog = () => {
        console.log("This method will fetch my blog")
    }


    blogInputHandler = (event, index) => {
        const newSegment = [...this.state.segmentos]
        if (event.target.toString().includes("TextArea")) {
            newSegment[index].fields[1].value = event.target.value;
        } else {
            newSegment[index].fields[0].value = event.target.value;
        }

        this.setState({ segmentos: newSegment })
        console.log(this.state.segmentos)
    }

    fetchSection = (title) => {
        fetch('http://localhost:8080/toolbar/' + title, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(promise => {
            return promise.json()
        })
        .then(response => response.data)
        .then(data => {
            this.setState({sectionItems : data})
        })
        .catch(err => {
            console.log(err)
        })
    }


    sectionInputHandler = (event, i) => {

        let newOpciones = [...this.state.opciones];
        if (event.target.value === "Seleccione una opción") {
            newOpciones[i].value = "";
        } else {
            newOpciones[i].value = event.target.value;
        }
        this.setState({ opciones: newOpciones })

        if(newOpciones[i].type === 'select' && newOpciones[i].value !== "" ) {
            this.fetchSection(newOpciones[i].value)
        }

    }

   
    render() {
        let opciones = [...this.state.opciones];
        const modal = { ...this.state.modal }
        return (
            <div className="add_blog__container">
                <Modal height={modal.height} status={modal.status} message={modal.message} type={modal.type} logo={null} click={this.checkBlog} close={this.modalActivate} />
                <Phrase phrase={{ message: "Añadir un Blog", color: "#212b85" }} />
                <form className="add_blog" onSubmit={null}>
                    {opciones.map((opcion, i) => {
                        return (
                            <BlogForms key={opcion.id} field={opcion} value={opcion.value} change={(event) => { this.sectionInputHandler(event, i) }} />
                        )
                    })}
                    <Spacer height="50px" />

                    {this.state.segmentos.map((segmento, i) => {
                        return (
                            <BlogSegment fields={segmento.fields} key={segmento.id} delete={() => { this.deleteSection(i) }} create={() => { this.createSection(i) }} change={(event) => { this.blogInputHandler(event, i) }} />
                        )
                    })}
                    <button className="plus_button" type="button" onClick={this.addSegment}>+</button>
                    <button type="submit" className="submit_blog__button" onClick={(event) => { this.modalActivate(event) }}>Create Blog</button>
                </form>
                <Spacer height="50px" />
            </div>
        )
    }
}


export default AddBlog; 