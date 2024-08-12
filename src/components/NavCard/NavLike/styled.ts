import styled from "styled-components"
import { StyledType } from "./types"

export const StyledNavLogin = styled.div<StyledType>`
    width: 200px;
    height: 100px;
    background-color: white;
    border: 1px solid red;
    z-index:9999;
    
    visibility: ${({active})=>active?`visible`:`hidden`};
`