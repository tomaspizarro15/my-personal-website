import React ,{Component}from 'react';
import './main.css'
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';

class Main extends Component {

  state = {
    frases : {
      bienvenida : 'Stay a while and listen!',
      color : '#212B85;',
      mainPrase : '"Somos afortunados de poder construir algo para cambiar algo, algo con significado, sea para nosotros o para el mundo"'
    },
    paragraphs: [
      {text : 'Yo cree esta pagina para poder mostrar mi trabajo , mi educación , mi pasión por el desarollo de software, para que las personas que entren a este sitio puedan ver los conocimientos y tecnologias en los que me he desarrollado estos años , ademas para poder demostrar que Argentina y Mendoza tiene desarrolladores con muchisimo talento y potencial para cambiar el mundo del Software'}
       {text : 'Creo que con un mayor esfuerzo para promover estos talentos en nuestra provincia y en nuestro pais, podriamos llegar a ser uno de los paises mas influyentes en la industria del Software, '}
    ]
  }

  render() {
    return(
      <div className ="main_page__container">
        <Phrase message ={this.state.frases.bienvenida} color = {this.state.frases.color}/>
        <TextComponent title = {this.state.frases.mainPrase} paragraphs = {this.state.paragraphs}/>
      </div>
    )
  }

}

export default Main;