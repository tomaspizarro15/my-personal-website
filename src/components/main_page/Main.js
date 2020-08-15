import React, { Component } from 'react';
import './main.css'
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';
import Diagram from '../diagram/Diagram';

class Main extends Component {

  state = {
    titles : {
    },
    frases: {
      main: { message: '"Somos afortunados de poder construir algo para cambiar algo, algo con significado, sea para nosotros o para el mundo"', color: '#212B85' },
      welcome: { message: 'Stay a while and listen!', color: '#212B85' },
      mern: {message : '¿Como fue desarrollada esta pagina?' ,color : '#212b85'}
    },
    paragraphs : {
      main : [
        { text: 'Yo cree esta pagina para poder mostrar mi trabajo , mi educación y  pasión por el desarollo de software, para que las personas que entren a este sitio puedan ver los conocimientos y tecnologias en los que me he educado y especializado en  estos años , ademas para poder demostrar que Argentina y Mendoza tiene desarrolladores con muchisimo talento y potencial para cambiar el mundo del Software' },
        { text: 'Creo que con un mayor esfuerzo para promover y estimular estos talentos de los estudiantes y desarrolladores que se encuentran enen nuestra provincia y en nuestro pais, podriamos llegar a ser uno de los paises mas influyentes en la Industria ,en mendoza el cupo de desarrolladores web es muy grande, y deberiamos poder suplir esa demanda de trabajo' },
        { text: 'Ademas en este sitio web, habran blogs con conocimiento escrito por mi Tomás Pizarro, sobre distintas tecnologias punta del mercado , como React o Node , cada segmento tendra temas de la tecnologia o el lenguaje en cuestion  ' }
      ]  ,
      mern : [

      ]
    } ,
    mernDiagram : {
      title : 'ECOSISTEMA MERN',
      items : [],
    }
  }

  render() {
    let phrases = {...this.state.frases}
    let paragraphs = {...this.state.paragraphs}
    let merm = {...this.state.mernDiagram};

    return (
      <div className="main_page__container">
        <Phrase message={phrases.welcome.message} color={phrases.welcome.color} />
        <TextComponent title={phrases.main.message} paragraphs={paragraphs.main} />
        <Phrase message =  {phrases.mern.message} color =  {phrases.mern.color}/>
        
        <Diagram title = {merm.title} items = {merm.items}  paragraphs = {paragraphs.mern}/>
      </div>
    )
  }

}

export default Main;