import React from 'react';
import '../App.css';


class HeaderComponent extends React.Component {

constructor(props){
  super(props);
    this.state={
name1:"EUR",
name2:"USA"
    }
  
}
    render() {
      const { name1, name2 ,name3, name4} = this.props

      fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));

    console.log(myJson);
  });
      return (
       
        <header className="main">
          <h1>KURSY WALUT</h1>
          <h2>WEB API</h2>

        <div className="header-wrapper">
        <div className="header-item">{name1}<hr/></div>
        <div className="header-item">{name2}<hr/></div>
        <div className="header-item">{name3}<hr/></div>
        <div className="header-item">{name4}<hr/></div>
        </div>
        </header>

      
       ) }
  }
  
  export default HeaderComponent;