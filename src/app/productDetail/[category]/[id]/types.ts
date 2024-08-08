import { IProduct } from "@/store/products";

export interface PropTypes{
    params: ParamType;
}

interface ParamType{
    category: string;
    id: number;
}