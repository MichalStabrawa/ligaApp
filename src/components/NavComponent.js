import React from 'react';
import '../App.css';

var tablica=[]
class NavComponent extends React.Component{
    handleClick = () => {
        var headerOne=document.querySelector('h1');
    headerOne.style.color="red";
    console.log(headerOne.style.color);
    tablica.push(headerOne.style.color);
   

    

  
      }
    render(){
        return(
            <nav>
                <a>WYNIKI</a>
                <a>TABELE</a>
                <a>KONTAKT</a>

                 <button onClick={this.handleClick}>
        change h1
      </button>
                </nav>
        );
    }
}



export default NavComponent;