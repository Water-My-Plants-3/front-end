import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteUser, loginUser } from "../actions/userActions";
import { fetchPlants } from "../actions/plantActions"
import PlantForm from './PlantForm'


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

    console.log(props, "USERID")
    console.log("fetch", props.fetchPlants);
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
            <PlantForm />
        </div>
    )
}
const mapStateToProps = state => {
    console.log('BRED', state);
    return {
        isFetching: state.isFetching,
        username: state.user.userName,
        userid: state.user.userid,
        plantid: state.plantid,
        error: state.error,
        plants: state.plants,
    }
};

export default connect(
    mapStateToProps,
    { deleteUser, loginUser, fetchPlants }
)(Dashboard)