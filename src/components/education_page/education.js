import React, { Component } from 'react';
import './education.css';
import Phrase from '../phrases/phrases';
import Card from '../card/card';

import academindLogo from './academind_icon.jpg';
import Listate from '../listate/listate';
import icon from './list_icon.png'
import TextComponent from '../text_component/text_component';
class Education extends Component {

    state = {
        phrases: {
            head: { message: "Formación", color: "#212B85" },
            cursosRealizados: { message: "Cursos realizados", color: "#212B85" },
            cursosNoRealizados: { message: "Cursos por realizar", color: "#212B85" }
        },
        cards: {
            academind: {
                logo: academindLogo,
                name: 'Academind',
                website: '',
                text: 'Academind es un instituto de programacion online fundado por Maximilian Schwarzmülller & Manuel Lorenz y cuenta con mas de 1.000.000 de estudiantes alrededor del mundo.  Se enfoca en el desarrollo web y cuenta con decenas de certificaciones sobre distintas tecnologias de la industria como mongo,angular,redux,react etc...',
                color: 'orange',
                link: 'https://academind.com/',
            }
        },
        paragraph: {
            title : {message : 'Educacíon' , color : '#212b85'},
            main:[
                {text: 'Mi educación el la programacion comenzo en la UTN-FRM en mendoza, estudie alli durante 6 meses, sobre bases de la programación , bases de datos relacionales, Java y C'},
                {text: 'Despues me especialice en desarrollo web empezando con las bases de JavaScript(EcmaScript 2016)[Clases, Arrays, Objects , paradigma funcional entre muchas otras cosas]'},
                {text: 'Me eduque en MERN Developing , en Udemy por parte de Academind  '}
            ]
        },
        educacionPrevia: {
            title: 'Educación previa',
            items:[
                {text: 'Tengo un bachillerato en economía y en educación contable   egresado de la escuela N 4-128 Adolfo Perez Esquivel Mendoza , Argentina'}
            ]
        },
        lists: {
            academindCourses: {
                title: '',
                realizados: [
                    { title: 'Node', code: 'NodeJS - The Complete Guide(MVC, REST APIs ,GraphQL ,Deno)', href: "https://www.udemy.com/course/nodejs-the-complete-guide" },
                    { title: 'React', code: 'React - The Complete Guide (incl Hooks, React Router, Redux)', href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux" },
                ],
                noRealizados: [
                    { title: 'Mongodb', code: 'NodeJS - The Complete Guide(MVC, REST APIs ,GraphQL ,Deno)', href: "https://www.udemy.com/course/nodejs-the-complete-guide" },
                    { title: 'React Native', code: 'NodeJS - The Complete Guide(MVC, REST APIs ,GraphQL ,Deno)', href: "https://www.udemy.com/course/nodejs-the-complete-guide" },
                ]
            }
        }

    };

    render() {

        let phrases = { ...this.state.phrases }
        let paragraphs ={...this.state.paragraph}
        let academindCard = { ...this.state.cards.academind }
        let lists = {...this.state.lists}
        return (
            <div className="education_page">
            <TextComponent paragraphs = {paragraphs.main} title = {paragraphs.title.message}/>
                <Phrase phrase={phrases.head} />
                <Card card={academindCard} />
                <Listate listado = {lists.academindCourses.realizados} title ={phrases.cursosRealizados.message} icon = {icon}/>
                <Listate listado = {lists.academindCourses.noRealizados} title = {phrases.cursosNoRealizados.message} icon = {icon}/>
            <TextComponent paragraphs = {this.state.educacionPrevia.items} title = {this.state.educacionPrevia.title}/>
            </div>
        )
    }
}

export default Education; 