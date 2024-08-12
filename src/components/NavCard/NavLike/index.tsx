import { useRecoilState } from "recoil";
import { StyledNavLogin } from "./styled";
import { PropType } from "./types";

const NavLike = ({ active, items }: PropType) => {
  return <StyledNavLogin active={active}></StyledNavLogin>;
};

export default NavLike;
