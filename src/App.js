import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

    state = {}

  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component = {}/>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
