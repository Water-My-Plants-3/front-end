import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createUser } from "../actions/userActions";


const Signup = props => {
    const [formValues, setFormValues] = useState({
        name: '',
        password: '',
        pNumber: '',
    });
    console.log("props in SU", props);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.createUser(formValues);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name: </label><br />
                    <input type="text" name="name" onChange={onChange} value={formValues.name} />
                </div>
                <br />
                <div>
                    <label>password: </label><br />
                    <input name="password" onChange={onChange} value={formValues.password} />
                </div>
                <br />
                <div>
                    <label>Phone number: </label><br />
                    <input name="pNumber" onChange={onChange} value={formValues.pNumber} />
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
        // isFetching: state.isFetching,
        // smurf: state.smurf.smurf,
        // add: state.smurf.add,
        // error: state.smurf.error
    };
};

export default connect(
    mapStateToProps,
    { createUser }
)(Signup)