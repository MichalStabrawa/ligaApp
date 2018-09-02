import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../App.css';




function FooterClass()  {
  
        return(
            <footer>
                <h2>KONTAKT</h2>
                <div className="social-footer"><FontAwesomeIcon icon="faCoffe" /></div>
            </footer>
        );
    
}

export default FooterClass;