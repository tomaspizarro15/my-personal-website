import React, { Component } from 'react';
import './main.css'
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';
import Diagram from '../diagram/Diagram';

import reactIcon from './react_icon.png';
import mongoDbIcon from './mongodb_icon.png';
import expressIcon from './node_express_icon.png';
import nodeIcon from './node_icon.png';

class Main extends Component {

  state = {
    titles: {
    },
    phrases: {
      main: { message: '"Somos afortunados de poder construir algo para cambiar algo, algo con significado, sea para nosotros o para el mundo"', color: '#212B85' },
      welcome: { message: 'Stay a while and listen!', color: '#212B85' },
      mern: { message: '¿Como fue desarrollada esta pagina?', color: '#212b85' }
    },
    paragraphs: {
      main: [
        { text: 'Yo cree esta pagina para poder mostrar mi trabajo , mi educación y  pasión por el desarollo de software, para que las personas que entren a este sitio puedan ver los conocimientos y tecnologias en los que me he educado y especializado en  estos años , ademas para poder demostrar que Argentina y Mendoza tiene desarrolladores con muchisimo talento y potencial para cambiar el mundo del Software' },
        { text: 'Creo que con un mayor esfuerzo para promover y estimular estos talentos de los estudiantes y desarrolladores que se encuentran enen nuestra provincia y en nuestro pais, podriamos llegar a ser uno de los paises mas influyentes en la Industria ,en mendoza el cupo de desarrolladores web es muy grande, y deberiamos poder suplir esa demanda de trabajo' },
        { text: 'Ademas en este sitio web, habran blogs con conocimiento escrito por mi Tomás Pizarro, sobre distintas tecnologias punta del mercado , como React o Node , cada segmento tendra temas de la tecnologia o el lenguaje en cuestion  ' },
        { text: 'El objetivo es enseñar el contenido que mas pueda y ayudar a las personas de la misma manera que me ayudaron a mi para poder realizarme como un desarrollador de software' }
      ],
    },
    mernDiagram: {
      title: 'Ecosistema MERN (JavaScript)',
      items: [
        { status : false ,title: 'Mongo', description: 'Mongo es el tipo de base de datos de este Ecosistema', href: '', color: '', icon: mongoDbIcon  },
        { status : false ,title: '', description: '', href: '', color: '', icon: expressIcon },
        { status : false ,title: '', description: '', href: '', color: '', icon: reactIcon },
        { status : false ,title: '', description: '', href: '', color: '', icon: nodeIcon },
      ],
      paragraphs: [
        { text: 'Se utilizo todo un Ecosistema JavaScript' }
      ],
    }
  }


  activateDiagram = () => {
     
  }



  render() {
    let phrases = { ...this.state.phrases }
    let paragraphs = { ...this.state.paragraphs }
    let mern = { ...this.state.mernDiagram };




    return (
      <div className="main_page__container">
        <Phrase phrase={phrases.welcome} />
        <TextComponent title={phrases.main.message} paragraphs={paragraphs.main} />
        <Phrase phrase={phrases.mern} />
        <Diagram content={mern} />
      </div>
    )
  }

}

export default Main;