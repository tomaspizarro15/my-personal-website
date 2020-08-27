import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from '../add_toolbar/blog_forms';
import blogSegment from './blog_segment';
import BlogSegment from './blog_segment';
import { v4 as uuidv4 } from 'uuid';


class AddBlog extends Component {

    state = {
        phrase: { message: "Añadir segmento", color: "#212b85" },
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
        segmentos: [
            { id: uuidv4(), title: "", content: "" }
        ]
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
        }else {
            newOpciones[i].value = event.target.value;
        }  
        this.setState({ opciones: newOpciones })
    }

    addSegment = () => {
        const newSegment = { id: uuidv4(), title: "", content: "" }
        const segments = [...this.state.segmentos]

        segments.push(
            newSegment
        )
        this.setState({ segmentos: segments })
    }


    render() {
        let opciones = [...this.state.opciones];
        console.log(this.state.opciones)
        return (
            <div className="add_blog__container">
                <Phrase phrase={{ message: "Añadir un Blog", color: "#212b85" }} />
                <form className="add_blog">

                    {opciones.map((opcion, i) => {
                        return (
                            <BlogForms key={opcion.id} field={opcion} value={opcion.value} change={(event) => { this.changeHandler(event, i) }} />
                        )
                    })}
                    <Phrase phrase={this.state.blog} />
                    {this.state.segmentos.map(segmento => {
                        return (
                            <BlogSegment key={segmento.id} />
                        )
                    })}
                    <button className="" type="button" style={{ backgroundColor: "#212b85", color: "#ccc", width: "50%", padding: "10px 0 10px 0", fontSize: "44px", margin: "20px 0 20px 0" }} onClick={this.addSegment}>+</button>
                    <button>Submit blog</button>
                </form>
            </div>
        )
    }
}


export default AddBlog; 