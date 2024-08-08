export interface mainCategoryType{
    items: { [key:string]:string[]};
}

export interface categoryItemType{
    img?:string;
    alt?:string;
    name:string;
}

export interface CategoryListType{
    active: boolean;
}