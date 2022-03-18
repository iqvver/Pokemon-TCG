import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../Componetns/Login/Login.css';

export default class OTPgen extends Component {

    constructor(props) {
        super(props);
        this.handleGenerate = this.handleGenerate.bind(this);
        this.state = { random: '' };
    }
    handleGenerate() {
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
            this.setState({ random: OTP });
        }
    }

    render() {
        return (
            <div align='center'>
                <div>
                    <Button onClick={this.handleGenerate.bind(this)}>Получить код</Button>
                    <Box>Код: {this.state.random}</Box>
                </div>
                <Formik
                    initialValues={{ kode: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.kode) {
                            errors.kode = 'The kode field is empty!!';
                        } else if (values.kode != `${this.state.random}`) {
                            errors.kode = 'The kode is not correct!';
                        } return errors;
                    }}>
                    {({ values }) => (
                        <Form>
                            <Field className='otpForm'
                                type="number"
                                name="kode"
                                maxlength="4" />
                            <ErrorMessage name="kode" component="div" />
                            <br />
                            {values.kode
                                ? <Button onClick={
                                    values.kode == `${this.state.random}` ?
                                        this.props.handleClick : null}>LogIn</Button>
                                : <Button disabled={true}>Login</Button>
                            }


                            <Button onClick={this.props.onClose}>Cansel</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}