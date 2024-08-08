import styled from "styled-components"

export const StyledNav = styled.div`
    position: sticky;
    top: 0px;
    backgroundColor: white;
    z-index: 9998;
`

export const StyledLogoWrapper = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display:flex;
    align-items: center;
`

export const navBodyStyle:Object={
    width: '100%',
    height: '75px',
    backgroundColor: 'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
}

export const navCategoryButtonStyle:Object = {
}

export const cartIconStyle:Object = {
    backgroundImage: `src/assets/icon/cart.svg`,
}

