"use client";
import ItemCard from "../ItemCard";
import {
  StyledItemList,
  StyledItemListTitle,
  StyledItemListWrapper,
  StyledItemListRow,
} from "./styled";
import { itemListType } from "./types";

const ItemList = ({ row, col, data, title, onClick }: itemListType) => {
  const gridMake = () => {
    const cards = [];
    for (let i = 1; i <= row; i++) {
      const vec = [];
      if ((i - 1) * col > data.length) break;
      for (let j = 1; j <= col; j++) {
        // j-1 + j-1*i-1 = (j-1) * (i-1) + j-1
        if (j - 1 + (i - 1) * col >= data.length) break;
        vec.push(
          <ItemCard
            key={"item_#" + (j - 1 + i * col)}
            onClick={onClick}
            item={data[j - 1 + (i - 1) * col]}
          ></ItemCard>
        );
      }
      cards.push(<StyledItemListRow>{vec}</StyledItemListRow>);
    }
    return cards;
  };

  return (
    <StyledItemList>
      <StyledItemListTitle> {title} </StyledItemListTitle>
      <StyledItemListWrapper>{gridMake()}</StyledItemListWrapper>
    </StyledItemList>
  );
};

export default ItemList;
