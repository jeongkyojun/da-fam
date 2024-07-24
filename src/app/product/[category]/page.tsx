import React, { useEffect } from "react";

const Product = (props: any) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div>
      <h1> Product Page </h1>
      <h2> category </h2>
    </div>
  );
};

export default Product;
