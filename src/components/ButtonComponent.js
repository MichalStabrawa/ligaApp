import React from 'react'
import '../App.css'


class ButtonComponent extends React.Component{



handleClick1=()=> {
    console.log('Change');
  }
  render(){
      return( <button className="btn1" onClick={this.handleClick1}>Kliknij</button>)
         
      
  }
}

export default ButtonComponent