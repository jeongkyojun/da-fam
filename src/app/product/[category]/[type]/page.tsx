"use client";
import React, { useEffect, useState } from "react";
import { PropTypes } from "./type";
import {
  StyledProduct,
  StyledProductBodyWrapper,
  StyledProductFilter,
  StyledProductItems,
  StyledProductList,
  StyledProductTitle,
} from "./styled";
import { CATEGORY } from "@/constants/category";
import Link from "next/link";

const Product = ({ params }: PropTypes) => {
  const [categoryName, setCategoryName] = useState("물건");
  const [items, setItems] = useState(["none"]);

  useEffect(() => {
    if (typeof params.category != "undefined") {
      if (typeof params.type != "undefined")
        setCategoryName(CATEGORY[params.category][params.type]);
      setItems(CATEGORY[params.category]);
    }
  }, [params]);

  return (
    <StyledProduct>
      <StyledProductTitle>{categoryName}</StyledProductTitle>
      <StyledProductItems>
        {items.map((item, index) => {
          return (
            <div key={"p_" + item}>
              <Link href={"/product/" + params.category + "/" + index}>
                {item}
              </Link>
            </div>
          );
        })}
      </StyledProductItems>
      <StyledProductBodyWrapper>
        <StyledProductFilter></StyledProductFilter>
        <StyledProductList></StyledProductList>
      </StyledProductBodyWrapper>
    </StyledProduct>
  );
};

export default Product;
