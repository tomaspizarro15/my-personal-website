import React from 'react';
import { Component } from "react";
import HeaderTools from './header_tools';
import './header.css'

class Header extends Component {

  state = {
    navigationTools: [
      { title: 'Educacion', path: '/educacion' },
      { title: 'Sobre mi', path: '/biografia' },
      { title: 'Contactarse', path: '/contacto' },
      { title: 'Conocimientos', path: '/contacto' },
    ]
  }
  render() {
    return (
      <div className ="header_container">
        <nav className="header">
          <ul className="header_tools">
            {this.state.navigationTools.map((tool, i) => {
              return (
                <HeaderTools key={i} title={tool.title} path={tool.path} />
              )
            })}
          </ul>
        </nav>
      </div>
    )
  } 
}

export default Header;