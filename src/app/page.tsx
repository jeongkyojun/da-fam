"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Carousel from "@/components/Carousel";
import { CAROUSEL_ITEM } from "../constants/data";
import { StyledMainPage } from "./styled";
import ItemList from "@/components/ItemList";

export default function Home() {
  return (
    <StyledMainPage>
      <Carousel items={CAROUSEL_ITEM}></Carousel>
      <ItemList data={[]} title={"이벤트 1"}></ItemList>
    </StyledMainPage>
  );
}
