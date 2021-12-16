import * as React from 'react';
import '../../App.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { required, emailValidate } from '../../Common/Validators'
import { Redirect } from 'react-router'

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/home'} />
    }
    return (
        <div className='login-Block'>
            <div className='email'>
                <TextField placeholder={"Email"}
                    name={"email"}
                    label='Email'
                    validate={[emailValidate]}
                //component={Input}
                />
            </div>
            <br />
            <div>
                <TextField
                    placeholder={"Password"}
                    name={"password"}
                    label='Password'
                    validate={[required]}
                    //component={Input}
                    type={"password"}
                />
            </div>
            <br />
            <div>
                <Button variant="contained" onClick={() => props.setIsAuth(true)}>LogIn</Button>
            </div>
        </div>
    )
}

export default Login;