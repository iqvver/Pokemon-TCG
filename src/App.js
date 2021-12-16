import './App.css';
import * as React from 'react';
import { Route } from 'react-router-dom';
import PokeCardContainer from './Componetns/Content/Card/PokeCardContainer';
import CardContainer from './Componetns/Content/Card/CardContainer';
import LoginContainer from './Componetns/Login/LoginContainer';
import HeaderContainer from './Componetns/Header/HeaderContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderContainer />
      </header>
      <div className='App-navBar'>
      </div>
      <div className='App-content'>
        <div>
          <Route exact path='/' component={PokeCardContainer} />
          <Route exact path='/login' component={LoginContainer} />
          <Route path='/cards/:pokeId?' render={() => <CardContainer />} />
        </div>
      </div>
    </div>
  );
}

export default App;
