import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteUser, loginUser } from "../actions/userActions";
import { fetchPlants } from "../actions/plantActions"
import PlantForm from './PlantForm'
import { formStyles } from "../styles/formStyles.js";
import { PlantCard } from "./PlantCard";
import { useHistory } from "react-router-dom";
import UpdatePlant from './UpdatePlant'

const Dashboard = props => {
    const history = useHistory()
    const { Tittle, StyledInputs, CardContainer } = formStyles
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
    const handleFetch = () => {
        props.fetchPlants(props.userid);
    }, [])
    useEffect(()=>{
        console.log(props.plants, '<-------MY PLANTS------->')
    }, [props])
    return (
        <div>
            <Tittle>{`Dashboard`}</Tittle><br/><br/>
            <StyledInputs 
            type='button'
            style={{backgroundColor: '#ff615d', borderColor:'#f00', color:'white'}} 
            value='DELETE MY ACCOUNT' 
            onClick={handleDelete}/><br/><br/>
            <StyledInputs 
            type='button' 
            value='LOG OUT'
            style={{backgroundColor: 'lightblue', borderColor:'darkblue', color:'white'}}
            onClick={()=>{history.push('/')}}
            />
            <br/><br/>
            <StyledInputs 
            type='button' 
            value='LOAD MY PLANTS'
            style={{backgroundColor: 'lightgreen', borderColor:'darkgreen', color:'white'}}
            onClick={handleFetch}
            />
            <br/><br/>
            <PlantForm />
            <br/><br/>
            <UpdatePlant />
            <br/><br/>
            <CardContainer>
                { 
                    props.plants.plants.map(plant=>{
                        return <PlantCard key={plant.id} plantInfo={plant}/>
                    })
                }
            </CardContainer>
        </div>
    )
}
const mapStateToProps = state => {
    console.log('BRED', state);
    return {
        isFetching: state.user.userIsFetching,
        plantFetching: state.plants.plantsFetching,
        username: state.user.userName,
        userid: state.user.userid,
        plantid: state.plants.plantid,
        error: state.error,
        plants: state.plants,
    }
};

export default connect(
    mapStateToProps,
    { deleteUser, loginUser, fetchPlants }
)(Dashboard)