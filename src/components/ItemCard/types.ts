import { MouseEventHandler } from "react";
import { IProduct } from "@/store/products";

export interface itemCardType{
    onClick: MouseEventHandler;
    item:IProduct;
}
