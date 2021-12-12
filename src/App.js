import './App.css';
import * as React from 'react';
import Header from './Componetns/Header/Header';
import Content from './Componetns/Content/Contetnt';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import NavbarContainer from './Componetns/Hav/NavbarContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className='App-navBar'>
        <NavbarContainer />
      </div>
      <div className='App-content'>
        <Content />
      </div>
    </div>
  );
}

export default App;
