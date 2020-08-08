import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';

class App extends Component {

    state = {}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component = {null}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
