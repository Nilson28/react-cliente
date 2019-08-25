import React, {Component} from 'react';
import './compHeader.css';

class Appheader extends Component{
    render(){
        return(
            <div className="contentHeader">
                <h6 className="titulo">Eventos Univalle</h6>
                <input className="btn-outline-secondary" type="submit" value="Registrarse"/>
            </div>
        )
    }

}

export default Appheader;