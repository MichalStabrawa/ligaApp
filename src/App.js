import React, { Component } from 'react';
import logo from '../src/img/logo.gif';


import './App.css';
import FooterClass from '../src/components/FooterClass';
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavComponent />
      <HeaderComponent
      name1="EUR"
      name2="USA"
      name3="CHF"
      name4="GBP"
      name5="KURRS WALUT"
      name6="kurs z dnia" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <FooterClass />

        
      </div>
    );
  }
}

export default App;
