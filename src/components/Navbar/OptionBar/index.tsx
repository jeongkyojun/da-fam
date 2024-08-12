"use client";
import Image from "next/image";
import myLikeIcon from "../../../assets/icon/my-favorite.svg";
import myItemIcon from "../../../assets/icon/my-item.svg";
import myCartIcon from "../../../assets/icon/cart.svg";
import { StyledOptionButton, StyledOptionBar } from "./styled";
import NavLogin from "@/components/NavCard/NavLike";
import { useState } from "react";
import NavLike from "@/components/NavCard/NavLike";
import NavCart from "@/components/NavCard/NavCart";
import { cartState, likeState } from "@/store/cart";
import { useRecoilState } from "recoil";

const OptionBar = () => {
  const ICON_SIZE = 50;

  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [likeItems, setLikeItems] = useRecoilState(likeState);

  const [likeActive, setLikeActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  return (
    <StyledOptionBar width={ICON_SIZE * 3 + 20}>
      <StyledOptionButton
        title={"즐겨찾기"}
        width={ICON_SIZE}
        onMouseOver={() => {
          setLikeActive(true);
        }}
        onMouseOut={() => {
          setLikeActive(false);
        }}
      >
        <Image
          src={myLikeIcon}
          alt="즐겨찾기"
          width={ICON_SIZE}
          height={ICON_SIZE}
        ></Image>
        <NavLike active={likeActive} items={likeItems.items["none"]}></NavLike>
      </StyledOptionButton>
      <StyledOptionButton title={"내정보"} width={ICON_SIZE}>
        <Image
          src={myItemIcon}
          alt="내정보"
          width={ICON_SIZE}
          height={ICON_SIZE}
        ></Image>
      </StyledOptionButton>
      <StyledOptionButton
        title={"장바구니"}
        width={ICON_SIZE}
        href={"/cartPage"}
        onMouseOver={() => {
          setCartActive(true);
        }}
        onMouseOut={() => {
          setCartActive(false);
        }}
      >
        <Image
          src={myCartIcon}
          alt="장바구니"
          width={ICON_SIZE}
          height={ICON_SIZE}
        ></Image>
        <NavCart active={cartActive} items={cartItems}></NavCart>
      </StyledOptionButton>
    </StyledOptionBar>
  );
};

export default OptionBar;
