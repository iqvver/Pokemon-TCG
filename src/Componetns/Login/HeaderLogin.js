import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FormControlLabel, Switch, } from '@material-ui/core';
import '../../App.css';

let HeaderLogin = (props) => {
    let handleClick = () => {
        localStorage.isAuth = false;
        props.setIsAuth(false);
    }
    return (
        <div>
            {localStorage.getItem('isAuth') == 'true'
                ? <FormControlLabel  //переключение logIn, logAut
                    control={
                        <Switch
                            checked={localStorage.isAuth}
                            onChange={handleClick}
                            aria-label="login switch"
                        />}
                    label={'Выйти'} />
                : <FormControlLabel disabled
                    control={
                        <Switch />}
                    label={<NavLink to={'/login'}></NavLink>} />}
        </div>
    )
}

export default HeaderLogin;