import React, { Component } from 'react';
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

class App extends Component {

  state = {
    token: true,
    user: {},
  }

  componentDidMount() {
    console.log("[[ComponentDidMount()]]")
    const cookie = new Cookies;
    const token = cookie.get('token')
    this.props.fetchToken(token);
    this.setState({user : this.props.user})
  }

  render() {
    console.log("RENDER" , this.props.user)
    let userMessage; 
    if(this.props.user) {
      userMessage = <p>Hello admin</p>
    }
    return (
      <div className="App">       
        <BrowserRouter>
          <Header />
          {userMessage}
          <div className="App_body">
            <div className="App_main__content">
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={login} />
                <Route path="/contactos" exact component={Main} />
                <Route path="/educacion" exact component={Education} />
                <Route path="/blogs/:id/:blog" exact component={Blogs} />
                {this.state.token
                  ?
                  <Switch>
                    <Route path="/admin/add-blog?edit=true" exact component={AddBlog} />
                    <Route path="/admin/add-blog" exact component={AddBlog} />
                    <Route path="/admin/add-segment" exact component={AddToolbar} />
                    <Route path="*" exact component={My404Component} />
                  </Switch>
                  : (<Redirect to="/" />)}
                <Route path="*" exact component={My404Component} />
              </Switch>
            </div>
            <div className="App_side__content">
              <ProfileCard />
              <Toolbar />
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
    token: state.token,
    user : state.user,
  };
}
const dispatchPropsToState = (dispatch) => {
  return {
    fetchToken: (token) => dispatch(fetchToken(token)),
    fetchUser: (user) => dispatch(fetchUser(user)),
  }
}
export default connect(mapStateToProps, dispatchPropsToState)(App);     
