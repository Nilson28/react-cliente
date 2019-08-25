import React, {Component} from 'react';
import './compFooter.css';
import logo from './logo.svg';

class Appfooter extends Component{
    render(){
        return(
            <div className="contentFooter">
                <p id="first-line">proyecto de curso Desarrollo de software II</p>
                <p>Integrantes:</p>
                <p>Nilson cardona</p>
                <p>Manuel perdomo</p>
                <p>Sebastian llanos</p>
                <p>David botina</p>
                <p>Universidad del valle</p>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }

}

export default Appfooter;