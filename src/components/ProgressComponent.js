import React from 'react'
import '../App.css'

class ProgressComponent extends React.Component {
    render(){

  
     
        return(
            <div className="progress-wrapper">
            <div className="progress-item" id="progress1">1</div>
            <div className="progress-item">2</div>
            <div className="progress-item">3</div>
            <div className="progress-item">4</div>
            </div>
        )
        var xy=document.getElementById('progress1');
    xy.style.height="400px"
    }

}

export default ProgressComponent