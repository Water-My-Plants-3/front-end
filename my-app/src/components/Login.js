import React, { useState, useEffect } from "react";
import { initialLoginFormValues } from "../constants/LoginFormConstants";
import { connect } from 'react-redux';
import { loginUser } from "../actions/userActions";

const LoginForm = props => {
    // login form state hooks
    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
    const [LoginValid, setLoginValid] = useState(false)
    //login form event handlers
    const LoginOnChange = event => {
        setLoginFormValues({
            ...loginFormValues, [event.target.name]: event.target.value
        })
        if (false) {
            setLoginValid(true)
        }
    }
    const LoginOnSubmit = event => {
        event.preventDefault();
        console.log('you clicked submit', props);
        props.loginUser(loginFormValues);
    }

    //login form side effects
    const { username, password } = loginFormValues
    return (
        <form onChange={LoginOnChange} onSubmit={LoginOnSubmit} className='loginForm'>
            <label>Username: </label>
            <input type='text' name='username' value={username} />
            <label>Password: </label>
            <input type='password' name='password' value={password} />
            <input type='submit' value='Log In'
            //  disabled={!LoginValid}
            />
        </form>
    )
}

const mapStateToProps = state => {
    console.log('BRELI', state);
    return {
        isFetching: state.isFetching,
        user: state.user,
        error: state.error,
    };
};

export default connect(
    mapStateToProps,
    { loginUser }
)(LoginForm)