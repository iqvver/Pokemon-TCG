import * as React from 'react';
import pokelogo from '../../assets/images/pokelogo.png'
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogin from '../Authentication/HeaderLogin';

// Header приложения
const Header = ({ isAuth, isUs, setIsAuth }) => {
    return (
        <div className='pageHeader'>
            {/*  логотоп в шапке приложения
            <div className='logotipe'>
                    <NavLink to={'/home'}><img src={pokelogo} /></NavLink>
    </div>*/}
            {// текст в шапке приложения
            }
            <div className='pageHeaderText'>
                <NavLink to={'/home'}>
                    <h1>
                        Ultra Super Pokemon 5G Pro
                    </h1>
                </NavLink>
            </div>
            {// кнопки навигации
            }
            <div className='navBar'>
                {// крновка выхода из приложения
                    // передача нужных данных
                }
                <div className='loginBlock'>
                    <HeaderLogin isAuth={isAuth}
                        isUs={isUs}
                        setIsAuth={setIsAuth} />
                </div>
            </div>
        </div>
    )
}
export default Header;