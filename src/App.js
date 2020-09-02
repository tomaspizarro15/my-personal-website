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

class App extends Component {

  state = {

    valid: true,

  }
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="App_body">
            <div className="App_main__content">
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/contactos" exact component={Main} />
                <Route path="/educacion" exact component={Education} />
                {this.state.valid
                  ?
                  <Switch>
                    <Route path="/admin/add-blog?edit=true" exact component={AddBlog} />
                    <Route path="/admin/add-blog" exact component={AddBlog} />
                    <Route path="/blogs/:id/:blog" exact component={Blogs} />
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

export default App;
