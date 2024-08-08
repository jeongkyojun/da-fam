"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavCardItemType } from "./types";

const NavCard = ({ item, category, count }: NavCardItemType) => {
  const { title, price, image } = item;
  const router = useRouter();
  const onClick = () => {
    router.push("/productDetail/" + category + "/" + item.id);
  };
  return (
    <div onClick={onClick}>
      <div>
        <Image src={image} alt={title} width={20} height={20}></Image>
      </div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default NavCard;
