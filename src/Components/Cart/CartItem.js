import React from "react";

const CartItem = (props) => {
  const { orderName, orderCost, orderId } = props;
  return (
    <div>
      <p>Name: {orderName}</p>
      <p>Cost: {orderCost}</p>
      <p>Id: {orderId}</p>
    </div>
  );
};

export default CartItem;
