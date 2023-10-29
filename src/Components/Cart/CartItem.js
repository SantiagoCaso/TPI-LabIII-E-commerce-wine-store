import React, { useCallback, useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CartItem.css";

const CartItem = ({ orderName, orderCost, orderImg, orderId }) => {
  const { order, setOrder } = useContext(OrderContext);

  return (
    <Card className="card-container">
      <div className="div-card-container">
        <div className="div-img">
          <Card.Img
            className="item-img"
            variant="top"
            src={orderImg}
            alt={orderName}
          ></Card.Img>
        </div>
        <div className="div-name">
          <Card.Text>Wine name:</Card.Text>
          <Card.Title>
            <b>{orderName}</b>
          </Card.Title>
        </div>
        <div className="div-description">
          <Card.Text>Unid Cost:</Card.Text>
          <Card.Text>
            <b>{orderCost}</b>
          </Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
