import styled from 'styled-components'
import { CategoryListType } from './types'
import { blue } from '@/constants/palette'


export const StyledCategory = styled.div`
    background-color: ${blue[500]};
    text-align: center;
    color: white;
    height: 28px;
    &:hover{
    }
`

export const StyledCategoryItemList = styled.div<CategoryListType>`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: ${({active})=>(active?300:0)}px;
    fontSize: 23px;
    border: 1px solid #BCBCBC;
    background-color: #EFEFEF;
    overflow:hidden;
    transition: 1000ms all;
`

export const StyledMainCategory = styled.div`
    display: inline-block;
    border-right: 1px solid gray;
`

export const StyledSubCategory = styled.div`
    display: inline-block;
`

export const StyledCardIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-right:5px;
`

export const StyledListCard = styled.li`
    list-style-type:none;
    display: flex;
    flex-direction: row;
    align-items:center;
    
    color: black;
    width: 210px;
    height: 45px;
    line-height: 40px;
    margin-left: 5px;

    &:hover{
        background-color: #BCBCBC
    }

`