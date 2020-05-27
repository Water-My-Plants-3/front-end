import React, { useState, useEffect } from "react";
import { initialLoginFormValues } from "../constants/LoginFormConstants";



export const LoginForm = ()=>{
    // login form state hooks
    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues)
    const [ LoginValid, setLoginValid] = useState(false)
    //login form event handlers
    const LoginOnChange = event => {
        setLoginFormValues({...loginFormValues, [event.target.name]:event.target.value
        })
        if (false) {
        setLoginValid(true)
        }}
    const LoginOnSubmit = event => {
        event.preventDefault();
        console.log('you clicked submit');
        
    }
    //login form side effects
    const { username, password} = loginFormValues
    return(
        <form onChange={LoginOnChange} onSubmit={LoginOnSubmit} className='loginForm'>
            <label>Username: </label>
            <input type='text' name='username' value={username}/>
            <label>Password: </label>
            <input type='password' name='password' value={password}/>
            <input type='submit' value='Log In' disabled={!LoginValid}/>
        </form>
    )
}