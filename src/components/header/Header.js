import React, { Component } from 'react';
import HeaderTools from './header_tools';
import './header.css'
import Home_Logo from './home_icon.png'
import settings_Logo from './settings_icon.png'
import HomeButton from './home/home_button';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import LogoutIcon from './home/logout/logout_icon';


class Header extends Component {

  state = {
    navigationTools: [
      { id: "tool1", title: 'Educacion', path: '/educacion' },
      { id: "tool2", title: 'Sobre mi', path: '/biografia' },
    ],
    cookie: ""
  }
  render() {
    console.log(this.props.user)
    return (
      <div className="header_container">
        <nav className="header">
          <div className="header_left">
            <Link className="header_home" to="/">
              <HomeButton src={Home_Logo} alt="home" />
            </Link>
            {this.props.user.token ? [<Link to="/admin/profile"><HomeButton src ={settings_Logo} alt="settings"/></Link> , <Link to="/admin-profile"><LogoutIcon/></Link>] : null}
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
const mapStateToProps = (state) => {
  return {
    status: state.status,
    user : state.user
  }
}
export default connect(mapStateToProps)(Header);