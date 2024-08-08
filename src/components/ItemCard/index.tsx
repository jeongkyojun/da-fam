"use client";

import Image from "next/image";
import {
  StyledCardImage,
  StyledDescrpitionLine,
  StyledDiscountLine,
  StyledItemCard,
  StyledPriceLine,
  StyledTextLine,
  StyledTitleLine,
} from "./styled";
import { itemCardType } from "./types";
import { useRouter } from "next/navigation";

const ItemCard = ({ item, category }: itemCardType) => {
  const { title, description, price, image, discount } = item;
  const router = useRouter();
  const onClick = () => {
    router.push("/productDetail/" + category + "/" + item.id);
  };
  return (
    <StyledItemCard onClick={onClick}>
      <StyledCardImage>
        <Image src={image} alt={title} width={200} height={200}></Image>
      </StyledCardImage>
      <StyledTextLine>
        <StyledTitleLine>{title}</StyledTitleLine>
        <StyledPriceLine>
          {discount ? (
            <StyledDiscountLine style={{ textDecoration: "line-through" }}>
              {price}
            </StyledDiscountLine>
          ) : (
            ""
          )}
          {(price * (100 - discount)) / 100}￦
        </StyledPriceLine>
      </StyledTextLine>
    </StyledItemCard>
  );
};

export default ItemCard;
