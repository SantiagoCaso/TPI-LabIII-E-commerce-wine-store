import React, { useCallback, useContext, useMemo } from "react";
import { OrderContext } from "../Order/OrderContext";
import CartItem from "./CartItem";
import { ThemeContext } from "../Theme/useContext";
import { Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./CartContainer.css";
import { warnMessage } from "../Tostify/MessagesToastify";
const CartContainer = () => {
  const { order, setOrder } = useContext(OrderContext);
  const { theme } = useContext(ThemeContext);
  const total = useMemo(() => calculateTotal(order), [order]);
  const navigate = useNavigate();

  //calcular el total de los productos selecionados en el carrito
  function calculateTotal() {
    let total = 0;
    for (const products of order) {
      const price = parseFloat(products.orderCost);
      total = total + price;
    }
    return total;
  }

  //Eliminar producto del carrito
  const removeAllFromCart = useCallback(
    (productId) => {
      console.log(productId);
      const updatedCart = order.filter(() => order.orderId !== productId);
      setOrder(updatedCart);
      warnMessage("All products were removed from the cart");
    },
    [order]
  );

  return (
    <div className={theme}>
      <div>Shopping Cart List</div>
      <div className="order-items">
        {order.length > 0 ? (
          order.map((props, index) => (
            <>
              <CartItem
                key={props.orderId}
                orderName={props.orderName}
                orderCost={props.orderCost}
                orderImg={props.orderImg}
                orderId={index}
              />
            </>
          ))
        ) : (
          <div>
            <h3>You have not selected any product yet</h3>
            <p onClick={() => navigate("/products")} className="text">
              Click here to go to <samp id="text-red">products section</samp>{" "}
              and choose your wines
            </p>
          </div>
        )}
      </div>
      <Button
        variant="danger"
        className="buttons"
        onClick={() => {
          removeAllFromCart(order.orderId);
        }}
      >
        Delate all from cart
      </Button>
      <br />
      <div className={"div-pay-order-" + theme}>
        <div>
          <h3> Total ${total}</h3>
        </div>
        <Button className="button-cart" as={Link} to="/CartPage">
          Pay
        </Button>
      </div>
      <br />
    </div>
  );
};

export default CartContainer;
