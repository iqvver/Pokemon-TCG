import * as React from 'react';
import './HeaderLogin.css';
import { NavLink } from 'react-router-dom';
import { FormControlLabel, Switch, } from '@material-ui/core';

// кнопка выхожа из приложения шапке приложения
let HeaderLogin = ({ setIsAuth, isUser }) => {
    let handleClick = () => {
        localStorage.isAuth = false;
        setIsAuth(false);
    }
    return (
        <div>
            {localStorage.getItem('isAuth') == 'true' ?
                setIsAuth(true) || <div className='loginOnLine'>
                    {isUser}
                </div> : setIsAuth(false) || <div className='loginOffLine'>OffLine</div>}

            {localStorage.getItem('isAuth') == 'true'
                ? <FormControlLabel  //переключение logIn, logAut
                    control={
                        <Switch
                            checked={localStorage.isAuth}
                            onChange={handleClick}
                            aria-label="login switch"
                        />}
                    label={'LogOut'} />
                : <FormControlLabel disabled
                    control={
                        <Switch />}
                    label={<NavLink to={'/login'}></NavLink>} />}
        </div>
    )
}

export default HeaderLogin;