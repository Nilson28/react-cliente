import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Select from 'react-select';
import './operadorGUI.css';
import axios from 'axios';


const sexualidad = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'Otro', label: 'Otro' },
  ]; 


  const estado = [
    { value: 'Activo', label: 'Activo' },
    { value: 'Inactivo', label: 'Inactivo' },
  ]; 


class operadorGUI extends Component {

    state = {
        selectedOption0: null,
        selectedOption1: null
      };

      handleChange0 = selectedOption0 => {
        this.setState({ selectedOption0 });
        console.log(`Option selected:`, selectedOption0);
      };

      handleChange1 = selectedOption1 => {
        this.setState({ selectedOption1 });
        console.log(`Option selected:`, selectedOption1);
      };
  

    id_conferencista = React.createRef();
    nom_conferencista = React.createRef();
    correo = React.createRef();
    telefono = React.createRef();
    especialidad = React.createRef();
    sexo = React.createRef();
    estado = React.createRef();
    nombre_evento = React.createRef();
    denpendecia = React.createRef();
    fechainicio = React.createRef();
    fechafinal = React.createRef();
    nome_espacio = React.createRef();
    capacidad = React.createRef();
    nombre_conferencia = React.createRef();
    cupo = React.createRef();
    codigo_evento = React.createRef();
    id_conferencista = React.createRef();
    codigo_espacio = React.createRef();
    inicio = React.createRef();
    final = React.createRef();

    crearConferencia = (e)=>{
        e.preventDefault();
        const conferencia ={
            nombre_conferencia: this.nombre_conferencia.current.value,
            cupo: this.cupo.current.value,
            codigo_evento: this.codigo_evento.current.value,
            id_conferencista: this.id_conferencista.current.value,
            codigo_espacio: this.codigo_espacio.current.value,
            inicio: this.inicio.current.value,
            final: this.final.current.value
        }
        axios.post('http://localhost:4552/api/eventos/crear', conferencia)
        .then((res) => {
            console.log(res.data)
        }).catch(e => alert(e))
    }


    crearEspacio = (e) =>{
        e.preventDefault();
        const espacio={
            nome_espacio: this.nome_espacio.current.value,
            capacidad: this.capacidad.current.value
        }
        axios.post('http://localhost:4552/api/eventos/crear', espacio )
        .then((res) => {
            console.log(res.data)
        }).catch(e => alert(e))
    }

    crearEvento = (e)=>{
        e.preventDefault();
        const evento={
            nombre_evento: this.nombre_evento.current.value,
            denpendecia: this.denpendecia.current.value,
            fechainicio: this.fechainicio.current.value,
            fechafinal: this.fechafinal.current.value
        }
        axios.post('http://localhost:4552/api/eventos/crear', evento )
        .then((res) => {
            console.log(res.data)
        }).catch(e => alert(e))
    }

    crearConferencista = (e)=>{
        e.preventDefault();
        const conferencista={
            id_conferencista: this.id_conferencista.current.value,
            nom_conferencista: this.nom_conferencista.current.value,
            correo: this.correo.current.value,
            telefono: this.telefono.current.value,
            especialidad: this.especialidad.current.value,
            sexo: this.state.sexo,
            estado: this.estado.current.value,
        }
        axios.post('http://localhost:4552/api/conferencistas/crear', conferencista )
        .then((res) => {
            console.log(res.data)
        }).catch(e => alert(e))
    }
    
    render() {
        const { selectedOption0 } = this.state;
        const { selectedOption1 } = this.state;
        return (
            <div className="operadorGUI grey">
                <Tabs>
                    <TabList className="grey lighten-1">
                        <Tab >Eventos</Tab>
                        <Tab>Conferencistas</Tab>
                        <Tab>Espacios</Tab>
                        <Tab>Conferencias</Tab>
                    </TabList>

                    <TabPanel className="grey lighten-1">
                        <div className="contenido-tabs col card-panel grey lighten-3">
                            <h3>Registro de Eventos</h3>
                            <div className="registro col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">event_note</i>
                                        <label htmlFor="icon_number" >Nombre del evento:</label>
                                        <input type="text" id="icon_number" ref={this.nombre_evento} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">domain</i>
                                        <input id="icon_prefix" type="text" ref={this.denpendecia} className="validate" />
                                        <label htmlFor="icon_prefix">dependencia:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">event</i>
                                        <input type="date" id="icon_number" ref={this.fechainicio} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">event</i>
                                        <input id="icon_prefix" type="date" ref={this.fechafinal} className="validate" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn red lighten-2 btn" onClick={this.crearEvento}>
                                        Registrar
                                        <i className="material-icons prefix">add</i>
                                    </button>
                                </div>
                            </div>
                        </div>    
                    </TabPanel>
                    <TabPanel className="grey lighten-1">
                        <div className="contenido-tabs col card-panel grey lighten-3">
                            <h3>Registro de Conferencistas</h3>
                            <div className="registro col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">subtitles</i>
                                        <label htmlFor="icon_number" >N° Documento:</label>
                                        <input type="number" id="icon_number" ref={this.id_conferencista} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" ref={this.nom_conferencista} className="validate" />
                                        <label htmlFor="icon_prefix">Nombre Conferencista:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">email</i>
                                        <label htmlFor="icon_email">Email Conferencista:</label>
                                        <input type="text" id="icon_email" ref={this.correo} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">phone</i>
                                        <input id="icon_telephone" type="tel" ref={this.telefono} className="validate" />
                                        <label htmlFor="icon_telephone">Telefono Conferencista:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">assignment</i>
                                        <label htmlFor="icon_esp">Especialidad:</label>
                                        <input type="text" id="icon_esp" ref={this.especialidad} className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <Select value={selectedOption0} options={sexualidad} onChange={this.handleChange0} ref={this.sexo} />
                                    </div>
                                    <div className="input-field col s6">
                                        <Select value={selectedOption1} options={estado} onChange={this.handleChange1} ref={this.estado}/>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn red lighten-2 btn" onClick={this.crearConferencista}>
                                        Registrar
                                        <i className="material-icons prefix">person_add</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="grey lighten-1">
                        <div className="contenido-tabs col card-panel grey lighten-3">
                            <h3>Registro de Espacios</h3>
                            <div className="registro col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">business</i>
                                        <label htmlFor="icon_number" >Nombre del espacio:</label>
                                        <input type="text" id="icon_number" ref={this.nome_espacio} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">straighten</i>
                                        <input id="icon_prefix" type="number" ref={this.capacidad} className="validate" />
                                        <label htmlFor="icon_prefix">capacidad:</label>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn red lighten-2 btn" onClick={this.crearEspacio}>
                                        Registrar
                                        <i className="material-icons prefix">add</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="grey lighten-1">
                        <div className="contenido-tabs col card-panel grey lighten-3">
                            <h3>Registro de Conferencias</h3>
                            <div className="registro col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">assignment</i>
                                        <label htmlFor="icon_number" >Nombre de la conferencia:</label>
                                        <input type="text" id="icon_number" ref={this.nombre_conferencia} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">group</i>
                                        <input id="icon_prefix" type="number" ref={this.cupo} className="validate" />
                                        <label htmlFor="icon_prefix">cupo:</label>
                                    </div>
                                </div>
                                /*AQUI AGREGAR COMBOBOX PARA SELECCIONAR EL EVENTO, EL CONFERENCISTA Y EL ESPACIO */
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">event</i>
                                        <input type="date" id="icon_number" ref={this.inicio} className="validate" />
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">event</i>
                                        <input id="icon_prefix" type="date" ref={this.final} className="validate" tooltip='fg' />
                                    </div>
                                </div>    
                                <div>
                                    <button type="submit" className="btn red lighten-2 btn" onClick={this.crearConferencia}>
                                        Registrar
                                        <i className="material-icons prefix">add</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default operadorGUI;