import * as React from 'react';
import '../../App.css';
import Button from '@mui/material/Button'
import { Redirect } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { required, emailValidate, emailkode } from '../../Common/Validators'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Login = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if (localStorage.getItem('isAuth') == 'true') {  
        return <Redirect to={'/home'} />
    }
    let handleClick = () => {
        localStorage.isAuth = true;
        props.setIsAuth(true);
    }
    return (
        <div className='loginForm'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Do you really want to login?
                    </Typography>
                    <Button onClick={handleClick}>LogIn</Button>
                    <Button onClick={handleClose}>Cansel</Button>
                </Box>
            </Modal>

            <h1>Welcome!</h1>
            <h2>Please enter your email and password!</h2>

            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'The email field is empty!';
                    } else if (values.email !== 'kode@kode.ru'
                    ) {
                        errors.email = 'Invalid email address! Enter: kode@kode.ru';
                    }
                    if (!values.password) {
                        errors.password = 'The password field is empty!!';
                    } else if (values.password !== 'Enk0deng') {
                        errors.password = 'The password is not correct! Enter: Enk0deng';
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
                        {values.email == 'kode@kode.ru' && values.password == 'Enk0deng'
                            ? <Button onClick={handleOpen}>LogIn</Button>
                            : <Button disabled={true}>Login</Button>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;