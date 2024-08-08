import { IProduct } from "@/store/products";

export interface NavCardItemType{
    item:IProduct;
    category: string;
    count: number;
}