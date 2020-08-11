import React from 'react';
import { Component } from "react";
import HeaderTools from './header_tools';
import './header.css'

class Header extends Component {

  state = {
    navigationTools : [
      {title : 'mi educacion' , path :'/educacion'},
      { title: 'biografia', path: '/biografia' },
      { title: 'contacto', path: '/contacto' },
    ]
  }
  render(){
    return(
    <nav className ="header_container">
      <ul className ="header_tools">
        {this.state.navigationTools.map((tool , i)=> {
          return (
            <HeaderTools key={i} title={tool.title} path={tool.path} />
          )
        })}
      </ul>
    </nav>)
  }
}

export default Header;