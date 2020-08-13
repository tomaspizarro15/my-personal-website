import React ,{Component}from 'react';
import './main.css'
import Phrase from '../phrases/phrases';

class Main extends Component {

  state = {
    frases : {
      bienvenida : 'Stay a while and listen!'
    }
  }

  render() {
    return(
      <div className ="main_page__container">
        <Phrase message ={this.state.frases.bienvenida}/>
      </div>
    )
  }

}

export default Main;