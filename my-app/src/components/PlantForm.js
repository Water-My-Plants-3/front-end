import React from 'react'

const PlantForm = props => {
    const [plants, setPlants] = useState({
        id: Number,
        nickname: "",
        species: "",
        h2oFrequency: "",
    })



    const handleChange = e => {
        setPlants({...plants, [e.target.name]: e.target.value})
    }

    return(
        <>
            <form>
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