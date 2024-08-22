import styled from "styled-components"

export const StyledItemCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 240px;
    border: 1px solid blue;
`
export const StyledCardImage = styled.div`
    width: 160px;
    height: 160px;
    border: 1px solid gray;    
`

export const CardImage = styled.img`
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`

export const StyledTextLine = styled.div`
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
`

export const StyledTitleLine = styled.p`
    display: block;
    width: 90%;
    height: 30px;
    margin-top: 5px;
    font-size: 1.1rem;

    border: 1px solid red;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const StyledDescrpitionLine = styled.p`
    border: 1px solid blue;
    font-size: 0.8rem;  
`

export const StyledPriceLine = styled.p`
    border: 1px solid green;
`

export const StyledDiscountLine = styled.p`
    font-size: 0.8rem;
    color: #999999;
`