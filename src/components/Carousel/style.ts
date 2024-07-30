import styled from "styled-components"

export const CarouselStyle = {
    border: '2px solid black',
    width: '100%',
}

export const CarouselDiscriptionStyle = {
    display:'flex',
    FlexDirection: 'row',
}


export const StyledCarouselCard = styled.div`
    position:relative;
`

export const StyledCarouselTitle = styled.div`
    position: absolute;
    top: 30px;
    width: 100%;

    color: white;
    font-weight: bolder;
    font-size: 24px;
`

export const StyledCarouselText = styled.p`
    position: absolute;
    top: 80px;
    color: white;
`

export const StyledCarouselBtn = styled.a`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #2E9AFE;
    color: white;
`