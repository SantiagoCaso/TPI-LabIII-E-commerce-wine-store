import React, { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { order } = useContext(OrderContext);
  return (
    <div>
      <p>Listado de Productos en el carrito de compras.</p>
      <ul>
        {order && order.length > 0 ? (
          order.map((props, index) => <CartItem props={props} key={index} />)
        ) : (
          <p>El carrito está vacio</p>
        )}
      </ul>
    </div>
  );
};

export default CartContainer;
