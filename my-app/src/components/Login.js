import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions'


const LoginForm = (props)=>{
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
                    <label>Name: </label><br />
                    <input 
                    type="text" 
                    name="username" onChange={onChange} 
                    value={login.namusername}
                     />
                </div>
                <br />
                <div>
                    <label>password: </label><br />
                    <input name="password" onChange={onChange} value={login.password} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('BRE', state);
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