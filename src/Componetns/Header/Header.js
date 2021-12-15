import * as React from 'react';
import pokelogo from '../../assets/images/pokelogo.png'
import HeaderLogin from '../Login/HeaderLogin';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <div className='back'>
                <div className='logo'>
                    <NavLink to={'/'}><img src={pokelogo} /></NavLink>
                </div>
                <div className='header-text'>
                    <NavLink to={'/'}>
                        <h1>
                            Ultra Super Pokemon 5G Pro
                        </h1>
                    </NavLink>
                </div>
                <div className='login-block'>
                    <HeaderLogin isAuth={props.isAuth} />
                </div>
            </div>
        </div>
    )
}
export default Header;