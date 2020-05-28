import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteUser, loginUser} from "../actions/userActions";
import { fetchPlants } from "../actions/plantActions"


const Dashboard = props => {
    
    const [plants, setPlants] = useState({
        id: null,
        nickname: "",
        species: "",
        h2oFrequency: "",
    })

    const [user, setUser] = useState({
        userid: null,
        username: "",
        password: "",
        phone:""
    })

    return (
        <div>
            hello from Dashboard Component
        </div>
    )
}

const mapStateToProps = state => {
    console.log('BRED', state);
    return {
        isFetching: state.isFetching,
        username: state.username,
        userid: state.userid,
        error: state.error,
        plants: state.plants
    };
};

export default connect(
    mapStateToProps,
    { deleteUser, loginUser, fetchPlants }
)(Dashboard)