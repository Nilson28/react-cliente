import React from 'react';


import './App.css';

/*componente para el header*/
import Appheader from './components/header/componentHeader';

/*componente para el body*/
import Appbody from './components/body/componentBody'; 

/*componente para el footer*/
import Appfooter from './components/footer/compFooter'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Appheader />
      </header>
      <div className="App-body">
        <Appbody />
      </div>
      <footer className="App-footer">
        <Appfooter />
      </footer>
    </div>
  );
}

export default App;
