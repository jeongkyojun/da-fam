"use client";

import Image from "next/image";
import {
  CardImage,
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
  const buyPrice = Math.round((price * (100 - discount)) / 100);
  return (
    <StyledItemCard onClick={onClick}>
      <StyledCardImage>
        {/* <CardImage src="../../assets/icon/cow.svg" alt={title}></CardImage> */}
        <Image src={image} alt={title}></Image>
      </StyledCardImage>
      <StyledTextLine>
        <StyledTitleLine>{title}</StyledTitleLine>
        <StyledPriceLine>
          {discount ? (
            <div>
              <StyledDiscountLine>
                {discount}% &nbsp;
                <del>{price}원</del>
              </StyledDiscountLine>
            </div>
          ) : (
            ""
          )}
          {buyPrice}원
        </StyledPriceLine>
      </StyledTextLine>
    </StyledItemCard>
  );
};

export default ItemCard;
