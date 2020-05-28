  
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createUser } from "../actions/userActions";

const Signup = props => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        phone: '',
    });
    // console.log("props in SU", props);
    useEffect(() => {
        setFormValues(formValues)
        // console.log(formValues)
   }, [formValues])

    const onChange = (e) => {
        console.log(props)
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('you clicked submit', "######", props);
        props.createUser(formValues);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name: </label><br />
                    <input type="text" name="username" onChange={onChange} value={formValues.namusernamee} />
                </div>
                <br />
                <div>
                    <label>password: </label><br />
                    <input name="password" onChange={onChange} value={formValues.password} />
                </div>
                <br />
                <div>
                    <label>Phone number: </label><br />
                    <input name="phone" onChange={onChange} value={formValues.phone} />
                </div>
                <br />
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
    { createUser }
)(Signup)