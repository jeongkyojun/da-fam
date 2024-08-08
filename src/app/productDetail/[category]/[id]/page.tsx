"use client";
import Image from "next/image";
import { PropTypes } from "./types";
import { PRODUCT_ITEMS } from "@/constants/data";
import { useEffect, useState } from "react";
import {
  StyledButtonWrapper,
  StyledCardBody,
  StyledCardTitle,
  StyledCartButton,
  StyledCartShortcut,
  StyledSpanTag,
} from "./styled";

const ProductDetail = ({ params }: PropTypes) => {
  const [items, setItems] = useState(PRODUCT_ITEMS[params.category][params.id]);
  const { title, price, image, description, discount } = items;

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div>
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <Image src={image} alt={title} width={400} height={400}></Image>
          </figure>
          <StyledCardBody>
            <StyledCardTitle>
              {title}
              {discount != 0 ? (
                <StyledSpanTag className="badge badge-accent ml-2">
                  {discount}%
                </StyledSpanTag>
              ) : (
                <StyledSpanTag></StyledSpanTag>
              )}
            </StyledCardTitle>
            <p>{description}</p>
            {discount! - 0 ? (
              <div>
                <p>{Math.round(price)}￦</p>
                <p className="mt-2 mb-4 text-3xl">
                  {Math.round((price * (100 - discount)) / 100)}￦
                </p>
              </div>
            ) : (
              <p className="mt-2 mb-4 text-3xl">{Math.round(price)}￦</p>
            )}
            <StyledButtonWrapper>
              <StyledCartButton className="btn btn-primary">
                장바구니에 담기
              </StyledCartButton>
              <StyledCartShortcut className="btn btn-outline ml-1" href="/cart">
                장바구니로 이동
              </StyledCartShortcut>
            </StyledButtonWrapper>
          </StyledCardBody>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
