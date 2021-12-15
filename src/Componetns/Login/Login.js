import * as React from 'react';
import '../../App.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

const Login = (props) => {
    return (
        <div className='login-Block'>
            <div className='email'>
                <TextField placeholder={"Email"}
                    name={"email"}
                    label='Email'
                //validate={[emailValidate]}
                //component={Input}
                />
            </div>
            <br />
            <div>
                <TextField
                    placeholder={"Password"}
                    name={"password"}
                    label='Password'
                    //validate={[required]}
                    //component={Input}
                    type={"password"}
                />
            </div>
            <br />
            <div>
                <Button variant="contained">LogIn</Button>
            </div>
        </div>
    )
}

export default Login;