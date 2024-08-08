import styled from "styled-components"



export const StyledCardBody = styled.div`
    height: 300px;
    display:flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const StyledCardTitle = styled.h2`
    font-size: 24px;
    font-weight: bolder
`

export const StyledSpanTag = styled.span`
    display: inline-block;
    width: 50px;

    text-align: center;
    font-size: initial;
    background-color: orange;
    color: white;
    border-radius: 10px;

    margin-right: 10px;
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    font-weight: bolder
    
`

export const StyledCartButton = styled.button`
    background-color: #0074D9;
    width: 40%;
    height: 24px;
    color: white;
`

export const StyledCartShortcut = styled.a`
    display: inline-block;
    background-color: gray;
    color: white;
    width: 40%;
    height: 24px;
    text-align: center;
    &:hover{
        
    }
`