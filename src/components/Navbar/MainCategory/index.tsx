import { useState } from "react";
import { categoryItemListStyle, categoryStyle } from "../styled";
import { mainCategoryType } from "./types";

const MainCategory = ({
  mainItems,
  subItems,
}: mainCategoryType): JSX.Element => {
  const [index, setIndex] = useState(0);
  return (
    <div style={categoryStyle}>
      <ul className="category" id="category-list">
        {mainItems?.map((item) => {
          return (
            <li key={"category-" + item.name} style={categoryItemListStyle}>
              {item.name}
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <ul className="category" id="sub-category-list">
        {subItems[index].map((item, index: number) => {
          return (
            <li key={"sub-" + index} style={categoryItemListStyle}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainCategory;
