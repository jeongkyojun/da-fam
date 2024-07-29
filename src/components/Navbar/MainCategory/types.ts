export interface mainCategoryType{
    mainItems: categoryItemType[];
    subItems: categoryItemType[][];
}

export interface categoryItemType{
    img?:string;
    alt?:string;
    name:string;
}