"use client";
import React, { useEffect, useState } from "react";
import { PropTypes } from "./type";
import {
  StyledFilterHeader,
  StyledProduct,
  StyledProductBodyWrapper,
  StyledProductFilter,
  StyledProductItems,
  StyledProductLink,
  StyledProductList,
  StyledProductTitle,
} from "./styled";
import { CATEGORY, CATEGORY_TITLE } from "@/constants/category";
import Link from "next/link";
import ItemList from "@/components/ItemList";
import { FILTER_PRICE, PRODUCT_ITEMS } from "@/constants/data";

const Product = ({ params }: PropTypes) => {
  const [categoryName, setCategoryName] = useState("물건");
  const [items, setItems] = useState(["none"]);
  const [itemList, setItemList] = useState(PRODUCT_ITEMS[params.category]);
  useEffect(() => {
    if (typeof params.category != "undefined") {
      setCategoryName(CATEGORY_TITLE[params.category]);
      setItems(CATEGORY[params.category]);
      if (params.type != 0)
        setItemList(
          PRODUCT_ITEMS[params.category].filter(
            (item) => item.type == params.type
          )
        );
    }
  }, [params]);

  const productListClickHandler = () => {
    console.log("click");
  };

  const checkProductListHandler = () => {
    setItemList((prev) => {
      return prev.filter((prevItem) => prevItem.price > 10000);
    });
  };

  return (
    <StyledProduct>
      <StyledProductTitle>{categoryName}</StyledProductTitle>
      <StyledProductItems>
        {items.map((item, index) => {
          return (
            <StyledProductLink key={"p_" + item}>
              <Link href={"/product/" + params.category + "/" + index}>
                {item}
              </Link>
            </StyledProductLink>
          );
        })}
      </StyledProductItems>
      <StyledProductBodyWrapper>
        <StyledProductFilter>
          <StyledFilterHeader> 필터 </StyledFilterHeader>
          <hr></hr>
          <StyledFilterHeader>가격순</StyledFilterHeader>
          {}
          <hr></hr>
          <StyledFilterHeader>브랜드</StyledFilterHeader>
        </StyledProductFilter>
        <StyledProductList>
          <ItemList
            row={2}
            col={4}
            title={CATEGORY[params.category][params.type]}
            data={itemList}
            category={params.category}
          ></ItemList>
        </StyledProductList>
      </StyledProductBodyWrapper>
    </StyledProduct>
  );
};

export default Product;
