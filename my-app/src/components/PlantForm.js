import React, {useState} from 'react'
import  { createPlant }  from '../actions/plantActions'

const PlantForm = props => {
    const [plants, setPlants] = useState({
        id: Number,
        nickname: "",
        species: "",
        h2oFrequency: "",
    })


    const handleSubmit = e => {
        e.preventDefault()
        console.log(plants)
        props.createPlant(plants)

    }

    const handleChange = e => {
        console.log(e.target.value)
        setPlants({...plants, [e.target.name]: e.target.value})
    }

    return(
        <>
        <h2>PlantForm Component</h2>
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    placeholder = "nickname"
                    name = "nickname"
                    value = {plants.name}
                    onChange = { e => handleChange(e)}
                />
                <input 
                    type = "text"
                    placeholder = "species"
                    name = "species"
                    value = {plants.species}
                    onChange = { e => handleChange(e)}
                />
                <input 
                    type = "text"
                    placeholder = "h2oFrequency"
                    name = "h2oFrequency"
                    value = {plants.h2oFrequency}
                    onChange = { e => handleChange(e)}
                />
                <button onClick={handleSubmit}> Submit</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    console.log("%%%", state)
    return{
       
    }
}

export default PlantForm