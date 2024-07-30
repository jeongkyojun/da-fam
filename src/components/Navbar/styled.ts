import styled from "styled-components"

export const StyledNav = styled.div`
    position: sticky;
    top: 0px;
    backgroundColor: white;
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

export const categoryStyle:Object = {
    visibility: 'hidden',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid green',
    width: '100%',
    maxWidth: '1050px',
    backgroundColor:'gray',
}

export const categoryItemListStyle:Object={
    width: '200px',
    height: '35px',
    fontSize: '23px',
    border: '1px solid #BCBCBC',
    backgroundColor: 'white',
}

export const cartIconStyle:Object = {
    backgroundImage: `src/assets/icon/cart.svg`,
}

