import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';
import './biography.css';

const Biography = (props) => {
    const phrases = {
        title: { message: "¿Quien es Tomás Pizarro?", color: "#212b85" }
    }
    const paragraphs = [
        { id: "0", text: "Soy Mauro Tomás Pizarro tengo 20 Años, soy de Mendoza ,Argentina. Desarrollador de Software, especializado en JavaScript.  Actualmente estoy estudiando Programación de forma virtual en Udemy." },
        { id: "1", text: "Una gran pasión que tengo es el desarrollo web. ya que nos deja compartir conocimientos,historias,enseñanzas a todo el mundo." },
        { id: "1", text: "Como cualquier Argentino , valoro mucho a la familia ya que sin ella no habría llegado a donde estoy. ni sería la persona que soy" },
        { id: "2", text: "Mi objetivo como desarrollador es hacer llegar conocimiento a la persona que lo necesite , soy una persona que no valora a las personas por lo que tienen , sino por lo que dan a los demás" },
        { id: "3", text: "Mi sueño es convertirme en un gran programador en la industria, haciendo cosas que ayuden a los demás. mediante la información! , muchas gracias por leer!" }
    ]
    return (
        <div>
            <Helmet><title>Tomas Pizarro - Biografia</title></Helmet>
            <Phrase phrase={phrases.title} ></Phrase>
            <TextComponent paragraphs={paragraphs}></TextComponent>
            <Link to ="/">
                <button className="back_button">volver</button>
            </Link>
        </div>
    )
}
export default Biography; 