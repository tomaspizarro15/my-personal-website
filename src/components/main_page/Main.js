import React, { Component } from 'react';
import './main.css'
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';
import Diagram from '../diagram/Diagram';
import Listate from '../listate/listate';

import listIcon from './list_icon.png'

class Main extends Component {

  state = {
    titles: {
    },
    phrases: {
      main: { message: '"Somos afortunados de poder construir algo para cambiar algo, algo con significado, sea para nosotros o para el mundo"', color: '#212B85' },
      welcome: { message: 'Stay a while and listen!', color: '#212B85' },
      mern: { message: '¿Como fue desarrollada esta pagina?', color: '#212b85' },
      agradecimiento: {message: 'Muchas gracias por visitarnos' , color:"#1b1b1b"}
    },
    paragraphs: {
      main: [
        { text: 'Cree esta pagina para poder mostrar mi trabajo , mi educación y  pasión por el desarollo de software, para que las personas que entren a este sitio puedan ver los conocimientos y tecnologias en los que me he educado y especializado en  estos años , ademas para poder demostrar que Argentina y Mendoza tiene desarrolladores con muchisimo talento y potencial para cambiar el mundo del Software' },
        { text: 'Creo que con un mayor esfuerzo para promover y estimular estos talentos de los estudiantes y desarrolladores que se encuentran enen nuestra provincia y en nuestro pais, podriamos llegar a ser uno de los paises mas influyentes en la Industria ,en mendoza el cupo de desarrolladores web es muy grande, y deberiamos poder suplir esa demanda de trabajo' },
        { text: 'Ademas en este sitio web, habran blogs con conocimiento escrito por mi, sobre distintas tecnologias punta de la industria , como React o Node , cada segmento tendra temas de la tecnologia o el lenguaje en cuestion  ' },
        { text: 'El objetivo es enseñar el contenido que mas pueda y ayudar a las personas de la misma manera que me ayudaron a mi para poder realizarme como un desarrollador de software' }
      ],
      git: [
        {text: 'Podes seguirme en Git-hub, ver mis repositorios ,clonarlos y trabajar modificandolos o simplemente analizar mi trabajo .Todo lo que conlleve se agradece mucho, tambien podes visitar tanto  mi perfil de Linkedin como miperfil en Codewars , estan en el encabezado de la pagina'},
        {text: 'Por ahora sigo trabajando en la pagina y todavia no agregamos una base de datos, pero pronto... estar atentos'}
      ]
    },
    lists: {
      modules: {
        title: 'Modulos utilizados en esta pagina web',
        items: [
          { title: 'nodemon', code: 'npm install --save-dev nodemon', href: "https://www.npmjs.com/package/nodemon" },
          { title: 'body parser', code: 'npm install --save body-parser', href: "https://www.npmjs.com/package/body-parser" },
          { title: 'mongodb', code: 'npm install --save mongodb', href: "" },
          { title: 'bcrypt', code: 'npm install --save bcrypt', href: "" },
          { title: 'csurf', code: 'npm install --save csurf', href: "" },
          { title: 'mongoose', code: 'npm install --save mongoose', href: "https://mongoosejs.com/docs/guide.html" },
          { title: 'create-react-app', code: 'npm install --save create-react-app', href: "https://create-react-app.dev/docs/getting-started/" },
          { title: 'axios', code: 'npm install --save axios', href: "" },
      
        ]
      },
      git : {
        title: 'Git Links',
        items:[
          {title: 'Git profile', code: 'https://github.com/tomaspizarro15', href: "https://github.com/tomaspizarro15" },
          {title: 'Git Repository', code: 'https://github.com/tomaspizarro15/my-personal-website', href: "https://github.com/tomaspizarro15/my-personal-website" },
        ],
      }
    },


  }
  render() {
    let phrases = { ...this.state.phrases }
    let paragraphs = { ...this.state.paragraphs }
    let mern = { ...this.state.mernDiagram };

    let list = { ...this.state.lists.modules }
    let git = {...this.state.lists.git}

    return (
      <div className="main_page__container">
        <Phrase phrase={phrases.welcome} />
        <TextComponent title={phrases.main.message} paragraphs={paragraphs.main} />
        <Phrase phrase={phrases.mern} />
        <Diagram click={() => { this.activateDiagram() }} />
        <Listate listado={list.items} title={list.title} icon={listIcon} />
        <Listate listado={git.items} title={git.title} icon={listIcon} />
        <TextComponent title={phrases.agradecimiento.message} paragraphs={paragraphs.git} />
      </div>
    )
  }

}

export default Main;