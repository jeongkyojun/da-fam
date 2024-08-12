import { PropType } from "./types";
import { StyledNavCart } from "./styled";

const NavCart = ({ active }: PropType) => {
  return <StyledNavCart active={active}></StyledNavCart>;
};

export default NavCart;
