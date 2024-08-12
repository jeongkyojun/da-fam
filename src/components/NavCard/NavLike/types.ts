import { IProduct } from "@/store/products";

export interface PropType{
    active: boolean;
    items: IProduct[];
}

export interface StyledType{
    active: boolean;
}