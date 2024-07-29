"use client";
import ItemCard from "./ItemCard";
import { itemCardType } from "./types";

const ItemList = ({ data }: itemCardType) => {
  return (
    <div>
      <h1> 이벤트 종류 </h1>
      {data.map((item, index: number) => {
        return <ItemCard key={"item#" + index}></ItemCard>;
      })}
    </div>
  );
};

export default ItemList;
