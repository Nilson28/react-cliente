import React, {Component} from 'react';
import './css/Header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="red dark-1" id="header-box">
                    <h1>Eventos Univalle</h1>
                </div>
            </div>
        )
    }
}

export default Header;