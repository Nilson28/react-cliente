import React, {Component} from 'react';
import './compBody.css';

import SlideView from '../slider/slide';
import Login from '../login/login';

class Appbody extends Component{
    render(){
        return(
            <div className="contentBody">
                <div className="izquierdo">
                    <SlideView />
                </div>
                <div className="derecho">
                    <Login />
                </div>
            </div>
        )
    }

}

export default Appbody;