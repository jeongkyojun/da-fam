import styled from "styled-components"
import { OptionStyleType } from "./types"

export const StyledOptionBar = styled.div<OptionStyleType>`
  width: ${({width})=>width||180}px;
  height: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
`


export const StyledOptionButton = styled.a<OptionStyleType>`
  width: ${({width})=>width||50}px;
  height: ${({width})=>width||50}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`