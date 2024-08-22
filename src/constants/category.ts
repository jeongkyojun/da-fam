import { StaticImageData } from "next/image"

import meatIcon from '../assets/icon/pig.svg'
import vegIcon from '../assets/icon/pig.svg'
import fishIcon from '../assets/icon/pig.svg'

import meatImg from "../assets/img/img_shop_meat.jpeg"
import vegetableImg from "../assets/img/img_shop_vegetable.jpeg"
import fishImg from "../assets/img/img_shop_fish.jpeg"

export const CATEGORY:{ [key:string]:string[]} = {
    "none":[],
    "meat":['전체보기','소고기', '돼지고기', '닭고기','가공품','계란'],
    "vegetable":['전체보기','채소','과일','나물','가공품'],
    "fish":['전체보기','생선류','오징어/낙지/문어','김/미역/해조류','수산가공품'],
}

export const CATEGORY_TITLE:{[key:string]:string} = {
    "none":"",
    "meat":"정육/가공육/계란",
    "vegetable":'과일/야채/나물',
    "fish":"수산/해산물",
}

export const CATEGORY_ICON:{[key:string]:StaticImageData} = {
    "meat":meatIcon,
    'vegetable':vegIcon,
    'fish':fishIcon,
}

export const CATEGORY_IMAGE:{[key:string]:StaticImageData} = {
    "meat":meatImg,
    'vegetable':vegetableImg,
    'fish':fishImg,
}