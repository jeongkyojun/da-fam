import { ChangeEvent, MouseEventHandler } from "react";

export interface SearchBarType{
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}