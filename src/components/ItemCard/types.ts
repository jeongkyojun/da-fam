import { MouseEventHandler } from "react";
import { IProduct } from "@/store/products";

export interface itemCardType{
    item:IProduct;
    category: string;
}
