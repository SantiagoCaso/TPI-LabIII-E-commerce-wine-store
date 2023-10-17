import React, { useContext } from "react";
import CardProduct from "./Product";
import { WinesContext } from "./WinesContext";
import { OrderContextProvider } from "../Order/OrderContext";

const ProductsList = () => {
  const { wines } = useContext(WinesContext);

  return (
    <>
      <OrderContextProvider>
        {wines.map((props, index) => (
          <>
            <CardProduct key={index} props={props} index={index} />
          </>
        ))}
      </OrderContextProvider>
    </>
  );
};

export default ProductsList;
