import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import FooterClass from '../src/components/FooterClass';
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavComponent />
      <HeaderComponent />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FooterClass />

        
      </div>
    );
  }
}

export default App;
