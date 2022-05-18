
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

const validation = Yup.object({
    email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


export const  LoginForm = ()=>{



    const {handleSubmit, handleChange, values, touched, errors} = useFormik({

        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: validation,
        onSubmit: (values, {resetForm}) =>{
            console.log (values);
            resetForm({values: ''})
        }
    });

    return (

    <form onSubmit={handleSubmit}>
    <div>  
        <TextField
        style={{margin:"20px"}}
        id="email"
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        />
    </div>  
    <div>
        <TextField 
        style={{margin:"20px"}}
        id="password"
        label="password" 
        variant="outlined" 
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}


        />
    </div>
    <Button style={{margin:"20px"}} color="primary" variant="contained" type="submit" >
        Submit
    </Button>

    </form>
        );

}


