import React, { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";

const CartItem = ({ props, index }) => {
  const { order } = useContext(OrderContext);
  const { orderName, orderCost, orderImg } = props;
  return (
    <div>
      <p>Name: {orderName}</p>
      <p>Cost: {orderCost}</p>
      <p>Id: {orderImg}</p>
    </div>
  );
};

export default CartItem;
