import Image from "next/image";
import Navbar from "../components/Navbar";
import Carousel from "@/components/Carousel";
import { CAROUSEL_ITEM } from "../constants/data";

export default function Home() {
  return (
    <div style={{ height: "5000px" }}>
      <h1>기본 페이지입니다.</h1>
      <Carousel items={CAROUSEL_ITEM}></Carousel>
    </div>
  );
}
