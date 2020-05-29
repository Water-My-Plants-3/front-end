import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginUser, createUser } from '../actions/userActions';
import { formStyles } from "../styles/formStyles";
import { useHistory } from "react-router-dom";
const LoginForm = props => {
    const history = useHistory()
    const [login, setLogin] = useState({
        username: '',
        password: '',
    })
    const { StyledForm,
        StyledError,
        Tittle,
        StyledInputs
     } = formStyles

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        props.loginUser(login)
        history.push("/dashboard")
    }

    return (
        <StyledForm onChange={onChange} onSubmit={onSubmit} className='loginForm'>
        <Tittle>Login</Tittle>
        <label>Username: </label>
        <StyledInputs required type='text' name='username' value={login.username}/>
        <label>Password: </label>
        <StyledInputs required type='password' name='password' value={login.password}/>
        <StyledInputs style={{margin: '1rem 0'}} type='submit' value='Log In'/>
        </StyledForm>
    )
}

const mapStateToProps = state => {
    console.log('BRELI', state);
    return {
        id: state.user.id,
        isFetching: state.user.isFetching,
        username: state.user.name,
        error: state.error,
    };
};

export default connect(
    mapStateToProps,
    { loginUser, createUser }
)(LoginForm)