"use client";
import Image from "next/image";
import myLikeIcon from "../../../assets/icon/my-favorite.svg";
import myItemIcon from "../../../assets/icon/my-item.svg";
import myCartIcon from "../../../assets/icon/cart.svg";
import { StyledOptionButton, StyledOptionBar } from "./styled";

const OptionBar = () => {
  const ICON_SIZE = 50;

  return (
    <StyledOptionBar width={ICON_SIZE * 3 + 20}>
      <StyledOptionButton
        title={"즐겨찾기"}
        width={ICON_SIZE}
        href={"/cartPage"}
      >
        <Image
          src={myLikeIcon}
          alt="즐겨찾기"
          width={ICON_SIZE}
          height={ICON_SIZE}
        ></Image>
      </StyledOptionButton>
      <StyledOptionButton title={"내정보"} width={ICON_SIZE} href={"/cartPage"}>
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
      >
        <Image
          src={myCartIcon}
          alt="장바구니"
          width={ICON_SIZE}
          height={ICON_SIZE}
        ></Image>
      </StyledOptionButton>
    </StyledOptionBar>
  );
};

export default OptionBar;
