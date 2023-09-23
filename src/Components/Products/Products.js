import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Products.css"

function CardProduct({ props }) {
  const { name, winery, vintage, type, url, cost } = props;
  return (
    <div>
      <Card style={{ width: "18rem", border: "6px solid black", borderRadius: "5px" }}>
      <Card.Img variant="top" src={url} alt={name} style={{borderBottom: "1px solid black"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ color: "black"}}><b>Winery: </b> {winery}</Card.Text>
        <Card.Text style={{ color: "black"}}><b> Vintage: </b> {vintage}</Card.Text>
        <Card.Text style={{ color: "black"}}><b> Wine Type: </b>{type}</Card.Text>
        <Card.Text style={{ color: "black"}}><b>Cost:</b> ${cost}</Card.Text>
        <Button style={{ marginLeft: "150px"}} className="animated-button">Add to cart</Button>
      </Card.Body>
     </Card>
    </div> 
    
  );
}

export default CardProduct;
