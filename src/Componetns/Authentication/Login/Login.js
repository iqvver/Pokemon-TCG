import * as React from 'react';
import './Login.css';
import Button from '@mui/material/Button'
import { Redirect } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OTP from '../../../Common/OTP/OTP';

// страница входа в приложение
const Login = ({ setIsAuth, isReg, isUser }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

    // вход в приложение
    const handleClose = () => setOpen(false);
    if (localStorage.getItem('isAuth') === 'true') {
        return <Redirect to={'/home'} />
    }

    let handleClick = () => {
        localStorage.isAuth = true;
        setIsAuth(true);
    }
    let loginError = () => {
        alert('Логин или пароль не верны!')
    }

    // массив зарегестрированных пользователей
    const myLog = [...isReg].map(l =>
        <div>
            name:{l.username} <br />
            login(email):{l.login} <br />
            password:{l.password}
        </div>);

    return (
        // форма входа в приложение
        <div className='loginForm'>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box className='otpBlock'>
                    <Typography variant="h6" align='center'>
                        Enter the code to log in!
                    </Typography>
                    <OTP handleClick={handleClick}
                        onClose={handleClose} />
                </Box>
            </Modal>
            <Button href="#Login">Sign In</Button>
            <Button href="#Registration">Registration</Button>
            <div className='loginFormBlock'>
                <h2>Please enter your login(email) and password!</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'The email field is empty!';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = 'Email is not entered correctly';
                        }
                        if (!values.password) {
                            errors.password = 'The password field is empty!!';
                        } return errors;
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <Field
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" />
                            <br />
                            <Field
                                type="password"
                                name="password" />
                            <ErrorMessage name="password" component="div" />
                            <br />
                            <Button onClick={isReg.find(item =>
                                item.login == values.email && item.password == values.password)
                                ? handleOpen : loginError}>LogIn</Button>
                        </Form>
                    )}
                </Formik>
                <div>
                    {myLog}
                </div>
            </div>
        </div >
    )
}

export default Login;