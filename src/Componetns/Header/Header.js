import * as React from 'react';
import pokelogo from '../../assets/images/pokelogo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='logo'>
                <img src={pokelogo} />
            </div>
            <div className='header-text'>
                <h1>
                    Ultra Super Pokemon 5G Pro
                </h1>
            </div>
        </div>
    )
}
export default Header;