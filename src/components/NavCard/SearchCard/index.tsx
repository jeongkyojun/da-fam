import { SearchCardType } from "./types";

const SearchCard = ({ items }: SearchCardType) => {
  return (
    <div>
      {items.map((item) => {
        return <li key={"item_" + item.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default SearchCard;
