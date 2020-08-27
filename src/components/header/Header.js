import React from 'react';
import { PureComponent } from "react";
import HeaderTools from './header_tools';
import './header.css'
import Home_Logo from './home_icon.png'
import HomeButton from './home/home_button';
import { Link } from 'react-router-dom';
class Header extends PureComponent {

  state = {
    navigationTools: [
      { id: "tool1", title: 'Educacion', path: '/educacion' },
      { id: "tool2", title: 'Sobre mi', path: '/biografia' },
      { id: "tool3", title: 'Contactarse', path: '/contacto' },
      { id: "tool4", title: 'Conocimientos', path: '/contacto' },
    ],
  }
  render() {
    return (
      <div className="header_container">
        <nav className="header">
          <div className="header_left">
            <Link className="header_home" to="/">
              <HomeButton src={Home_Logo} alt="home" />
            </Link>
          </div>
          <div className="header_void">

          </div>
          <div className="header_right">
            <ul className="header_tools">
              {this.state.navigationTools.map(tool => {
                return (
                  <HeaderTools key={tool.id} title={tool.title} path={tool.path} />
                )
              })}
            </ul>
          </div>

        </nav>
      </div>
    )
  }
}

export default Header;