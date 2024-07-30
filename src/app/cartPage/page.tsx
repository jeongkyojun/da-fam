"use client";
import CartList from "@/components/CartList";
import { cartState, priceState } from "@/store/cart";
import { productsListItem } from "@/store/products";
import Link from "next/link";
import { useRecoilState } from "recoil";

const CartPage = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [pList, setPList] = useRecoilState(productsListItem);
  const [price, setPrice] = useRecoilState(priceState);

  const showCartList = () => {
    const base: JSX.Element[] = [];
    if (!cart) {
      base.push(
        <>
          <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
          <Link href="/" className="btn btn-primary mt-10">
            담으러 가기
          </Link>
        </>
      );
    }
    for (const id in cart) {
      const product = pList[Number.parseInt(id) - 1];
      base.push(<CartList product={product} id={id}></CartList>);
    }
    return base;
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div className="lg:flex justify-between mb-20">
          <div>{showCartList()}</div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">총 : ${price}</span>
            <label
              htmlFor="confirm-modal"
              className="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
