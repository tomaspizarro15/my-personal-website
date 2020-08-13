import React from 'react';
import { Component } from "react";
import HeaderTools from './header_tools';
import './header.css'
import Home_Logo from './home_icon.png'
import HomeButton from './home/home_button';
class Header extends Component {

  state = {
    navigationTools: [
      { title: 'Educacion', path: '/educacion' },
      { title: 'Sobre mi', path: '/biografia' },
      { title: 'Contactarse', path: '/contacto' },
      { title: 'Conocimientos', path: '/contacto' },
    ],
  }
  render() {
    return (
      <div className ="header_container">
        <nav className="header">
        <HomeButton alt ={'home'} src ={Home_Logo}/>
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