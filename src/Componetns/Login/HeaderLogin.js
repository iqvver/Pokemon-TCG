import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FormControlLabel, Switch, } from '@material-ui/core';
import { Box } from '@mui/system';
import '../../App.css';

let HeaderLogin = (props) => {
    const [isAuth, setAuth] = React.useState(true);
    const handleChange = (event) => {
        props.setIsAuth(false);
        setAuth(event.target.checked);
    };
    return (
        <div >
            <Box>
                {!props.isAuth
                    ? <Box>{props.isAuth}</Box>
                    : <Box></Box>} </Box>
            {props.isAuth ? <FormControlLabel  //переключение logIn, logAut
                control={
                    <Switch
                        checked={props.isAuth}
                        onChange={handleChange}
                        aria-label="login switch"
                    />}
                label={'Выйти'}
            /> :
                <FormControlLabel disabled
                    control={
                        <Switch />}
                    label={<NavLink to={'/login'}>Войти</NavLink>} />}
        </div>
    )
}

export default HeaderLogin;