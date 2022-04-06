import './App.css';
import * as React from 'react';
import { Redirect } from 'react-router'
import { Route } from 'react-router-dom';
import PokemonContainer from './Componetns/Content/Card/PokemonContainer';
import LoginContainer from './Componetns/Authentication/Login/LoginContainer';
import HeaderContainer from './Componetns/Header/HeaderContainer';
import RegistrationContainer from './Componetns/Authentication/Registration/RegistrationContainer'
import FilterContainer from './Componetns/Content/Filter/FilterContainer';
import ProfilePokemonContainer from './Componetns/Content/Card/ProfilePokemon/ProfilePokemonContainer';
import NavBarButton from './Componetns/NavBar/NavBarButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderContainer />
      </header>
      <div className='App-navBar'>
        <NavBarButton />
      </div>
      <div className='App-content'>
        <Redirect from="/" to="/login" />
        <Route path='/login' render={() => <LoginContainer />} />
        <Route path='/registration' render={() => <RegistrationContainer />} />
        <Route path='/home' render={() => <PokemonContainer />} />
        <Route path='/filter' render={() => <FilterContainer />} />
        <Route path='/cards/:pokemonId?' render={() => <ProfilePokemonContainer />} />
      </div>
    </div>
  );
}

export default App;
