import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = ({ name, winery, vintage, type, url, cost }) => {
    try {
      const existingProductIndex = cartItems.findIndex(
        (item) => item.name === name
      );
      if (existingProductIndex !== -1) {
        console.log("Se añadió al carrito");
      } else {
        setCartItems([
          ...cartItems,
          { name, winery, vintage, type, url, cost },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CartContext.Provider value={{ addToCart, cartItems, setCartItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
