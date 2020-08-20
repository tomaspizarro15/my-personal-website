import React, { Component } from 'react';
import './add_blog.css';
import Phrase from '../../components/phrases/phrases';



class AddBlog extends Component {

    state = {
        title : {message :"Crear nuevo blog" , color: "black"},
        options : [

        ] 
    }

    render() {

        let message = {...this.state.title}

        return (
            <div className="add_blog__container">
            <Phrase phrase = {message}/>
                <form className ="add_blog">
                    <label>Title</label>
                    <input/>
                    <label>Content</label>
                    <input/>
                    <select>
                     
                    </select>
                </form>
            </div>
        )
    }
}

export default AddBlog; 