import * as React from 'react';
import './Login.css';
import Button from '@mui/material/Button'
import { newUserAC, } from "../../redux/auth-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUser) => {
            dispatch(newUserAC(newUser));
        }
    }
}


const Registration = (props) => {
    debugger;

    const myLog = [...props.isAuth.loginAndPassword].map(l =>
        <div>
            name:{l.username} <br />
            login:{l.login} <br />
            password:{l.password}
        </div>);
    return (
        <div className='registrationForm'>
            <Button href="#Login">Sign In</Button>
            <Button href="#Registration">Registration</Button>
            <div className='registrationBlock'>
                <h2>Enter the registration details.</h2>
                <div className='inputWrapper'>
                    <input className='fieldEmail'
                        type='text'
                        placeholder='Name on the site' /><br />
                    <input className='inputEmail'
                        type='email'
                        placeholder='Your email' /> <br />
                    <input className='inputPass'
                        type="password"
                        placeholder='Your password' /> <br />
                    <input className='inputPassTo'
                        type="password"
                        placeholder='Repeat the password' /> <br />
                    <Button>Registration</Button>
                </div>
            </div>

            <div>
                    {myLog}
                </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);