import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";

function CardProduct({ props, index }) {
  const { name, winery, vintage, type, url, cost } = props;
  const { order, setOrder } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState({
    orderName: name,
    orderCost: cost,
    orderImg: url,
    orderId: index,
  });

  // añadir un producto a la bariable global de pedido
  const addOrder = () => {
    setOrder([...order, newProduct]);
    console.log("Valores de order antes de apretar Add to Cart: ");
    console.log(order);
  };

  return (
    <div>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={url} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="card-text">
            <b>Winery: </b> {winery}
          </Card.Text>
          <Card.Text className="card-text">
            <b> Vintage: </b> {vintage}
          </Card.Text>
          <Card.Text className="card-text">
            <b> Wine Type: </b>
            {type}
          </Card.Text>
          <Card.Text className="card-text">
            <b>Cost:</b> ${cost}
          </Card.Text>
          <Card.Text>Id: {index}</Card.Text>
          <Button
            className="animated-button"
            onClick={addOrder}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
