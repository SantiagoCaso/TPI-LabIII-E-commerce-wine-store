import React, { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import CartItem from "./CartItem";
import { ThemeContext } from "../Theme/useContext";

const CartContainer = () => {
  const { order } = useContext(OrderContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <p>Listado de Productos en el carrito de compras</p>
      <h1>{order}</h1>
      {/* {order.map((props, index) => (
        <ul key={index}>
          <li>{props.orderName}</li>
          <li></li>
          <li></li>
        </ul>
      ))} */}
    </div>
  );
};

export default CartContainer;
