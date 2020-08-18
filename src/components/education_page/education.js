import React , {Component}from 'react';
import './education.css';
import Phrase from '../phrases/phrases';

class Education extends Component {

    state = {
        phrases:{
           head:  {message:"Mi formación" , color:"black"}
        }
    }; 

    render(){

        let phrases = {...this.state.phrases}

        return(
            <div>
                <Phrase phrase = {phrases.head}/>
            </div>
        )
    }
}

export default Education; 