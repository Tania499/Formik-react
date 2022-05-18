import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { LoginForm } from '../../pages/LoginForm';
import { SignupForm } from '../../pages/SignupForm';



export const ShowForm = () =>{

    const [showLogin, setShowLogin] = useState(true)
    const [showSignUp, setShowSignUp] = useState(false)
    const [styleLogin, setStyleLogin] = useState('lightblue')
    const [styleSignUp, setStyleSignUp] = useState('')


// 


const ShowLoginForm =()=>{
    setShowLogin(true)
    setShowSignUp(false)
    setStyleSignUp('')
    setStyleLogin('lightblue')

}

const ShowSignUpForm =()=>{
    setShowSignUp(true)
    setShowLogin(false)
    setStyleSignUp('lightblue')
    setStyleLogin('')


}

    return(<>
        <Button variant="outlined" style={{background: styleLogin}} onClick={ShowLoginForm}>log in</Button>
        <Button variant="outlined" style={{background: styleSignUp}} onClick={ShowSignUpForm}>sign up</Button> 
        {showLogin && <LoginForm/>}
        {showSignUp && <SignupForm/>}
    </>)
    
    
}
