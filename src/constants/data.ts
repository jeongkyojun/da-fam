import groceryImg from "../../src/assets/img/img_shop_grocery.jpeg"
import fashionImg from "../../src/assets/img/img_shop_fashion.jpeg"
import digitalImg from "../../src/assets/img/img_shop_digital.jpeg"

export const CAROUSEL_ITEM = [
    {
      name: "fashion",
      title: "물빠진 청바지!",
      text: "이제 막 도착한 패션 청바지를 구경해 보세요.",
      img: fashionImg,
    },
    {
      name: "digital",
      title: "신속한 업무처리!",
      text: "다양한 디지털 상품을 둘러보세요.",
      img: digitalImg,
    },
    {
      name: "grocery",
      title: "신선한 식품!",
      text: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
      img: groceryImg,
    },
  ];

export const CATEGORIES = [
    {
        name: '육류',
        src: '',
    },
    {
        name: '채소',
        src: '',
    },
    {
        name: '해산물',
        src: '',
    },
    {
        name: '조미료',
        src: '',
    },
]

export const SUB_CATEGORIES = [
    [
        {
            name: '소고기',
        },
        {
            name: '닭고기',
        },
        {
            name: '돼지고기',
        },
        {
            name:'오리고기',
        },
        {
            name: '가공품',
        }
    ],
    [
        {
            name: '과일',
        },
        {
            name: '채소',
        },
        {
            name: '나물',
        },
        {
            name:'오리고기',
        },
    ],    [
        {
            name: '소고기',
        },
        {
            name: '닭고기',
        },
        {
            name: '돼지고기',
        },
        {
            name:'오리고기',
        },
        {
            name: '가공품',
        }
    ],    [
        {
            name: '소금',
        },
        {
            name: '설탕',
        },
        {
            name: '참깨/들깨',
        },
        {
            name:'후추',
        },
        {
            name: '향신료',
        }
    ],
]