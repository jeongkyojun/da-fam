import { selector,atom } from "recoil";

// 혹시 API통신이 되지 않는다면 /product.json파일을 활용해서 로드하세요.
// const productsURL = '/products.json';

interface IRating {
  readonly rate?: number;
  readonly count?: number;
}
export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

export const productsListItem = atom<IProduct[]>({
  key: "productsListItem",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem("PRODUCT_LIST") && setSelf(JSON.parse(localStorage.getItem("PRODUCT_LIST") as string));
      onSet((value) => localStorage.setItem("PRODUCT_LIST", JSON.stringify(value)));
    },
  ],
})

export const theme = atom<boolean>({
  key:"theme",
  default: false, // 기본 : 다크테마
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem("THEME") && setSelf(JSON.parse(localStorage.getItem("THEME") as string));
      onSet((value) => localStorage.setItem("THEME", JSON.stringify(value)));
    },
  ],
})