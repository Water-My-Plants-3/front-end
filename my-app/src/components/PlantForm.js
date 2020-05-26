import React from 'react'
import axiosWithAuth from "../utils/axiosWithAuth"

const PlantForm = props => {
    const [plants, setPlants] = useState({
        id: Number,
        nickname: "",
        species: "",
        h2oFrequency: "",
    })


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        // post request ex: (/api/plants)
    }

    const handleChange = e => {
        setPlants({...plants, [e.target.name]: e.target.value})
    }

    return(
        <>
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
                    placeholder = "h20 Frequency"
                    name = "h20 Frequency"
                    value = {plants.h2oFrequency}
                    onChange = { e => handleChange(e)}
                />
            </form>
        </>
    )
}
export default PlantForm