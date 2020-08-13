import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main_page/Main';
import Toolbar from './components/toolbar/Toolbar';
import Footer from './components/footer/footer';

class App extends Component {

  state = {}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="App_body">
            <div className ="App_main__content">
              <Route path="/" exact component={Main} />
              <Route path="/contactos" exact component={Main} />
              <Route path="/educacion" exact component={Main} />
              <Route path="/" exact component={Main} />
              <Route path="/" exact component={Main} />
            </div>
            <Toolbar />
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
