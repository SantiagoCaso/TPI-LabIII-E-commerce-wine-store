import Form from "react-bootstrap/Form";
import SelectWineType from "../Selects/SelectWineType";
import "./FormAddProducts.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function FormAddProducts() {
  const [product, setProduct] = useState({
    name: "",
    winery: "",
    vintage: 0,
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
  };

  return (
    <div className="div-form-add-product" onSubmit={handleSubmit}>
      <form>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
          <label htmlFor="wine">Enter wine name</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            name="winery"
            value={product.winery}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInputCustom">Enter winery</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="number"
            name="vintage"
            value={product.vintage}
            onChange={handleInputChange}
          ></Form.Control>

          <label htmlFor="floatingInputCustom">Enter Vintage</label>
        </Form.Floating>
        <Form.Select
          size="lg"
          aria-label="Default select example"
          type="select"
          name="type"
          value={product.type}
          onChange={handleInputChange}
        >
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
        <div id="div-add-button">
          {" "}
          <Button type="submit" variant="info" id="add-button">
            Add Wine
          </Button>{" "}
        </div>
      </form>
    </div>
  );
}

export default FormAddProducts;
