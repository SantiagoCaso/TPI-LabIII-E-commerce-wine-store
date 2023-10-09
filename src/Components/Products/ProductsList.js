import React, { useContext } from "react";
import CardProduct from "./Product";
import { WinesContext } from "./WinesContext";

const ProductsList = () => {
  const { wines } = useContext(WinesContext);
  return (
    <>
      {wines.map((props, index) => (
        <>
          <CardProduct key={index} props={props} index={index} />
        </>
      ))}
    </>
  );
};

export default ProductsList;
