import Form from "react-bootstrap/Form";

function SelectWineType() {
  return (
    <Form.Select size="lg" aria-label="Default select example">
      <option>Wine Type</option>
      <option value="Red Wine">Red Wine</option>
      <option value="White Wine">White Wine</option>
      <option value="Rosé Wine">Rosé Wine</option>
      <option value="Sparkling Wine">Sparkling Wine</option>
      <option value="Fortified Wine">Fortified Wine</option>
      <option value="Dessert Wine">Dessert Wine</option>
      <option value="Sweet Wine">Sweet Wine</option>
      <option value="Fruit Wine">Fruit Wine</option>
      <option value="Natural Wine">Natural/Orange Wine</option>
    </Form.Select>
  );
}

export default SelectWineType;
