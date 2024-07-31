import styled from "styled-components"

export const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    background-color: white;
`
export const StyledProductTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bolder;

    text-align: center;
`

export const StyledProductItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-around;
    align-items: space-around;
    border: 1px solid #BCBCBC;
    width: 100%;
    height: 120px;
`

export const StyledProductLink = styled.div`
    display: inline-block;
    text-align: center;
    height: 35px;
    font-size: 1rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    border: 1px solid blue;
`

export const StyledProductBodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid gray;
    height: 2000px;
`

export const StyledProductFilter = styled.div`
    position: sticky;
    top: 105px;
    border: 1px solid black;
    margin-top: 5px;
    margin-left: 5px;
    width: 250px;
    height: 500px;
    
    overflow: auto;
`

export const StyledFilterHeader = styled.div`

`

export const StyledProductList = styled.div`
    width: 100%;
`