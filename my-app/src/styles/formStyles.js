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
    padding: 5px;
    `,
}