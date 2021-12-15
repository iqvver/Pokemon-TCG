import *as React from 'react';
import { NavLink } from 'react-router-dom';
import { FormControlLabel, Switch, } from '@material-ui/core';

let HeaderLogin = (props) => {

    const [isAuth, setAuth] = React.useState(true);
    const handleChange = (event) => {
        debugger;
        setAuth(event.target.checked);
    };
    

    return (
        <div>
            {props.isAuth === true ?
                <FormControlLabel
                    control={
                        <Switch
                            checked={isAuth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={props.isAuth ? 'Login' : 'Logout'}
                /> :
                <FormControlLabel disabled
                    control={
                        <Switch />}
                    label={<NavLink to={'/login'}>LogIn</NavLink>} />}
        </div>
    )
}

export default HeaderLogin;