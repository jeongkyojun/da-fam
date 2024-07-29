"use client";
import { searchBarStyle } from "../styled";
import { StyledInputText } from "./styled";
import { SearchBarType } from "./types";

const SearchBar = ({ onClickHandler, onChangeHandler }: SearchBarType) => {
  return (
    <div style={searchBarStyle}>
      <StyledInputText onChange={onChangeHandler}></StyledInputText>
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
