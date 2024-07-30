"use client";
import { ChangeEvent, useState } from "react";
import MainCategory from "./MainCategory";
import SearchBar from "./SearchBar";
import { navBodyStyle, StyledLogoWrapper, StyledNav } from "./styled";
import OptionBar from "./OptionBar";
import Image from "next/image";
import Logo from "../../assets/icon/Logo.svg";
import Link from "next/link";
import { CATEGORY } from "@/constants/category";

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
    <StyledNav>
      <div className="navbar">
        <div className="nav-body" style={navBodyStyle}>
          <StyledLogoWrapper>
            <Link href={"/"}>
              <Image src={Logo} alt={"로고"} width={180} height={90}></Image>
            </Link>
          </StyledLogoWrapper>
          <SearchBar onChangeHandler={product_input} />
          <OptionBar />
        </div>
        <MainCategory items={CATEGORY}></MainCategory>
      </div>
    </StyledNav>
  );
};

export default Navbar;
