import Link from "next/link";
import { CarouselItemsType } from "./types";
import Image from "next/image";
import { CarouselDiscriptionStyle, CarouselStyle } from "./style";

const Carousel = ({ items }: CarouselItemsType) => {
  return (
    <div style={CarouselStyle}>
      <div style={CarouselDiscriptionStyle}>
        {items.map((item, index: number) => {
          return (
            <div key={item.name}>
              <div className="carousel-description">
                <h2 className="carousel-title">{item.title}</h2>
                <p>{item.text}</p>
                <Link href={`/`}>바로가기</Link>
              </div>
              {item.img ? (
                <Image src={item?.img} alt={item.name}></Image>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
