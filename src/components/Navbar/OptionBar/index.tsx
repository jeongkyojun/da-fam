import Image from "next/image";

const OptionBar = () => {
  return (
    <div className="option-wrapper">
      <button>
        <div className="option-btn">
          <Image
            src="../../src/app/assets/icon/my-item.svg"
            alt="즐겨찾기"
            width={10}
            height={10}
          ></Image>
        </div>
      </button>
      <button>
        <div className="option-btn">
          <Image
            src="../../src/app/assets/icon/my-item.svg"
            alt="내정보"
            width={10}
            height={10}
          ></Image>
        </div>
      </button>
      <button>
        <div className="option-btn">
          <Image
            src="../../src/app/assets/icon/cart.svg"
            alt="장바구니"
            width={10}
            height={10}
          ></Image>
        </div>
      </button>
    </div>
  );
};

export default OptionBar;
