import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarButton.css';

// конопки навигации 
const NavBarButton = () => {
    return (
        <div className='navBlock'>
            <NavLink to={'/home'}>
                <span>All Pokemons</span>
                <span>All Pokemons</span>
            </NavLink>
            <NavLink to={'/filter'}>
                <span>Filter out Pokemon</span>
                <span>Filter out Pokemon</span>
            </NavLink>
        </div>
    )
}
export default NavBarButton;