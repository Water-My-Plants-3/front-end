import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginUser, createUser } from '../actions/userActions'

const LoginForm = props => {

    const [login, setLogin] = useState({
        username: '',
        password: '',
    })

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        props.loginUser(login)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                  <input 
                    type="text" 
                    placeholder="username"
                    name="username"
                    onChange={onChange} 
                    value={login.namusername}
                />
                </div>
                <div>
                    <input
                     type="password"
                     placeholder="password"
                     name="password" 
                     onChange={onChange} 
                     value={login.password}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('BRELI', state);
    return {
        id: state.user.id,
        isFetching: state.user.isFetching,
        username: state.user.username,
        error: state.error,
    };
};

export default connect(
    mapStateToProps,
    { loginUser, createUser }
)(LoginForm)