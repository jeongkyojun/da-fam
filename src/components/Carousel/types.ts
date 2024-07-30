import { StaticImageData } from "next/image";

export interface CarouselItemsType{
    items: CarouselItemType[];
}

export interface CarouselItemType{
    category:string;
    type:number;
    title:string;
    text:string;
    img:StaticImageData;
}