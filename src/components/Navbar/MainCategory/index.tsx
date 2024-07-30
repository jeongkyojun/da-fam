"use client";
import { useState } from "react";
import { categoryItemListStyle, categoryStyle } from "../styled";
import { mainCategoryType } from "./types";
import { StyledCategory, StyledCategoryItemList } from "./styled";

const MainCategory = ({ items }: mainCategoryType): JSX.Element => {
  const [index, setIndex] = useState(0);
  return (
    <StyledCategory>
      <h1> category</h1>
      <StyledCategoryItemList></StyledCategoryItemList>
    </StyledCategory>
  );
};

export default MainCategory;
