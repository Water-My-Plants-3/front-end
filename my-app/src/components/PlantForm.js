import React, { useState } from 'react'
import { createPlant } from '../actions/plantActions'
import { connect } from 'react-redux'

const PlantForm = props => {
    const [plants, setPlants] = useState({
        user_id: props.id,
        name: "",
        species: "",
        water_freq: "",
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(props, "hey from PF")
        console.log("implants",plants)
        props.createPlant(plants)
    }

    const handleChange = e => {
        console.log(e.target.value)
        setPlants({ ...plants, [e.target.name]: e.target.value })
    }

    return (
        <><br/><br/>
            <h2>PlantForm Component</h2><br/><br/>
            <form onSubmit={handleSubmit}><br/><br/>
                <input
                    type="text"
                    placeholder="nickname"
                    name="name"
                    value={plants.name}
                    onChange={e => handleChange(e)}
                /><span/>
                <input
                    type="text"
                    placeholder="species"
                    name="species"
                    value={plants.species}
                    onChange={e => handleChange(e)}
                /><span/>
                <input
                    type="text"
                    placeholder="h2oFrequency"
                    name="water_freq"
                    value={plants.water_freq}
                    onChange={e => handleChange(e)}
                /><span/>
                <button onClick={handleSubmit}> Submit</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    console.log("BRE%%", state)
    return {
        id: state.user.userid,
        isFetching: state.isFetching,
        // id: state.plantUID,
        nickname: state.nickname,
        species: state.species,
        h2oFrequency: state.species,
    }
}
export default connect(
    mapStateToProps,
    { createPlant }
)(PlantForm)