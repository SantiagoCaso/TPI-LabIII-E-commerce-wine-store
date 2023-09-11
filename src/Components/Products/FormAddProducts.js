import Form from "react-bootstrap/Form";
import "./FormAddProducts.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import productContext from "../Items-Container/productContext";
import ItemsContainer from "../Items-Container/ItemsContainer";
import CardProduct from "./Products";

function FormAddProducts() {
  const [wines, setWines] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    winery: "",
    vintage: 0,
    type: "",
    url: "",
    cost: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", newProduct);
    console.log("Array wines list: ", wines);
  };
  const addWine = () => {
    setWines([...wines, newProduct]);
  };

  return (
    <productContext.Provider value={wines}>
      <div className="div-form-add-product" onSubmit={handleSubmit}>
        <form>
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <label htmlFor="wine">Enter Wine Name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              name="winery"
              value={newProduct.winery}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputCustom">Enter Winery</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              type="number"
              name="vintage"
              value={newProduct.vintage}
              onChange={handleInputChange}
            ></Form.Control>
            <label htmlFor="floatingInputCustom">Enter Vintage</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              type="url"
              name="url"
              value={newProduct.url}
              onChange={handleInputChange}
            />
            <label htmlFor="url">Enter URL Wine Image</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              type="number"
              name="cost"
              value={newProduct.cost}
              onChange={handleInputChange}
            />
            <label htmlFor="cost">Enter Wine Cost</label>
          </Form.Floating>
           
          <Form.Select
            size="lg"
            aria-label="Default select example"
            type="select"
            name="type"
            value={newProduct.type}
            onChange={handleInputChange}
          >
            <option disabled>Wine Type</option>
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
            <Button
              onClick={addWine}
              type="submit"
              variant="info"
              id="add-button"
            >
              Add Wine
            </Button>{" "}
          </div>
        </form>
        <div className="products-container"> 
          {wines.map((props, index) => (
          <CardProduct key={index} props={props} />
        ))}
        </div>
        
      </div>
    </productContext.Provider>
  );
}

export default FormAddProducts;
