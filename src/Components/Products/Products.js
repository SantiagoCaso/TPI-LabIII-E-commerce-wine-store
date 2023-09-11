import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Products.css"

function CardProduct({ props }) {
  const { name, winery, vintage, type, url, cost } = props;
  return (
    <div>
      <Card style={{ width: "18rem", border: "4px solid black", borderRadius: "1px" }}>
      <Card.Img variant="top" src={url} alt={name} style={{borderBottom: "1px solid black"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ color: "black"}}>Winery: {winery}</Card.Text>
        <Card.Text style={{ color: "black"}}>Vintage: {vintage}</Card.Text>
        <Card.Text style={{ color: "black"}}>Wine Type: {type}</Card.Text>
        <Card.Text style={{ color: "black"}}>Cost: $ {cost}</Card.Text>
        <Button style={{ marginLeft: "150px"}} className="animated-button">Add to cart</Button>
      </Card.Body>
     </Card>
    </div> 
    
  );
}

export default CardProduct;
