import { IProduct } from "@/store/products";
import { MouseEventHandler } from "react";

export interface itemListType{
    row: number;
    col: number;
    title: string;
    category: string;
    data:IProduct[];
}
