"use client";
import Link from "next/link";
import { CarouselItemsType } from "./types";
import Image from "next/image";
import {
  CarouselDiscriptionStyle,
  CarouselStyle,
  StyledCarouselBtn,
  StyledCarouselCard,
  StyledCarouselText,
  StyledCarouselTitle,
} from "./style";

const Carousel = ({ items }: CarouselItemsType) => {
  return (
    <div style={CarouselStyle}>
      <div style={CarouselDiscriptionStyle}>
        {items.map((item, index: number) => {
          return (
            <StyledCarouselCard key={item.category}>
              <div className="carousel-description">
                <StyledCarouselTitle>{item.title}</StyledCarouselTitle>
                <StyledCarouselText>{item.text}</StyledCarouselText>
                <StyledCarouselBtn
                  href={`/product/` + item.category + "/" + item.type}
                >
                  바로가기
                </StyledCarouselBtn>
              </div>
              {item.img ? (
                <Image src={item?.img} alt={item.category}></Image>
              ) : (
                <div></div>
              )}
            </StyledCarouselCard>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
