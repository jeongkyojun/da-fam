import { ICartState } from "@/store/cart";
import { IProduct } from "@/store/products";

export interface PropType{
    active: boolean;
    items: ICartState;
}

export interface StyledType{
    active: boolean;
}