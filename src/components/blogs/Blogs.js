import React, { Component } from 'react';
import './blogs_card.css';



class Blogs extends Component {
    state = {

        active: this.props.match.params,

        titulo: {

        },
        contenido: {

        }
    };



    shouldComponentUpdate(nextState, nextProps) {

        if (nextState.match.params.id !== this.state.active.id || nextState.match.params.blog !== this.state.active.blog) {
            this.setState({active : nextState.match.params})
            return true;
        }

        return false
    }

 
    render() {
        console.log(this.state.active)

        return (
            <div className="blogs_container">
            </div>
        )
    }
}

export default Blogs; 