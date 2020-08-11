import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main_page/Main';
import Toolbar from './components/toolbar/Toolbar';

class App extends Component {

    state = {}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Toolbar/>
          <Route path="/" exact component = {Main}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
