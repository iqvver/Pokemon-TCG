import React from "react";
import styles from "./FormsControls.module.css";
import { Box, TextField } from '@material-ui/core';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Field } from "redux-form";

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <Box className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Box>
                {props.children}
            </Box>
            {hasError && <span>{meta.error}</span>}
        </Box>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><TextareaAutosize style={{ minHeight: 60 }} {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><TextField style={{ minHeight: 0, minWidth: 250 }} {...input} {...restProps} /></FormControl>
}
export const createField = (variant, placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            variant={variant}
            {...props}
        /> {text}
    </div>
)