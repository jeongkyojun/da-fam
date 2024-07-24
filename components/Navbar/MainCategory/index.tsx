import { categoryStyle } from "../styled";
import { mainCategoryType } from "./types";

const MainCategory = ({ show, width }: mainCategoryType): JSX.Element => {
  return (
    <ul className="category" id="category-list" style={categoryStyle}>
      <li>
        <a href="/"> 기본 </a>
      </li>
      <li>
        <a href="/main"> main </a>
      </li>
    </ul>
  );
};

export default MainCategory;
