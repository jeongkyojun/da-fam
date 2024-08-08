import meatImg from "../../src/assets/img/img_shop_meat.jpeg"
import vegetableImg from "../../src/assets/img/img_shop_vegetable.jpeg"
import fishImg from "../../src/assets/img/img_shop_fish.jpeg"
import { IProduct } from "@/store/products";

// 고기 관련 이미지 링크
import cowImg from '../../src/assets/icon/cow.svg';
import porkImg from  '../../src/assets/icon/pig.svg';
import chickenImg from '../../src/assets/icon/chicken.svg';
import otherMeatImg from  '../../src/assets/icon/cow.svg'
import eggImg from  '../../src/assets/icon/egg.svg';

// 야채 관련 이미지 링크
import vegImg from "../../src/assets/img/img_shop_vegetable.jpeg"
import fruImg from "../../src/assets/img/img_shop_vegetable.jpeg"
import herbImg from "../../src/assets/img/img_shop_vegetable.jpeg"
import otherVegImg from "../../src/assets/img/img_shop_vegetable.jpeg"

// 생선 관련 이미지 링크
import fshImg from '../../src/assets/icon/fish.svg';
import shellImg from "../../src/assets/img/img_shop_fish.jpeg"
import weedImg from "../../src/assets/img/img_shop_fish.jpeg"
import canImg from "../../src/assets/img/img_shop_fish.jpeg"
import octImg from "../../src/assets/img/img_shop_fish.jpeg"


export const CAROUSEL_ITEM = [
    {
      category: "meat",
      type:0,
      title: "신선한 고기",
      text: "더운 날씨에는 역시 고기반찬",
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

export const FILTER_PRICE = [
  {max:5000},
  {min:5000,max:10000},
  {min:10000,max:20000},
  {min:20000,max:30000},
  {min:30000}
]


export const PRODUCT_ITEMS:{[key:string]:IProduct[]}  = {
  'meat' : [
    {
      id: 0,
      title: '동물복지 유정란 20구',
      description: '전문가와 함께 꼼꼼하게 고른',
      type: 5,
      price: 9990,
      image: eggImg,
      discount: 0,
    },{
      id: 1,
      title: '양념 소불고기 1kg(냉장)',
      description: '온가족이 즐기는 반찬',
      type: 1,
      price: 21990,
      image: cowImg,
      discount: 9,
    },{
      id: 2,
      title: '대패 삼겹살 1kg(냉동)',
      description: '든든하게 구비하는 대용량 삼겹살',
      type: 2,
      price: 16990,
      image: porkImg,
      discount: 24,
    },{
      id: 3,
      title: '훈제오리 슬라이스',
      description: '안심하고 즐기는 훈제오리',
      type: 4,
      price: 5390,
      image: otherMeatImg,
      discount: 0,
    },{
      id: 4,
      title: '호주산 목초육 치마살 300g(냉장)',
      description: '',
      type: 1,
      price: 16590,
      image: cowImg,
      discount: 13,
    },{
      id: 5,
      title: '부채살 바로구이용 800g 1개',
      description: '바로 구워먹는 부채살',
      type: 1,
      price: 24800,
      image: cowImg,
      discount: 2,
    },{
      id: 6,
      title: '무항생제 신선한 대란 60구',
      description: '',
      type: 5,
      price: 15970,
      image: eggImg,
      discount: 0,
    },{
      id: 7,
      title: '보리먹인 삼겹살 1kg 1개(냉장)',
      description: '',
      type: 2,
      price: 29200,
      image: porkImg,
      discount: 18,
    },{
      id: 8,
      title: '옛날 대패삼겹살(냉동) 2kg',
      description: '옛날 그맛 그대로',
      type: 2,
      price: 22900,
      image: porkImg,
      discount: 0,
    },{
      id: 9,
      title: '스페인 삼겹 11mm 2.5kg 1개',
      description: '스페인에서 건너온 삼겹살',
      type: 2,
      price: 28900,
      image: porkImg,
      discount: 10,
    },{
      id: 10,
      title: '농장 직송 1+등급 특란 25구',
      description: '농장에서 가져온 그대로',
      type: 5,
      price: 10990,
      image: eggImg,
      discount: 0,
    },{
      id: 11,
      title: '한돈 등심꽃살 구이용 1등급 1kg',
      description:'우리돼지 한돈 등심',
      type:2,
      price:18000,
      image:porkImg,
      discount: 11,
    },{
      id: 12,
      title: '닭다리살 조각정육(냉동) 2kg',
      description:'',
      type:3,
      price:20500,
      image:chickenImg,
      discount: 19,
    },{
      id: 13,
      title: '캐나다산 보리먹인 암퇘지 목살 600g(냉장)',
      description:'캐나다에서 들여온 보리먹인 돼지',
      type: 2,
      price:17510,
      image:porkImg,
      discount: 20,
    },{
      id: 14,
      title: '국내산 소고기 부채살 구이용 300g',
      description:'소고기는 한우!',
      type: 1,
      price: 22990,
      image:cowImg,
      discount: 26,
    },{
      id: 15,
      title: '양념 소 LA 갈비',
      description:'',
      type: 1,
      price: 34950,
      image: cowImg,
      discount: 0,
    },{
      id: 16,
      title: '1등급 닭다리살 정육 1kg 냉장',
      description:'',
      type:3,
      price: 19900,
      image:chickenImg,
      discount: 5,
    },{
      id: 17,
      title: '무항생제 인증 볶음탕용 닭고기 1kg',
      description:'무항생제 인증을 받은 볶음탕용 닭고기',
      type: 3,
      price: 9990,
      image:chickenImg,
      discount: 11,
    },
    // {
    //   id:,
    //   title:'',
    //   description:'',
    //   type:,
    //   price:,
    //   image:,
    //   discount:,
    // }
  ],
  'vegetable': [
    {
      id:100,
      title:'강원도 감자 3kg,1개',
      description:'',
      type:1,
      price:12900,
      image:vegImg,
      discount:26,
    },
    {
      id:101,
      title:'제주 미니단호박, 4개입',
      description:'달콤한 제주산 단호박',
      type:1,
      price:16990,
      image:vegImg,
      discount:29,
    },{
      id:102,
      title:'못난이 표고버섯 500g',
      description:'못생겨도 맛있어요',
      type:1,
      price:7240,
      image:vegImg,
      discount:17,
    },{
      id:103,
      title:'데친 곤드레 300g',
      description:'',
      type:3,
      price:10490,
      image:herbImg,
      discount:0,
    },{
      id:104,
      title:'유기농 양파',
      description:'맛있는 햇양파가 왔어요',
      type:1,
      price:13500,
      image:vegImg,
      discount:7,
    },{
      id:105,
      title:'국내산 무농약 느타리버섯',
      description:'무농약 느타리버섯',
      type:1,
      price:8600,
      image:vegImg,
      discount:16,
    },{
      id:106,
      title:'국내산 다진마늘 900g 1통',
      description:'알싸한 마늘이 한통',
      type:4,
      price:13590,
      image:otherVegImg,
      discount:3,
    }
  ],
  'fish': [],
}

export const PRODUCT_EVENT:{[key:string]:IProduct[]} = {
  'meat':[
    {
      id: 1,
      title: '양념 소불고기 1kg(냉장)',
      description: '온가족이 즐기는 반찬',
      type: 1,
      price: 21990,
      image: cowImg,
      discount: 9,
    },{
      id: 15,
      title: '양념 소 LA 갈비',
      description:'',
      type: 2,
      price: 34950,
      image: cowImg,
      discount: 0,
    },{
      id: 14,
      title: '국내산 소고기 부채살 구이용 300g',
      description:'소고기는 한우!',
      type: 2,
      price: 22990,
      image:cowImg,
      discount: 26,
    },{
      id: 4,
      title: '호주산 목초육 치마살 300g(냉장)',
      description: '',
      type: 1,
      price: 16590,
      image: cowImg,
      discount: 13,
    }
  ]
}