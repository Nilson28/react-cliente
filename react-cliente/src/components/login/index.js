import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logousuario from './img/icono-usuario.png';
import './login.css'

class login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id_usuario: '',
            pass: ''
        };
        this.handleOnchange = this.handleOnchange.bind(this);
        this.enviarLogin = this.enviarLogin.bind(this)

    }

    handleOnchange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    enviarLogin() {
        const mensaje = {
            id_usuario: this.state.id_usuario,
            pass: this.state.pass
        }
        axios.post('http://localhost:4552/api/usuarios/login', mensaje)
        .then((res) => {
            console.log(res.data)
        }).catch(e => alert(e))
    }


    render(){
        return(
            <div className="caja">
                <div className="login card-panel grey lighten-2 ">
                    <div className="titulo row">
                        <img src={logousuario} className="logo-usuario" />
                    </div>
                    <div className="formulario row ">
                        <div className="input-field row s6">
                            <i className="material-icons prefix">account_box</i>
                            <label htmlFor="icon_number" >N° Documento:</label>
                            <input type="number" id="icon_number" onChange={this.handleOnchange('id_usuario')} className="validate"/>
                        </div>
                        <div className="input-field row s6 ">
                            <i className="material-icons prefix">vpn_key</i>
                            <input id="icon_prefix" type="password" onChange={this.handleOnchange('pass')} className="validate"/>
                            <label htmlFor="icon_prefix">Contraseña</label>
                        </div>
                    </div>
                    <div className="button row">
                        <Link to="./">
                            <h6>¿Haz olvidado tu contraseña?</h6>
                        </Link>
                        <Link to="./">
                            <h6>¿Au no tienes una cuenta?</h6>
                        </Link>
                        <button type="submit" className="btn red lighten-2 btn" onClick={this.enviarLogin}>
                            Ingresar
                            <i className="material-icons prefix">send</i>
                        </button>
                    </div>
                </div>    
            </div>    
        )
    }
}

export default login;