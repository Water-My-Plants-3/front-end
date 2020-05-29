import styled from "styled-components";

export const formStyles = {
    StyledForm: styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 40% 0;
    box-sizing: border-box;
    line-height: 2.5rem;

    `,
    StyledError: styled.div`
    border: 1px solid black;
    border-radius: 5px;
    border-bottom: 4px solid red;
    padding: 0 1rem;
    margin: 1rem 0;
    box-shadow: 3px 3px #888888;
    `,
    Tittle: styled.h1`
    font-size: 6rem;
    font-weight: 900;
    line-height: 6rem;
    `,
    StyledInputs: styled.input`
    border: 1px solid black;
    border-radius: 5px;
    border-bottom: 4px solid #235B2D;
    padding: 1rem;
    `,
    StyledButton: styled.button`
        
    `,
    CardContainer: styled.div`
    width: 80%;
    max-height: 90%;
    margin: 0 auto;
    box-shadow: 3px 3px #888888;
    border: 1px solid black;
    border-radius: 5px;
    border-top: 20px solid #235B2D;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: baseline;
    align-content: flex-start;
    padding: 1%;
    
    `,
    StyledPlantCard: styled.div`
    max-width: 15%;
    max-height: 40%
    box-shadow: 3px 3px #888888;
    border: 1px solid black;
    border-radius: 5px;
    `,
    PlantPortrait: styled.img`
    width:80%;
    border: 1px solid black;
    border-radius: 50%;
    `,
    PlantInfo: styled.p`
    max-width: 90%;
    paddin: 2px;
    font-size: 1rem;
    line-height: 1.5rem;
    `
}