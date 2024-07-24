import { ChangeEvent, useState } from "react";
import MainCategory from "./MainCategory";
import SearchBar from "./SearchBar";
import { navBodyStyle, navStyle } from "./styled";
import OptionBar from "./OptionBar";

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
    <div>
      <div className="navbar" style={navStyle}>
        Navigation Bar
        <nav className="nav-body" style={navBodyStyle}>
          <div className="category-btn">category</div>
          <SearchBar />
          <OptionBar />
        </nav>
      </div>
      <MainCategory show={mouseOn}></MainCategory>
    </div>
  );
};

export default Navbar;
