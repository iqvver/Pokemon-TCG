import *as React from 'react';
import { NavLink } from 'react-router-dom';
import { FormControlLabel, Switch, } from '@material-ui/core';

let HeaderLogin = () => {

    const [auth, setAuth] = React.useState(true);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    return (
        <div>
            {auth === true ?
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? 'Login' : 'Logout'}
                /> :
                <FormControlLabel disabled
                    control={
                        <Switch />}
                    label={<NavLink to={'/login'}>LogIn</NavLink>} />}
        </div>
    )
}


export default HeaderLogin;