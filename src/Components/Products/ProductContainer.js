import React from "react";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";
import { WinesContextProvider } from "./WinesContext";

function ProductContainer() {
  return (
    <div>
      <WinesContextProvider>
        {/*Acá debería estar FormAddProducts, ProductsList y ProductFilter*/}
        {/*Para eso tenemos que pasar variables importantes como wines mediante useContext*/}
        {/*¿Cuales son las variables que necesitamos pasar mediante useContext?*/}
        <h1>ProductContainer</h1>
        <FormAddProducts />
      </WinesContextProvider>
    </div>
  );
}

export default ProductContainer;
