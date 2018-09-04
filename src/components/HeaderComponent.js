import React from 'react';
import eurF from '../img/euro.jpg'
import usaF from '../img/usa.png'
import frankF from '../img/swi.jpg'
import funtF from '../img/gb.png'

import ProgressComponent from '../components/ProgressComponent'
import '../App.css';


class HeaderComponent extends React.Component {
  handleClick3=()=> {
    console.log('Click happened2');
    var in1=document.getElementById('input1');
    console.log(in1.value);
    console.log(document.getElementById('selectVal').value);
var se2=document.getElementById('selectVal').value
    console.log("WYNIK = "+" "+ in1.value*se2);
   
  }
  render(){
      return( <button className="btn1" onClick={this.handleClick1}>Kliknij</button>)
         
      
  }

  render() {
    const { name1, name2, name3, name4, name5, name6,name7,name8 } = this.props

  
   
     
  


    function valueNew() {

      fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
        .then(resp => resp.json())
        .then(resp => {
          console.log("Przykład 2:");
          console.log(resp[0].rates[0].currency);

          let euro1 = document.getElementById('euro');
          euro1.innerText = resp[0].rates[7].mid;

          let dolar1 = document.getElementById('dolar');
          dolar1.innerText = resp[0].rates[1].mid;

          let frank = document.getElementById('swi');
          frank.innerText = resp[0].rates[9].mid;

          let eng1 = document.getElementById('eng');
          eng1.innerText = resp[0].rates[10].mid;

          let day1 = document.getElementById('headerData');
          day1.innerText = resp[0].effectiveDate;


          console.log("JASON?"+resp[0].rates[0]);

          var respRates = resp[0].rates;

          var tableContent = document.querySelector('table');

          for (var i = 0; i <= respRates.length; i++) {


            var trNew = document.createElement('tr');
            var tdNew = document.createElement('td');
            var tdNewContent = document.createTextNode(respRates[i].currency);
            var tdNew2 = document.createElement('td');
            var tdNew2Content = document.createTextNode(respRates[i].code);
            var tdNew3 = document.createElement('td');
            var tdNEw3Contnet = document.createTextNode(respRates[i].mid);



            tdNew.appendChild(tdNewContent);
            tdNew2.appendChild(tdNew2Content);
            tdNew3.appendChild(tdNEw3Contnet);
            trNew.appendChild(tdNew);
            trNew.appendChild(tdNew2);
            trNew.appendChild(tdNew3)
            tableContent.appendChild(trNew);

            var selectMain=document.getElementById('selectVal');
            var optionVal=document.createElement('option');
          optionVal.setAttribute('value','');
          optionVal.value=respRates[i].mid;
            var optionValText=document.createTextNode(respRates[i].code);

            optionVal.appendChild(optionValText);
            selectMain.appendChild(optionVal);




          }

        })
    }

    valueNew()




  

  
    return (

      <header className="main">
        <h1>{name5}</h1>
        <h2>{name6} <span id="headerData"></span></h2>

        <div className="header-wrapper">
          <div className="header-item"><img src={eurF}/>{name1}<hr /><h4 id="euro"></h4></div>
          <div className="header-item"><img src={usaF}/>{name2}<hr /><h4 id="dolar"></h4></div>
          <div className="header-item"><img src={frankF}/>{name3}<hr /><h4 id="swi"></h4></div>
          <div className="header-item"><img src={funtF}/>{name4}<hr /><h4 id="eng"></h4></div>
        </div>
        <hr/>

        <div className="table-wrapper">
        <h3>{name8}</h3>
        <div className="table-wrapper2">
        <label>Podaj kwotę</label><input type="number"  min="0" max="1000" id="input1"/>
        <select id="selectVal" value="1" onChange={this.handleClick3} ></select>
        <span classname="span22"></span>
        </div>
        <h3>{name7}</h3>
          <table>
            <tr><th>KRAJ</th>
            <th>KOD</th>
            <th>ŚREDNI KURS</th>
            </tr>
          </table>
        </div>

        <ProgressComponent />
      </header>


    )
  }
}

export default HeaderComponent;