import {styled} from 'styled-components'

export const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;  
`

export const StyledSearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: inherit;

    border: 2px solid #BCBCBC;
    border-radius: 8px;
    width: 700px;
    min-height: 80%;
`

export const StyledInputText = styled.input`
    background-color: transparent;
    text-align: center;
    width: 100%;
    height: 45px;
    &:focus{
        outline: none;
    }
`

export const StyledSearchButton = styled.div`
    background: transparent;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-right: 5px;
`
