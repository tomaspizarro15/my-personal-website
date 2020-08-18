import React , {Component}from 'react';
import './education.css';
import Phrase from '../phrases/phrases';
import Card from '../card/card';

import academindLogo from './academind_icon.jpg';
import Listate from '../listate/listate';

class Education extends Component {

    state = {
        phrases:{
           head:  {message:"Formación" , color:"#212B85"},
           cursosRealizados:  {message:"Cursos realizados" , color:"#212B85"},
           cursosNoRealizados: {message:"Cursos por realizar" , color:"#212B85"}
        },
        cards : {
            academind: {
                logo: academindLogo,
                name: 'Academind',
                website: '',
                text: 'Academind es un instituto de programacion online fundado por Maximilian Schwarzmülller & Manuel Lorenz y cuenta con mas de 1.000.000 de estudiantes alrededor del mundo.  Se enfoca en el desarrollo web y cuenta con decenas de certificaciones sobre distintas tecnologias de la industria como mongo,angular,redux,react etc...',
                color: 'orange',
                link: 'https://academind.com/',
            }
        },
        lists: {
            
        } 

    }; 

    render(){

        let phrases = {...this.state.phrases}
        let academindCard = {...this.state.cards.academind}
        return(
            <div className ="education_page">
                <Phrase phrase = {phrases.head}/>
                <Card card = {academindCard}/>
                <Phrase phrase = {phrases.cursosRealizados}/>
                <Listate/>
                <Phrase phrase = {phrases.cursosNoRealizados}/>
            </div>
        )
    }
}

export default Education; 