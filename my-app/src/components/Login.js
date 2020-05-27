import React, { useState, useEffect } from "react";
// import { initialFormValues } from "../constants/LoginFormConstants";


export const LoginForm = props =>{
    const loginFormValues = {
        username: '',
        password: '',
        token: '',
    }
    const { LoginOnSubmit, LoginValid, LoginOnChange} = props
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