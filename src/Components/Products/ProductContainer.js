import React, { useContext } from "react";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";
import { ThemeContext } from "../Theme/useContext";
import { WinesContextProvider } from "./WinesContext";
import { OrderContextProvider } from "../Order/OrderContext";

function ProductContainer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <OrderContextProvider>
        <WinesContextProvider>
          {/*Acá debería estar FormAddProducts, ProductsList y ProductFilter*/}
          {/*Para eso tenemos que pasar variables importantes como wines mediante useContext*/}
          {/*¿Cuales son las variables que necesitamos pasar mediante useContext?*/}
          <h1>ProductContainer</h1>
          <FormAddProducts />
        </WinesContextProvider>
      </OrderContextProvider>
    </div>
  );
}

export default ProductContainer;
