"use client";
import { StyledInputText } from "./styled";
import { SearchBarType } from "./types";

const SearchBar = ({ onClickHandler, onChangeHandler }: SearchBarType) => {
  return (
    <div>
      <StyledInputText></StyledInputText>
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
