import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main_page/Main';
import Toolbar from './components/toolbar/Toolbar';
import Footer from './components/footer/footer';
import ProfileCard from './components/profile_card/ProfileCard';

class App extends Component {

  state = {}
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
                <Route path="/educacion" exact component={Main} />
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
