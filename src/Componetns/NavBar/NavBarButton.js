import * as React from 'react';
import './NavBarButton.css';

const NavBarButton = () => {
    return (
        <div className='nav-block'>
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