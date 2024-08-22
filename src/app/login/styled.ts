import styled from "styled-components"
import { ButtonStyleType } from "./types"
import { blue } from "@/constants/palette"

export const StyledLoginPage = styled.div`
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 400px;
    border: 1px solid green;
    height: 300px
`

export const StyledInputLabel = styled.div`
    margin-bottom: 10px;
`

export const StyledLabel = styled.label`
    display: inline-block;
    text-align: center;
    width: 80px;
`

export const StyledInput = styled.input`
    margin-left: 10px;
    background-color: ${blue[200]};
    height: 2rem;
    width: 16rem;
    border-radius: 0.5rem;
    text-indent: 1rem;
`

export const StyledButton = styled.div<ButtonStyleType>`
    background-color: ${({primary})=>
        primary?
        blue[400]:'gray'
    };
    width: 18rem;
    height: 2rem;
    border-radius: 0.5rem;
    color: white;
    text-align: center;
    font-size: 1rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
`

export const StyledSocialWrapper = styled.div`
    position:relative;
    display: flex;
    width: 18rem;
    justify-content: space-around;
    margin-top: 0.5rem;
`

export const StyledSocialButton = styled.div`

    width: 3rem;
    height: 3rem;
    border-radius:50%;
    border: 1px solid black;

    &:hover{
        width: 3.1rem;
        height: 3.1rem;
    }

`