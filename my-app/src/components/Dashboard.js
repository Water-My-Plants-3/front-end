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

    



    useEffect((userid) => {
        props.fetchPlants(userid) 
    },[])


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
        userid: state.userid,
        error: state.error,
        plants: state.plants
    };
};

export default connect(
    mapStateToProps,
    { loginUser, deleteUser, fetchPlants }
)(Dashboard)