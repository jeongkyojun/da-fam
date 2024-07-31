"use client";

import { StyledCardImage, StyledItemCard } from "./styled";
import { itemCardType } from "./types";

const ItemCard = ({ onClick, item }: itemCardType) => {
  const { title, description, price } = item;
  return (
    <StyledItemCard onClick={onClick}>
      <StyledCardImage>Image</StyledCardImage>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </StyledItemCard>
  );
};

export default ItemCard;
