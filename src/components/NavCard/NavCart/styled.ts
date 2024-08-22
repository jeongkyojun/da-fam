import styled from "styled-components"
import { StyledType } from "./types"

export const StyledNavCart = styled.div<StyledType>`
    width: 200px;
    height: 100px;
    background-color: white;
    border: 1px solid red;
    z-index:9999;
    margin-top: 10px;
    
    visibility: ${({active})=>active?`visible`:`hidden`};
`