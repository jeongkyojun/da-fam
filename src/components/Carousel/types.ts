import { StaticImageData } from "next/image";

export interface CarouselItemsType{
    items: CarouselItemType[];
}

export interface CarouselItemType{
    name:string;
    title:string;
    text:string;
    img:StaticImageData;
}