import React from 'react'
import { formStyles } from "../styles/formStyles";

export const PlantCard = props => {
    const {StyledPlantCard, PlantPortrait, Tittle, PlantInfo} = formStyles
    const {name, species,user_id, water_freq } = props.plantInfo
    // debugger
    return(
        <StyledPlantCard>
            <br/><br/>
            <PlantPortrait src='https://picsum.photos/200'/><br/><br/><br/>
            <Tittle style={{fontSize: '2rem'}}>{name}</Tittle>
            <PlantInfo>
                    <b style={{fontWeight: '900'}}>Species:</b> {species}<br/>
                    <b style={{fontWeight: '900'}}>Water every:</b>{water_freq}<br/>
            </PlantInfo>
        </StyledPlantCard>
    )
}
export default PlantCard