"use client";
import { addToCart, cartState, changePrice, priceState } from "@/store/cart";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { ProductDetailType } from "./types";

const ProductDetail = ({ item }: ProductDetailType) => {
  const [cart, setCart] = useRecoilState(cartState);
  const [fullPrice, setFullPrice] = useRecoilState(priceState);
  const { category, description, image, price, rating, title } = item;

  const addItem = () => {
    //setCart(addToCart(cart, item.id));
    setFullPrice(changePrice(fullPrice, Math.round(price)));
  };

  const getRaiting = (score: number | void) => {
    const stars: JSX.Element[] = [];
    if (typeof score != "number") {
      stars.push(<div>별점이 존재하지 않습니다.</div>);
      return stars;
    }
    for (let i = 1; i < score; i++) {
      stars.push(
        <input
          type="radio"
          name="rating-10"
          className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
          disabled
          checked
          key={"star_left_" + i}
        ></input>
      );
      stars.push(
        <input
          type="radio"
          name="rating-10"
          className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
          disabled
          checked
          key={"star_right_" + i}
        ></input>
      );
    }
    if (Math.ceil(score) != Math.floor(score)) {
      stars.push(
        <input
          type="radio"
          name="rating-10"
          className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
          disabled
          checked
          key={"star_left_" + score}
        ></input>
      );
      stars.push(
        <input
          type="radio"
          name="rating-10"
          className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
          disabled
          key={"star_right_" + score}
        ></input>
      );
      for (let i = Math.ceil(score); i < 5; i++) {
        stars.push(
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
            disabled
            key={"star_left_" + i}
          ></input>
        );
        stars.push(
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
            disabled
            key={"star_right_" + i}
          ></input>
        );
      }
    }
    return stars;
  };
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div>
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <Image src={image} alt={title} width={5} height={5}></Image>
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{description}</p>
            <div className="flex items-center mt-3">
              <div className="rating rating-half" key="rating">
                {getRaiting(rating.rate)}
              </div>
              <div className="ml-2">
                {rating.rate} / {rating.count}참여
              </div>
            </div>
            <p className="mt-2 mb-4 text-3xl">${Math.round(price)}</p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={addItem}>
                장바구니에 담기
              </button>
              <a className="btn btn-outline ml-1" href="/cart">
                장바구니로 이동
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
