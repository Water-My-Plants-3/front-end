import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantActions'

const Plants = props => {

    useEffect(() => {
        props.fetchPlants() // currently not fetching 
    }, [])

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