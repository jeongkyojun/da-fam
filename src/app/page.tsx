"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Carousel from "@/components/Carousel";
import { CAROUSEL_ITEM, PRODUCT_EVENT } from "../constants/data";
import { StyledMainPage } from "./styled";
import ItemList from "@/components/ItemList";

export default function Home() {
  return (
    <StyledMainPage>
      <Carousel items={CAROUSEL_ITEM}></Carousel>
      <ItemList
        row={1}
        col={4}
        data={PRODUCT_EVENT["meat"]}
        title={"오늘은 소고기 먹는날"}
        onClick={() => {
          console.log("click");
        }}
      ></ItemList>
    </StyledMainPage>
  );
}
