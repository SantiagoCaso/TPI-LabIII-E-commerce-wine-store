import React from "react";
import CardProduct from "./Products";

const ProductsList = ({ wines }) => {
  return (
    <>
      {wines.map((props, index) => (
        <CardProduct key={index} props={props} />
      ))}
    </>
  );
};

export default ProductsList;
