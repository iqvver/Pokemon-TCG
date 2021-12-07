import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Componetns/Header/Header';
import Navbar from './Componetns/Hav/Navbar';
import Content from './Componetns/Content/Contetnt';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header />
      </header>

      <div className='App-navBar'>
        <Navbar />
      </div>

      <div className='App-content'>
        <Content />
      </div>
    </div>
  );
}

export default App;
