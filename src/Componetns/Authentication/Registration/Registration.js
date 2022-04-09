import * as React from 'react';
import './Registration.css';
import Button from '@mui/material/Button'
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';

// страница с формой резистрации в приложении (отправка введеных данных в массив)
const Registration = ({ loginAndPassword, addUser }) => {
    // массив зарегистрированных пользователей
    let myLog = [...loginAndPassword].reverse().map(l =>
        <div>
            name:{l.username} <br />
            login(email):{l.login} <br />
            password:{l.password}
        </div>);
    // функция добавления нового пользователя
    let addNewUser = (value) => {
        if (value.newUserPass == value.newUserPass2) {
            addUser(value.newUserName, value.newUserLogin, value.newUserPass);
            alert('Все ОК');
        }
        else if (value.newUserPass !== value.newUserPass2)
            alert('Пароли не совпадают');
    }
    return (
        // переключение между входом и регистрацией
        <div className='registrationForm'>
            <NavLink to={'/login'}>
                <Button>Sign In</Button>
            </NavLink>
            <NavLink to={'/registration'}>
                <Button>Registration</Button>
            </NavLink>
            <div>
                <AddUserFormRedux onSubmit={addNewUser} />
            </div>
        </div>
    )
}
// форма регистрации (отправки введеных данных в массив)
const MyUser = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
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
                    <Field className='inputPass'
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