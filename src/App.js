import React, { Component, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main_page/Main';
import Toolbar from './components/toolbar/Toolbar';
import Footer from './components/footer/footer';
import ProfileCard from './components/profile_card/ProfileCard';
import Education from './components/education_page/education';
import Blogs from './components/blogs/Blogs';
import AddToolbar from './admin_components/add_toolbar/add_toolbar';
import AddBlog from './admin_components/add_blog/add_blog';
import My404Component from './error/errorComponents/404';
import login from './auth_components/login';

import { fetchToken, fetchUser } from './redux/actions';
import * as actionType from './redux/actions';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import Biography from './components/biography/biography';
import AdminProfile from './admin_components/profile/admin_profile';
import { Helmet } from 'react-helmet';
import Phrase from './components/phrases/phrases';
import ListaDeTexto from './components/lista_texto/lista_texto';
import Informacion from './components/information/informacion';

class App extends Component {
  state = {
    token: false,
    status: undefined,
    user: {},
    image: "",
   
  }
  componentDidMount() {
    const formData = new FormData();
    const cookie = new Cookies;
    const token = cookie.get('token');

    fetch('https://tomas-pizarro.herokuapp.com/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
      .then(promise => {
        return promise.json()
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ status: res.status, user: res.user })
          this.props.fetchUser(res.user, res.status)
        }
      })
  }
  render() {
    return (
      <div className="App">
        <title>Tomas Pizarro</title>
        <BrowserRouter>
          <Header />
          <Helmet><title>Tomas Pizarro</title></Helmet>

          <div className="App_body">
            <div className="App_main__content">
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={login} />
                <Route path="/contactos" exact component={Main} />
                <Route path="/educacion" exact component={Education} />
                <Route path="/biografia" exact component={Biography} />
                <Route path="/blogs/:id/:blog" exact component={Blogs} />
                {this.state.user.token
                  ?
                  <Switch>
                    <Route path="/admin/add-blog?edit=true" exact component={AddBlog} />
                    <Route path="/admin/add-blog" exact component={AddBlog} />
                    <Route path="/admin/add-segment" exact component={AddToolbar} />
                    <Route path="/admin/profile" exact component={AdminProfile} />
                  </Switch>
                  : (<Route path="*" exact component={My404Component} />)}
              </Switch>
            </div>
            <div className="App_side__content">
              <Route path="/" exact component={ProfileCard}/>
              <Route path="/" exact component={Informacion} />
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    user: state.user,
  };
}
const dispatchPropsToState = (dispatch) => {
  return {
    fetchUser: (user, status) => dispatch(actionType.fetchUser(user, status)),
  }
}
export default connect(mapStateToProps, dispatchPropsToState)(App);     
