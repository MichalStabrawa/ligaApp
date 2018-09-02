import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'


import './App.css';
import FooterClass from '../src/components/FooterClass';
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';
import GoldComponents from './components/GoldComponents'




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
          name5="KURS WALUT"
          name6="kurs z dnia"
          name7="TABELA KURSU WALUT" />
        <header className="App-header">

        </header>

        <GoldComponents
          title1="Kurs Złota"
          title2="kurs z dnia"
          title3="cena"
        />

        <FooterClass />


      </div>
    );
  }
}

export default App;
