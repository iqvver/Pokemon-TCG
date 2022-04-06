import './App.css';
import * as React from 'react';
import { Redirect } from 'react-router'
import { Route } from 'react-router-dom';
import PokeCardContainer from './Componetns/Content/Card/PokeCardContainer';
import LoginContainer from './Componetns/Authentication/Login/LoginContainer';
import HeaderContainer from './Componetns/Header/HeaderContainer';
import RegistrationContainer from './Componetns/Authentication/Registration/RegistrationContainer'
import FilterContainer from './Componetns/Content/Filter/FilterContainer';
import ProfileCardContainer from './Componetns/Content/Card/ProfileCard/ProfileCardContainer';
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
        <Route path='/home' render={() => <PokeCardContainer />} />
        <Route path='/login' render={() => <LoginContainer />} />
        <Route path='/cards/:pokeId?' render={() => <ProfileCardContainer />} />
        <Route path='/registration' render={() => <RegistrationContainer />} />
        <Route path='/filter' render={() => <FilterContainer />} />
      </div>
    </div>
  );
}

export default App;
