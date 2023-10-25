import React, { useContext } from "react";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";
import { ThemeContext } from "../Theme/useContext";
import { WinesContextProvider } from "./WinesContext";
import { getAuth } from "firebase/auth";
import ProductsList from "./ProductsList";
import "./ProductContainer.css";

function ProductContainer() {
  const { theme } = useContext(ThemeContext);
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className={theme}>
      <WinesContextProvider>
        <h1>ProductContainer</h1>
        {user.email ? (
          user.email === "santiagoignaciocaso@gmail.com" ? (
            <div>
              {/* Sacar de FormAddProduct y añadir el filter */}
              <FormAddProducts />
              <ProductsList />
            </div>
          ) : (
            // añadir el filter
            <ProductsList />
          )
        ) : (
          // añadir el filter
          <ProductsList />
        )}
      </WinesContextProvider>
    </div>
  );
}

export default ProductContainer;

//condición1 ? resultado1 : (condición2 ? resultado2 : (condición3 ? resultado3 : resultadoPorDefecto))
