import React, { useState, useEffect } from 'react'
import { updatePlant } from '../actions/plantActions'
import { connect } from 'react-redux'


const updatePlantForm = props => {

const [plant, setPlant] = useState({
    user_id: props.id,
    name: "",
    species: "",
    water_freq: "",
})

const changeHandler= e => {
    setPlant({
        ...plant,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault()
    props.updatePlant()
}

console.log(props, "UUU")

return(
    <>
    <h2>Update Plant Component! </h2>
      <form onSubmit={handleSubmit}>
            <input 
                name = "name"
                type = "text" 
                placeholder = "update name"
                value = {plant.name}
                onChange = {changeHandler}
            />
            <input
                name = "species"
                type = "text"
                value = {plant.species}
                onChange = {changeHandler}
            />
            <input 
                name = "phone"
                type = "text"
                value = {plant.water_freq}
                onChange = {changeHandler}
            />
          <button>Update!</button>
      </form>
    </>
    )
}

const mapStateToProps = state => {
    console.log("UPSTATE", state)
    return{
        isFetching: state.isFetching,
        id: state.user.userid,
        name: state.name,
        species: state.species,
        water_freq: state.water_freq
    }
}

export default connect(
    mapStateToProps,
    { updatePlant }
)(updatePlantForm)