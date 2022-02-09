import './App.css';
import * as React from 'react';
import { Redirect } from 'react-router'
import { Route } from 'react-router-dom';
import PokeCardContainer from './Componetns/Content/Card/PokeCardContainer';
import CardContainer from './Componetns/Content/Card/CardContainer';
import LoginContainer from './Componetns/Login/LoginContainer';
import HeaderContainer from './Componetns/Header/HeaderContainer';
import Registration from './Componetns/Login/Registration';

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
          <Redirect from="/" to="/login" />
          <Route path='/home' render={() => <PokeCardContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/cards/:pokeId?' render={() => <CardContainer />} />
          <Route path='/registration' render={() => <Registration />} />
        </div>
      </div>
    </div>
  );
}

export default App;
