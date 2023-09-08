import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProduct({ props }) {
  const { name, winery, vintage, type, url, cost } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Winery: {winery}</Card.Text>
        <Card.Text>Vintage: {vintage}</Card.Text>
        <Card.Text>Wine Type: {type}</Card.Text>
        <Card.Text>Cost: $ {cost}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
