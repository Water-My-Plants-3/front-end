import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteUser, loginUser } from "../actions/userActions";
import { fetchPlants } from "../actions/plantActions"


const Dashboard = props => {

    const [plants, setPlants] = useState({
        id: null,
        nickname: "",
        species: "",
        h2oFrequency: "",
    })
    console.log("PUID", props);
    const [user, setUser] = useState({
        userid: null,
        username: "",
        password: "",
        phone: ""
    })
    const handleDelete = () => {
        props.deleteUser(props.userid);
      };
    useEffect(() => {
        props.fetchPlants(props.userid);
    }, [])
    return (
        <div>
            hello from Dashboard Component
            <button
                onClick={handleDelete}
            >
                Delete!
                </button>
        </div>
    )
}
const mapStateToProps = state => {
    console.log('BRED', state);
    return {
        isFetching: state.isFetching,
        username: state.user.userName,
        userid: state.user.userId,
        plantid: state.plantid,
        error: state.error,
        plants: state.plants,
    }
};

export default connect(
    mapStateToProps,
    { deleteUser, loginUser, fetchPlants }
)(Dashboard)