import './App.css';
import * as React from 'react';
import Header from './Componetns/Header/Header';
import Content from './Componetns/Content/Contetnt';
import { Route, MemoryRouter, Switch, Redirect, Routes, Router } from 'react-router-dom';
import NavbarContainer from './Componetns/Hav/NavbarContainer';
import Login from './Componetns/Login/Login';
import PokeCard from './Componetns/Content/Card/PokeCard';
import PokeCardContainer from './Componetns/Content/Card/PokeCardContainer';
import CardContainer from './Componetns/Content/Card/CardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className='App-navBar'>
        
      </div>
      <div className='App-content'>
        <div>
          <Routes>
            <Route path='/' element={<PokeCardContainer />} />
            <Route path='login' element={<Login />} />
            <Route path=':card' element={<CardContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
