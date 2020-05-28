import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteUser, loginUser } from "../actions/userActions";

const Dashboard = props => {
    console.log("hey", props);
    return (
        <div>
            hello
        </div>
    )
}

const mapStateToProps = state => {
    console.log('BRED', state);
    return {
        isFetching: state.isFetching,
        user: state.user,
        error: state.error,
    };
};

export default connect(
    mapStateToProps,
    { deleteUser, loginUser }
)(Dashboard)