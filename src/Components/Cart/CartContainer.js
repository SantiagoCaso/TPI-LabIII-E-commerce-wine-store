import React, { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import CartItem from "./CartItem";
import { ThemeContext } from "../Theme/useContext";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { order } = useContext(OrderContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <p>Listado de Productos en el carrito de compras</p>
      <h1>{order}</h1>
      <div className="order-items">
        {order.length > 0 ? (
          order.map((props, index) => (
            <>
              <CartItem key={index} props={props} />
            </>
          ))
        ) : (
          <Spinner animation="border" />
        )}
      </div>

      <Button className="button-cart" as={Link} to="/CartPage">
        Pay
      </Button>
    </div>
  );
};

export default CartContainer;
