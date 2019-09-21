//Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './components/App';
import login from './components/login';
import operadorGUI from './components/operadorGUI';
import Axios from 'axios';

 const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={login}/>
            <Route exact path="/operadorGUI" component={operadorGUI}/>
        </Switch>
    </App>;



export default AppRoutes;