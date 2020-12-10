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
      agradecimiento: { message: 'Muchas gracias por visitarnos', color: "#1b1b1b" }
    },
    paragraphs: {
      main: [
        { id: 0, text: 'Cree esta pagína para poder mostrar mi trabajo , mi educación y  pasión por el desarrollo de software, para que las personas que entren a este sitio puedan ver los conocimientos y tecnologias en los que me he educado y especializado en  estos años , además para poder demostrar que Argentina y Mendoza tiene desarrolladores con muchísimo talento y potencial para cambiar el mundo del Software' },
        { id: 1, text: 'Creo que con un mayor esfuerzo para promover y estimular estos talentos de los estudiantes y desarrolladores que se encuentran en nuestra provincia y en nuestro país, podriamos llegar a ser uno de los países mas influyentes en la Industria ,en Mendoza el cupo de desarrolladores web es muy grande y deberíamos poder suplir esa demanda de trabajo para lograr un crecimiento del rubro' },
        { id: 2, text: 'Además en este sitio web, habrán blogs con conocimiento escrito por mi, sobre distintas tecnologias en las que me he especializado como React o Node.js .Cada segmento tendra temas de la tecnologia o el lenguaje en cuestión  ' },
        { id: 3, text: 'El objetivo es mostrar la tecnología  que se ha implementado y ayudar a las personas de la misma manera que me ayudaron a mi para poder realizarme como un desarrollador de software' }
      ],
      git: [
        { id: 1, text: 'Pueden seguirme en Git-hub, Codewars, o escribirme a tomaspizarro1570@gmail.com , cualquier feedback se agradece , tambien pueden ver mi perfil de Linkedin en el encabezado de la pagina' },
        { id: 2, text: 'Por ahora sigo trabajando en la pagina para poder subir contenido, estar atentos' }
      ]
    },
    lists: {
      modules: {
        title: 'Modulos utilizados en esta pagina web',
        items: [
          { id: 0, title: 'nodemon', code: 'npm install --save-dev nodemon', href: "https://www.npmjs.com/package/nodemon" },
          { id: 1, title: 'body parser', code: 'npm install --save body-parser', href: "https://www.npmjs.com/package/body-parser" },
          { id: 2, title: 'mongodb', code: 'npm install --save mongodb', href: "https://www.mongodb.com/" },
          { id: 3, title: 'bcrypt', code: 'npm install --save bcrypt', href: "https://www.npmjs.com/package/bcryptjs" },
          { id: 4, title: 'csurf', code: 'npm install --save csurf', href: "https://www.npmjs.com/package/csurf" },
          { id: 5, title: 'mongoose', code: 'npm install --save mongoose', href: "https://mongoosejs.com/docs/guide.html" },
          { id: 6, title: 'create-react-app', code: 'npm install --save create-react-app', href: "https://create-react-app.dev/docs/getting-started/" },
          { id: 7, title: 'axios', code: 'npm install --save axios', href: "https://www.npmjs.com/package/axios" },

        ]
      },
      git: {
        title: 'Git Links',
        items: [
          { id: 0, title: 'Git profile', code: 'https://github.com/tomaspizarro15', href: "https://github.com/tomaspizarro15" },
          { id: 1, title: 'Git Repository', code: 'https://github.com/tomaspizarro15/my-personal-website', href: "https://github.com/tomaspizarro15/my-personal-website" },
        ],
      }
    },

    inputValue: "",

  }
  inputHandler = (event) => {
    console.log(event.target.value)
    this.setState({ inputValue: event.target.value })

  }
  receivePost = () => {
    fetch('http://localhost:8080', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  sendPost = () => {
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.inputValue,
        content: "I made it",
      })
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  }
  render() {
    let phrases = { ...this.state.phrases }
    let paragraphs = { ...this.state.paragraphs }
    let mern = { ...this.state.mernDiagram };

    let list = { ...this.state.lists.modules }
    let git = { ...this.state.lists.git }

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