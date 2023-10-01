import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";

function CardProduct({ props }) {
  const { name, winery, vintage, type, url, cost } = props;
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
          <Button className="animated-button">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
