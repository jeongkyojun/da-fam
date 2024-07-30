"use client";
import {
  StyledInputText,
  StyledSearchBar,
  StyledSearchBarWrapper,
  StyledSearchButton,
} from "./styled";
import { SearchBarType } from "./types";
import SearchIcon from "../../../assets/icon/search.svg";
import Image from "next/image";

const SearchBar = ({ onClickHandler, onChangeHandler }: SearchBarType) => {
  return (
    <StyledSearchBar>
      <StyledSearchBarWrapper>
        <StyledInputText
          onChange={onChangeHandler}
          placeholder="검색어를 입력해주세요"
        ></StyledInputText>
        <StyledSearchButton>
          <Image
            src={SearchIcon}
            alt={"검색결과"}
            width={50}
            height={50}
          ></Image>
        </StyledSearchButton>
      </StyledSearchBarWrapper>
    </StyledSearchBar>
  );
};

export default SearchBar;
