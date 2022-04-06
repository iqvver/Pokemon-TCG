import * as React from 'react';
import pokelogo from '../../assets/images/pokelogo.png'
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogin from '../Authentication/HeaderLogin';

const Header = ({isAuth, isUs, setIsAuth}) => {
    return (
        <div className='back'>
            {/*<div className='logo'>
                    <NavLink to={'/home'}><img src={pokelogo} /></NavLink>
    </div>*/}
            <div className='header-text'>
                <NavLink to={'/home'}>
                    <h1>
                        Ultra Super Pokemon 5G Pro
                    </h1>
                </NavLink>
            </div>
            <div className='nav-bar'>
                <div className='login-block'>
                    <HeaderLogin isAuth={isAuth}
                        isUs={isUs}
                        setIsAuth={setIsAuth} />
                </div>
            </div>
        </div>
    )
}
export default Header;