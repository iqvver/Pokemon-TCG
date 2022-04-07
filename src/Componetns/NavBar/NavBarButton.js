import * as React from 'react';
import './NavBarButton.css';

// конопки навигации 
const NavBarButton = () => {
    return (
        <div className='navBlock'>
            <a href='/home'>
                <span>All Pokemons</span>
                <span>All Pokemons</span>
            </a>
            <a href='/home#/filter'>
                <span>Filter out Pokemon</span>
                <span>Filter out Pokemon</span>
            </a>
        </div>
    )
}
export default NavBarButton;