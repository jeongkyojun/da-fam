"use client";

import { CART_ITEM, cartState } from "@/store/cart";
import { RecoilRoot } from "recoil";

interface RecoilRootWrapperProps {
  children: React.ReactNode;
}

const initialValue =
  JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

export default function RecoilRootWrapper({
  children,
}: RecoilRootWrapperProps) {
  return (
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      {children}
    </RecoilRoot>
  );
}
