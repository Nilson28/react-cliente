//dependencias
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';
//assets
import './App.css';

class App extends Component{
  static propTypes ={
    children: PropTypes.object.isRequired
  };

  render(){
    const {children} = this.props;

    return (
      <div className="App">
        <Header/>
        <Content body={children} />
        <Footer/>
      </div>
    );
  }
}

export default App;
