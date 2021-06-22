import React, { Component } from 'react';
import './diagram.css';
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';


import reactIcon from './react_icon.png';
import mongoDbIcon from './mongodb_icon.png';
import expressIcon from './node_express_icon.png';
import nodeIcon from './node_icon.png';
import DiagramItems from './diagram_items';
import DiagramInfo from './diagram_info';
import DiagramLogo from './diagram_logo';

class Diagram extends Component {
    state = {
        mernDiagram: {
            title: 'Ecosistema MERN (JavaScript)',

            items: [
                { id: '0', status: false, href: 'https://www.mongodb.com/', color: 'green', title: 'Mongo', description: 'Mongo es el tipo de base de datos de este Ecosistema , esta basada en la estructura de datos JSON , es una base de datos tipo noSQL',  color: '', icon: mongoDbIcon },
                { id: '1', status: false, href: 'https://expressjs.com/es/', color: 'yellow', title: 'Express', description: 'Express es el encargado de levantar la API en un servidor a través de un HOST, lo mas interesante de express es el express.Router() y sus famosos Middlewares. que permite definir endpoints disponibles para el cliente utilizando Middlewares.  Express es un modulo construido en Node, pero es tan grande y con tanta funcionalidad que se le "separa" de node',  color: '', icon: expressIcon },
                { id: '2', status: false, href: 'https://es.reactjs.org/', color: 'skyblue', title: 'React', description: 'React es una libreria de JavaScript desarrollada por facebook , sus dos grandes rasgos son el State managment y el renderizado del dominio , es una libreria muy poderosa, que concentra todo su potencial en escribir codigo "HTML" dentro de un entorno JavaScript.React renderiza el dominio a traves del reactDOM ahi se deposita la logica del usuario con JavaScript brindando al usuario de una buena experiencia e interface',  color: '', icon: reactIcon },
                { id: '3', status: false, href: 'https://nodejs.org/es/', color: 'green', title: 'Node', description: 'Node es un entorno de ejecucíon escrito en C++, en donde se orquesta la API. y se manejan todos los módulos requeridos para la aplicación, ejemplo de un Modulo es Express',  color: '', icon: nodeIcon },
            ],
            paragraphs: {
               upper : [
                { id : "p01" , text: 'Se utilizo todo un Ecosistema JavaScript tanto para el backend como para el frontend , una combinación de cuatro de las tecnologías mas utilizadas en la industria del desarrollo web' },
                {  id : "p02",text: 'Estos subsistemas tienen su rol especifico y definido para componer la aplicación, base de datos, servidor, frontend y ejecución.'}
               ],
               lower : [
                   { id : "p01" ,text: 'Este modelo de construcción de aplicaciones así mismo como MEAN , que es reemplaza React.js con el framework Angular , tiene un gran potencial al permitir al desarrollador programar en un solo lenguaje JS, ya que las bases de datos se manejan en formato "JSON", JavaScript Object Notation'},
                   { id : "p02" ,text: 'Ya desde 2009 que esta es una arquitectura viable, con el desarrollo de el entorno de ejecución Node , creado por Ryan Dahl'},
                   { id : "p03" ,text: 'los módulos de node permitieron la fácil adherencia de módulos de conexión con sesiones, bases de datos tales como Mongo o mySQL'},
                   { id : "p04" ,text: 'Mongodb permite un tipo de escalado horizontal y una flexibilidad de los datos en las colecciones, además de confiabilidad y seguridad de los datos sensibles del usuario'},
                   { id : "p05" ,text: 'Express permite explotar al máximo módulos de Node.js , como por ejemplo Routing , Sessions ,Validaciones etc'},
                   { id : "p06" ,text: 'React permite brindar al usuario una UI/UX excelente además de tener herramientas de renderizado y ruteo'},
                   { id : "p07" ,text: 'Node es el entorno de ejecución que permite levantar una aplicación JavaScript en server-side y no solo en el client-side'}         
               ]
            },
        },
        activeItem: []
    }
    activateDiagram = (id) => {
        const newDiagrams = { ...this.state.mernDiagram }
        const newItems = [...newDiagrams.items]

        newItems[id].status = !newItems[id].status;

        newItems.map((newItem, i) => {
            if (i != id) {
                newItem.status = false;
            }
            else {
                if(!newItem.status) {
                    return this.setState({activeItem : []})
                }
                setTimeout(() => {
                    this.setState({ activeItem: newItems[i] })
                    console.log(this.state.activeItem)
                }, 200);
            }
        })
        newDiagrams.items = newItems;
        this.setState({ mernDiagram: newDiagrams })
    }
    render() {
        let diagram = { ...this.state.mernDiagram }
        return (
            <div className="diagram_container">
                <Phrase phrase={{ color: 'black', message: diagram.title }} />
                <TextComponent paragraphs={diagram.paragraphs.upper} />
                <div className="diagram_items">
                    {diagram.items.map(item => {
                        return (
                            <div className="item_container" key={item.id}>
                                <DiagramLogo click={() => { this.activateDiagram(item.id) }} item={item} />
                                <DiagramItems  key ={item.id} status={item.status} color={item.color} />
                            </div>
                        )
                    })}
                </div>
                <DiagramInfo info={this.state.activeItem} />
                <TextComponent paragraphs = {diagram.paragraphs.lower}/>
            </div>
        );
    }
}

export default Diagram;