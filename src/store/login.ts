import { atom } from "recoil";

export const LOGIN = 'login'
export const USER = 'user'

export interface ILogin {
    id:string;
    pw:string;
}

export const loginState = atom<boolean>({
    key: "login",
    default: false,
    effects: [
      ({ setSelf, onSet }) => {
        localStorage.getItem(LOGIN) && setSelf(JSON.parse(localStorage.getItem(LOGIN) as string));
        onSet((value) => localStorage.setItem(LOGIN, JSON.stringify(value)));
      },
    ],
});

export const userState = atom<ILogin>({
    key: "user",
    default: {
        id:'user00',
        pw:'password',
    },
    effects: [
        ({ setSelf, onSet }) => {
          localStorage.getItem(USER) && setSelf(JSON.parse(localStorage.getItem(USER) as string));
          onSet((value) => localStorage.setItem(USER, JSON.stringify(value)));
        },
      ],
})