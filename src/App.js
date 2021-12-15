import './App.css';
import * as React from 'react';
import Header from './Componetns/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Componetns/Login/Login';
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
          
            <Route exact path='/' component={ PokeCardContainer } />
            <Route exact path='/login' component={ Login } />
            <Route path='/cards/:pokeId?' render={() => <CardContainer /> }/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
