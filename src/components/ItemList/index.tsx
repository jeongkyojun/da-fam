"use client";
import ItemCard from "./ItemCard";
import { StyledItemList, StyledItemListTitle } from "./styled";
import { itemCardType } from "./types";

const ItemList = ({ data, title }: itemCardType) => {
  return (
    <StyledItemList>
      <StyledItemListTitle> {title} </StyledItemListTitle>
      {data.map((item, index: number) => {
        return <ItemCard key={"item#" + index}></ItemCard>;
      })}
    </StyledItemList>
  );
};

export default ItemList;
