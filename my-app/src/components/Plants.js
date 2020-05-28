import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantActions'


const Plants = props => {

    const [plants, setPlants] = useState({
        id: Number,
        nickname: "",
        species: "",
        h2oFrequency: "",
    })

    useEffect((plants) => {
        props.fetchPlants(plants) 
    },[])

    console.log(props, "######")
    return(
        <>
            <h1> Plant Component</h1>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching,
        plants: state.plants
    }
}

export default connect(
    mapStateToProps,
    {fetchPlants}
)(Plants)