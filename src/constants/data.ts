import meatImg from "../../src/assets/img/img_shop_meat.jpeg"
import vegetableImg from "../../src/assets/img/img_shop_vegetable.jpeg"
import fishImg from "../../src/assets/img/img_shop_fish.jpeg"

export const CAROUSEL_ITEM = [
    {
      category: "meat",
      type:0,
      title: "신선한 소고기",
      text: "신선하고 맛있는 소고기는 어떠신가요",
      img: meatImg,
    },
    {
      category: "vegetable",
      type:0,
      title: "상큼한 야채코너",
      text: "다양한 신선채소들을 둘러보세요.",
      img: vegetableImg,
    },
    {
      category: "fish",
      type:0,
      title: "생선회",
      text: "갓잡아서 더욱 신선한 생선회를 맛보세요.",
      img: fishImg,
    },
  ];
