"use client";

import { ChangeEvent, useState } from "react";
import MainCategory from "./MainCategory";
import SearchBar from "./SearchBar";
import { altImageStyle, navBodyStyle, navStyle } from "./styled";
import OptionBar from "./OptionBar";
import Image from "next/image";
import { CATEGORIES, SUB_CATEGORIES } from "../../constants/data";

const Navbar = () => {
  let mouseOn = false;
  const category_show = () => {};
  const product_search = () => {
    console.log("search");
  };
  const product_input = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div style={navStyle}>
      <div className="navbar">
        <div className="nav-body" style={navBodyStyle}>
          <div style={altImageStyle}>logo</div>
          {/* <Image
            src={"../../src/assets/icon/cart.svg"}
            alt={"로고"}
            width={20}
            height={20}
          ></Image> */}
          <SearchBar onChangeHandler={product_input} />
          <OptionBar />
        </div>
        <div>
          <div className="category-btn">category</div>
        </div>
      </div>
      <MainCategory
        mainItems={CATEGORIES}
        subItems={SUB_CATEGORIES}
      ></MainCategory>
    </div>
  );
};

export default Navbar;
