import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './OTP.css';

// форма с генерацией случайного 4х значного кода и проверкой ввода
export default class OTPgen extends Component {
    constructor(props) {
        super(props);
        this.handleGenerate = this.handleGenerate.bind(this);
        this.state = { random: '' };
    }

    // генератор случайного кода
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
            // форма ввода и проверка
            <div align='center'>
                <div>
                    <Button onClick={this.handleGenerate.bind(this)}>Get the code</Button>
                    <Box>CODE: {this.state.random}</Box>
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
                                maxlength="4"
                            //autoFocus 
                            />
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