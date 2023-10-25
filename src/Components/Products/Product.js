import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import { CartContext } from "../Cart/CartContext";

function CardProduct({ props, index }) {
  const { name, winery, vintage, type, url, cost } = props;
  const { order, setOrder } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState({
    orderName: "",
    orderCost: 0,
    orderImg: "",
  });

  useEffect(() => {
    // Actualiza newProduct cuando las props cambian
    setNewProduct({
      orderName: name,
      orderCost: cost,
      orderImg: url,
    });
  }, [name, cost, url]);

  // añadir un producto a la variable global de pedido
  const addOrder = () => {
    console.log({ name });
    console.log(newProduct);
  };

  return (
    <div>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={url} alt={name} />
        <Card.Body>
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
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
          <Button className="animated-button" onClick={addOrder}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
