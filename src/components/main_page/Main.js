import React, { Component } from 'react';
import './main.css'
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';

class Main extends Component {

  state = {
    frases: {
      main: { message: '"Somos afortunados de poder construir algo para cambiar algo, algo con significado, sea para nosotros o para el mundo"', color: '#212B85' },
      welcome: { message: 'Stay a while and listen!', color: '#212B85' },
    },
    mainParagraphs: [
      { text: 'Yo cree esta pagina para poder mostrar mi trabajo , mi educación y  pasión por el desarollo de software, para que las personas que entren a este sitio puedan ver los conocimientos y tecnologias en los que me he educado y especializado en  estos años , ademas para poder demostrar que Argentina y Mendoza tiene desarrolladores con muchisimo talento y potencial para cambiar el mundo del Software' },
      { text: 'Creo que con un mayor esfuerzo para promover y estimular estos talentos de los estudiantes y desarrolladores que se encuentran enen nuestra provincia y en nuestro pais, podriamos llegar a ser uno de los paises mas influyentes en la Industria ,en mendoza el cupo de desarrolladores web es muy grande, y deberiamos poder suplir esa demanda de trabajo' },
      { text: 'Ademas en este sitio web, habran blogs con conocimiento escrito por mi Tomás Pizarro, sobre distintas tecnologias punta del mercado , como React o Node , cada segmento tendra temas de la tecnologia o el lenguaje en cuestion  ' }
    ],
    mernParagraphs: [
      
    ]
  }

  render() {
    return (
      <div className="main_page__container">
        <Phrase message={this.state.frases.welcome.message} color={this.state.frases.welcome.color} />
        <TextComponent title={this.state.frases.main.message} paragraphs={this.state.mainParagraphs} />
        <Phrase />
      </div>
    )
  }

}

export default Main;