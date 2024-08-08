"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Carousel from "@/components/Carousel";
import { CAROUSEL_ITEM, PRODUCT_EVENT, PRODUCT_ITEMS } from "../constants/data";
import { StyledMainPage } from "./styled";
import ItemList from "@/components/ItemList";

export default function Home() {
  return (
    <StyledMainPage>
      <Carousel items={CAROUSEL_ITEM}></Carousel>
      <ItemList
        row={1}
        col={10}
        data={PRODUCT_EVENT["meat"]}
        title={"오늘은 소고기 먹는날"}
        category={"meat"}
      ></ItemList>
      <ItemList
        row={1}
        col={10}
        data={PRODUCT_ITEMS["meat"].filter((item) => item.type == 3)}
        title={"오늘은 1인 1닭"}
        category={"meat"}
      ></ItemList>
    </StyledMainPage>
  );
}
