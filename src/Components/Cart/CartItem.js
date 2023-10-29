import React, { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CartItem.css";
const CartItem = ({ orderName, orderCost, orderImg, index }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="item-img"
        variant="top"
        src={orderImg}
        alt={orderName}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{orderName}</Card.Title>
        <Card.Text>Unid Cost: {orderCost}</Card.Text>

        <Button variant="primary">Go somewhere</Button>
        <Button variant="danger">Delate from cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
