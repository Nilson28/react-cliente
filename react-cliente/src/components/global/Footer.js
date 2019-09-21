import React, {Component} from 'react';
import './css/Footer.css';
import logo from './img/logo.svg';


class Footer extends Component{
    render(){
        return(
            <div className="Footer">
               <div className="red dark-1" id="footer-box">
                    <p id="first-line">proyecto de curso Desarrollo de software II</p>
                    <p>Integrantes:</p>
                    <p>Nilson cardona</p>
                    <p>Manuel perdomo</p>
                    <p>Sebastian llanos</p>
                    <p>David botina</p>
                    <p>Universidad del valle</p>
                    <img className="App-logo" src={logo}/>
                </div> 
            </div>
        )
    }
}

export default Footer;