import React from 'react';
import '../App.css';
import goldL from '../img/gold.jpg'


class GoldComponents extends React.Component {




    render() {
        fetch("http://api.nbp.pl/api/cenyzlota/")
            .then(resp => resp.json())
            .then(resp => {
                console.log("Przykład 3:");
                console.log(resp[0]);
                 let gold1 = document.getElementById('goldData');
                 gold1.innerText = resp[0].data;
                let gold3 = document.getElementById('gold2');
                gold3.innerText = resp[0].cena;

            })


        const { title1, title2, title3 } = this.props;
        return (
            <div className="container">
                <div><span><img src={goldL} alt="gold" /></span></div>
                <h2>{title1}</h2>
                <h3 id="gold-day">{title2} <span id="goldData"></span></h3>

                <div className="goldSection">

                    <div className="header-item">{title3}<hr/><h4 id="gold2">TEST</h4></div>
                </div>


            </div>
        );
    }

}

export default GoldComponents