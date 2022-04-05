import * as React from 'react';
import './Registration.css';
import Button from '@mui/material/Button'
import { Field, reduxForm } from 'redux-form';

const Registration = (props) => {
    let myLog = [...props.loginAndPassword].reverse().map(l =>
        <div>
            name:{l.username} <br />
            login(email):{l.login} <br />
            password:{l.password}
        </div>);
    let addNewUser = (value) => {
        if (value.newUserPass === value.newUserPass2) {
            props.addUser(value.newUserName, value.newUserLogin, value.newUserPass);
            alert('Все ОК');
        }
        else if (value.newUserPass !== value.newUserPass2)
            alert('Пароли не совпадают');
    }
    return (
        <div className='registrationForm'>
            <Button href="#Login">Sign In</Button>
            <Button href="#Registration">Registration</Button>
            <div>
                <AddUserFormRedux onSubmit={addNewUser} />
            </div>
        </div>
    )
}

const MyUser = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='registrationBlock'>
                <h2>Enter the registration details.</h2>
                <div className='inputWrapper'>
                    <Field className='fieldEmail'
                        name='newUserName'
                        component='input'
                        type='text'
                        placeholder='Enter your name' />
                    <br />
                    <Field className='inputEmail'
                        name='newUserLogin'
                        type='email'
                        component='input'
                        placeholder='Your email' />
                    <br />
                    <input className='inputPass'
                        name='newUserPass'
                        component='input'
                        type="password"
                        placeholder='Your password' />
                    <br />
                    <Field className='inputPassTo'
                        name='newUserPass2'
                        component='input'
                        type="text"
                        placeholder='Repeat the password' />
                    <br />
                    <div>
                        <Button type="submit">Registration</Button>
                    </div>
                </div>
            </div>
        </form>
    )
};

const AddUserFormRedux = reduxForm({
    form: 'userAddForm',
})(MyUser);

export default Registration;