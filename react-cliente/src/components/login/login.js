import React, {Component} from 'react';
import logoUser from './img/icono-usuario.png';
import './login.css';
import axios from 'axios';




class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id_usuario: "",
            pass: ''
        };
        this.enviarLogin = this.enviarLogin.bind(this)

    }

    enviarLogin() {
        const mensaje = {
            id_usuario: "1234",
            pass: 'PASSWORD'
        }
        axios.get('http://localhost:4552/api/usuarios/login', mensaje)
        .then((res) => {
            console.log(res.data)
        }).catch(e => alert(e))
    }

    render(){
        return(
            <div className="login">
                <article className="fondo">
                    <img src={logoUser} alt=""/>
                    <h3>Iniciar sesion</h3>
                    <div>
                        <input className="input" type="text" name="fieldUser" placeholder="usuario"/>
                        <input className="input" type="password" name="fieldPass" placeholder="contraseña"/>
                        <h6>¿Olvido la contraseña?</h6>
                        <input className="btn-outline-secondary" type="submit" value="Acceder" onClick={this.enviarLogin}/>
                    </div>
                </article>
            </div>
        )
    }
}

export default Login;