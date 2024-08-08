"use client";
import { useState } from "react";
import { mainCategoryType } from "./types";
import {
  StyledCardIcon,
  StyledCategory,
  StyledCategoryItemList,
  StyledListCard,
  StyledMainCategory,
  StyledSubCategory,
} from "./styled";
import {
  CATEGORY,
  CATEGORY_ICON,
  CATEGORY_IMAGE,
  CATEGORY_TITLE,
} from "@/constants/category";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MainCategory = ({ items }: mainCategoryType): JSX.Element => {
  const [nowCategory, setNowCategory] = useState("none");
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const onMouseHandler = () => {
    setIsActive((prev) => {
      return !prev;
    });
  };

  const showCategoryPage = (category: string, index: number) => {
    router.push("/product/" + category + "/" + index);
  };

  return (
    <StyledCategory onMouseOver={onMouseHandler} onMouseOut={onMouseHandler}>
      <h1> ▽</h1>
      <StyledCategoryItemList active={isActive}>
        <StyledMainCategory>
          {Object.keys(items).map((category) => {
            if (category == "none") return <></>;
            return (
              <StyledListCard
                key={category}
                onMouseOver={() => {
                  setNowCategory(category);
                }}
              >
                <StyledCardIcon>
                  <Image
                    src={CATEGORY_ICON[category]}
                    alt={"카테고리 아이콘"}
                  ></Image>
                </StyledCardIcon>
                {CATEGORY_TITLE[category]}
              </StyledListCard>
            );
          })}
        </StyledMainCategory>
        <StyledSubCategory>
          {CATEGORY[nowCategory].map((item, index) => {
            return (
              <StyledListCard
                key={nowCategory + "_" + item}
                onClick={() => showCategoryPage(nowCategory, index)}
              >
                {item}
              </StyledListCard>
            );
          })}
        </StyledSubCategory>
        {nowCategory == "none" ? (
          <></>
        ) : (
          <Image src={CATEGORY_IMAGE[nowCategory]} alt="카테고리이미지"></Image>
        )}
      </StyledCategoryItemList>
    </StyledCategory>
  );
};

export default MainCategory;
