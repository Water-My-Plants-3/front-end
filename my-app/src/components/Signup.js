import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createUser } from "../actions/userActions";

const Signup = props => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        phone: '',
    });

    useEffect(() => {
        setFormValues(formValues)
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
                    <input 
                        type="text" 
                        name="username" onChange={onChange} 
                        value={formValues.namusernamee}
                     />
                </div>
                <div>
                    <input 
                        name="password"
                        onChange={onChange} 
                        value={formValues.password}
                    />
                </div>
          
                <div>
                <input 
                    name="phone" 
                    onChange={onChange} 
                    value={formValues.phone} 
                    />
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
    { createUser }
)(Signup)