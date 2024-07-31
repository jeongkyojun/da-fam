"use client";
import {
  ICartState,
  addToCart,
  cartState,
  changePrice,
  priceState,
  removeFromCart,
} from "../../store/cart";
import { useRecoilState } from "recoil";
import { productsListItem } from "../../store/products";
import { CartListType } from "./types";

const CartList = ({ product, id }: CartListType): JSX.Element => {
  // Recoil을 사용해서 cart데이터를 가져오는 예제입니다.
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const [price, setPrice] = useRecoilState<number>(priceState);
  const [pList, setPList] = useRecoilState(productsListItem);

  // store/cart.ts를 참고하세요.
  const removeFromCartHandler = (id: string) => {
    //setCart(removeFromCart(cart, id));
    setPrice(
      changePrice(price, -1 * Math.round(pList[Number.parseInt(id) - 1].price))
    );
  };

  const addFromCartHandler = (id: string) => {
    //setCart(addToCart(cart, id));
    setPrice(
      changePrice(price, Math.round(pList[Number.parseInt(id) - 1].price))
    );
  };

  return (
    <div
      className="lg:flex lg:items-center mt-4 px-2 lg:px-0"
      key={"cart_" + id}
    >
      <a href={"/product/" + product.id}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <div className="image"></div>
          {/* <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-48"
          ></img> */}
        </figure>
      </a>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          <a className="link link-hover" href={"/productDetail/" + product.id}>
            {product.title}
          </a>
        </h2>
        <p className="mt-2 mb-4 text-3xl">
          {Math.round(product.price) * cart.items[id].count}
          <span className="text-2xl">
            {"("}
            {Math.round(product.price)}
            {")"}
          </span>
        </p>
        <div className="card-actions">
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => removeFromCartHandler(id)}
            >
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {cart.items[id].count}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => addFromCartHandler(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
