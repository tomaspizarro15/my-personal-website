import React, { Component } from 'react';
import './education.css';
import Phrase from '../phrases/phrases';
import Card from '../card/card';

import academindLogo from './academind_icon.jpg';
import Listate from '../listate/listate';
import icon from './list_icon.png'
import TextComponent from '../text_component/text_component';
import { Helmet } from 'react-helmet';
import ListaDeTexto from '../lista_texto/lista_texto';
class Education extends Component {

    state = {
        phrases: {
            skills: { message: "Habilidades como desarrollador", color: '#212b85' },
            head: { message: "Certificación", color: "#212B85" },
            cursosRealizados: { message: "Cursos realizados", color: "#212B85" },
            cursosNoRealizados: { message: "Cursos por realizar", color: "#212B85" }
        },
        cards: {
            academind: {
                logo: academindLogo,
                name: 'Academind',
                website: '',
                text: 'Academind es un instituto de programación online fundado por Maximilian Schwarzmülller & Manuel Lorenz y cuenta con mas de 1.000.000 de estudiantes alrededor del mundo.  Se enfoca en el desarrollo web y cuenta con decenas de certificaciones sobre distintas tecnologías de la industria como Mongodb, Node.js , React.js , Angular , Native y mas!',
                color: 'orange',
                link: 'https://academind.com/',
            }
        },
        paragraph: {
            title: { message: 'Educación', color: '#212b85' },
            main: [
                { id: "p01", text: 'Mi educación el la programación comenzó en la UTN-FRM en Mendoza, Argentina. Estudie durante 1 año sobre Fundamentos de la programación , para después realizar una especialización en paginas web' },
                { id: "p02", text: 'Después me especialice en desarrollo web empezando con las bases de JavaScript(EcmaScript 2016)[Clases, Arrays, Objects , paradigma funcional entre muchas otras cosas]' },
                { id: "p03", text: 'Me eduque como MERN  App Developer y lo hice desde Udemy de la mano de Academind  ' }
            ]
        },
        techSkills: {
            title: 'Habilidades',
            items: [
                { id: "p0", text: "A lo largo de estos años me he desarrollado como FullStack Developer en un entorno de Javascript" },
                { id: "p0", text: "" }
            ]
        },
        educacionPrevia: {
            title: 'Educación previa',
            items: [
                { id: "p04", text: 'Tengo un bachillerato en economía y en educación contable   egresado de la escuela N 4-128 Adolfo Peréz Esquivel Mendoza , Argentina' }
            ]
        },
        idiomas: {
            title: {text : "Idiomas" , color :"#212B85"},
            items: [
                { id: "p01", texto: 'Español' },
                { id: "p02", texto: 'Inglés avanzado'  },
                { id: "p03", texto: 'Portugués básico' },
            ]
        },
        lists: {
            academindCourses: {
                title: '',
                realizados: [
                    { id: "list01", title: 'Node', code: 'NodeJS - The Complete Guide(MVC, REST APIs ,GraphQL ,Deno)', href: "https://www.udemy.com/course/nodejs-the-complete-guide" },
                    { id: "list02", title: 'React', code: 'React - The Complete Guide (incl Hooks, React Router, Redux)', href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux" },
                ],
                noRealizados: [
                    { id: "list03", title: 'Mongodb', code: 'NodeJS - The Complete Guide(MVC, REST APIs ,GraphQL ,Deno)', href: "https://www.udemy.com/course/nodejs-the-complete-guide" },
                    { id: "list04", title: 'React Native', code: 'NodeJS - The Complete Guide(MVC, REST APIs ,GraphQL ,Deno)', href: "https://www.udemy.com/course/nodejs-the-complete-guide" },
                ]
            },
            skills: [
                { id: "list00", texto: "Conocimiento intermedio-avanzado en JavaScript(ES6)" },
                { id: "list01", texto: "Resolver algoritmos de dificultad intermedia.([5 kyu] Codewars.com)" },
                { id :"list02", texto :"Implementación de Error Handling en JavaScript"},
                { id: "list03", texto: "Manejo de Promesas , Callbacks y Asynchronous Programming" },
                { id: "list04", texto: "Orquestar y planificar un Sistema informático" },
                { id: "list05", texto: "Diseñar, Construir y Desplegar servidores en Node/Express" },
                { id: "list06", texto: "Manipular, leer y escribir bases de datos (SQL , MONGOdb)" },
                { id: "list07", texto: "Conocimiento en Framewoks de bases de datos como Mongoose , Sequelize" },
                { id: "list08", texto: "Resolver problemáticas presentadas en la construcción de una Aplicación entera" },
                { id: "list09", texto: "Desarrollar una WEB desde 0. con el MVC system" },
                { id: "list10", texto: "Construir APIs , REST APIs en Node.js , Express.js" },
                {id :"list11" , texto :"Conocimientos en Autentificación y validación en frontend y backend (Express-validator , custom Middlewares)"},
                { id: "list12", texto: "Construir el Cliente de una aplicación en React" },
                { id: "list13", texto: "Realizar conexiones/consultas CLIENTE-SERVIDOR JavaScript - Node.js" },
                { id: "list14", texto: "Utilizar softwares de consultas (Postman , Insomnia)" },
                { id: "list15", texto: "Manipular tanto el DOM/REACT DOM a la perfección con React.Router" },
                { id: "list16", texto: "Implementar Redux en una aplicación React" },
                { id: "list17", texto: "Desplegar aplicaciones en distintos servicios (AWS, HEROKU)" },
                { id: "list18", texto: "Testear aplicaciones mediante UNIT-TESTING" },
                { id: "list19", texto: "Diseñar aplicaciones con estilo Responsivo mediante CSS , Media queries , React Style atribute" }
            ]
        },
        titles: {
            skills: "Habilidades como desarrollador"
        }
    };
    render() {

        let phrases = { ...this.state.phrases }
        let paragraphs = { ...this.state.paragraph }
        let academindCard = { ...this.state.cards.academind }
        let lists = { ...this.state.lists }
        return (
            <div className="education_page">
                <Helmet><title>Tomas Pizarro - Educación</title></Helmet>
                <TextComponent paragraphs={paragraphs.main} title={paragraphs.title.message} />
                <ListaDeTexto title={phrases.skills} lista={lists.skills} />
                <Phrase phrase={phrases.head} />
                <Card card={academindCard} />
                <Listate listado={lists.academindCourses.realizados} title={phrases.cursosRealizados.message} icon={icon} />
                <Listate listado={lists.academindCourses.noRealizados} title={phrases.cursosNoRealizados.message} icon={icon} />
                <TextComponent paragraphs={this.state.educacionPrevia.items} title={this.state.educacionPrevia.title} />
                <ListaDeTexto  title = {this.state.idiomas.title} lista = {this.state.idiomas.items}/>
            </div>
        )
    }
}

export default Education; 