import React from 'react';
import '../App.css';


class HeaderComponent extends React.Component {


  render() {
    const { name1, name2, name3, name4, name5, name6,name7 } = this.props




    function valueNew() {

      fetch("http://api.nbp.pl/api/exchangerates/tables/a/")
        .then(resp => resp.json())
        .then(resp => {
          console.log("Przykład 2:");
          console.log(resp[0].effectiveDate);

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


          console.log(resp[0].rates);

          let respRates = resp[0].rates;

          let tableContent = document.querySelector('table');

          for (let i = 0; i <= respRates.length; i++) {


            let trNew = document.createElement('tr');
            let tdNew = document.createElement('td');
            let tdNewContent = document.createTextNode(respRates[i].currency);
            let tdNew2 = document.createElement('td');
            let tdNew2Content = document.createTextNode(respRates[i].code);
            let tdNew3 = document.createElement('td');
            let tdNEw3Contnet = document.createTextNode(respRates[i].mid);



            tdNew.appendChild(tdNewContent);
            tdNew2.appendChild(tdNew2Content);
            tdNew3.appendChild(tdNEw3Contnet);
            trNew.appendChild(tdNew);
            trNew.appendChild(tdNew2);
            trNew.appendChild(tdNew3)
            tableContent.appendChild(trNew);




          }

        })
    }

    valueNew()
    return (

      <header className="main">
        <h1>{name5}</h1>
        <h2>{name6} <span id="headerData"></span></h2>

        <div className="header-wrapper">
          <div className="header-item">{name1}<hr /><h4 id="euro"></h4></div>
          <div className="header-item">{name2}<hr /><h4 id="dolar"></h4></div>
          <div className="header-item">{name3}<hr /><h4 id="swi"></h4></div>
          <div className="header-item">{name4}<hr /><h4 id="eng"></h4></div>
        </div>
        <hr/>

        <div className="table-wrapper">
<h3>{name7}</h3>
          <table>
            <tr><th>KRAJ</th>
            <th>KOD</th>
            <th>ŚREDNI KURS</th>
            </tr>
          </table>
        </div>


      </header>


    )
  }
}

export default HeaderComponent;