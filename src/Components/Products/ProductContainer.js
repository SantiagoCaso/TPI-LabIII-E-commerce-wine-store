import React, { useContext } from "react";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";
import { ThemeContext } from "../Theme/useContext";
import { WinesContextProvider } from "./WinesContext";
import { getAuth } from "firebase/auth";
import ProductsList from "./ProductsList";
import "./ProductContainer.css";
import ProductFilter from "../Selects/ProductFilter";

function ProductContainer() {
  const { theme } = useContext(ThemeContext);
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className={theme}>
      <WinesContextProvider>
        <h1>ProductContainer</h1>
        {user && user.email ? (
          user.email === "santiagoignaciocaso@gmail.com" ||
          user.email === "javier@gmail.com" ? (
            <div className="product-admin-container">
              <FormAddProducts />
              <ProductsList />
            </div>
          ) : (
            <div className="product-user-container">
              <ProductsList />
            </div>
          )
        ) : (
          <div className="product-user-container">
            <ProductsList />
          </div>
        )}
      </WinesContextProvider>
    </div>
  );
}

export default ProductContainer;
