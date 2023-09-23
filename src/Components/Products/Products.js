import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProduct({ props }) {
  const { name, winery, vintage, type, url, cost } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} alt={name} />
      <Card.Body>
        <Card.Title>
          <b>{name}</b>
        </Card.Title>
        <Card.Text>
          <b>Winery:</b> {winery}
        </Card.Text>
        <Card.Text>
          <b>Vintage:</b> {vintage}
        </Card.Text>
        <Card.Text>
          <b>Wine Type:</b> {type}
        </Card.Text>
        <Card.Text>
          <b>Cost: </b> ${cost}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
