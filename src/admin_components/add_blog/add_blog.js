import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';
import BlogForms from '../add_toolbar/blog_forms';
import blogSegment from './blog_segment';
import BlogSegment from './blog_segment';



class AddBlog extends Component {

    state = {
        opciones: [
            {
                id :"41HMV73NHGV1y%$$KA",
                title: "Titulo del blog",
                type: "input",
                value: "",
                placeholder: "Blog title"
            },
            {
                id :"56781XSDKL%J123U",
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
        }
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

    changeHandler = (event, index) => {

        let newOpciones = [...this.state.opciones];
        newOpciones.map(opcion => {
            opcion.value = event.target.value;
        })

        this.setState({ opciones: newOpciones })

    }

    render() {
        let opciones = [...this.state.opciones];
        return (
            <div className="add_blog__container">
                <Phrase phrase={{ message: "Añadir un Blog", color: "#212b85" }} />
                <form className="add_blog">
                    {opciones.map((opcion) => {
                        return (
                            <BlogForms key={opcion.id} field={opcion} value={opcion.value} change={(event) => { this.changeHandler(event, opcion.id) }} />
                        )
                    })}
                    <BlogSegment/>
                    <button style={{backgroundColor:"#212b85", color:"#ccc" , width:"100%" , padding:"10px 0 10px 0" , fontSize:"44px"}}>+</button>
                    <button>Submit blog</button>
                </form>
            </div>
        )
    }
}


export default AddBlog; 