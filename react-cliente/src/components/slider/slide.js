import React, {Component} from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import './slide.css';
import './slideScript';

class SlideView extends Component{
    render(){
        return(
            <ul className="slider">
                <li>
                    <input type="radio" id="rButton1" name="sradio"></input>
                    <label className="radios" htmlFor="rButton1" />
                    <img id="1" src={img1} alt="img1" />
                </li>
                <li>
                    <input type="radio" id="rButton2" name="sradio"></input>
                    <label className="radios" htmlFor="rButton2" />
                    <img id="2" src={img2} alt="img2" />
                </li>
                <li>
                    <input type="radio" id="rButton3" name="sradio"></input>
                    <label className="radios" htmlFor="rButton3" />
                    <img id="3" src={img3} alt="img3" />
                </li>
                <li>
                    <input type="radio" id="rButton4" name="sradio"></input>
                    <label className="radios" htmlFor="rButton4"></label>
                    <img id="4" src={img4} alt="img4" />
                </li>
            </ul>
        )
    }

}

export default SlideView;