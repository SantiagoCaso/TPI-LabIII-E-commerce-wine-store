import Form from "react-bootstrap/Form";
import { React, useState } from "react";
import ProductsList from "../Products/ProductsList";

function ProductFilter({ onSelectWine, types }) {
  const [wineTypeSelected, setWineTypeSelected] = useState("");
  const [wines, setWines] = useState([]);

  const wineTypeChangeHandler = (event) => {
    setWineTypeSelected(event.target.value);
    onSelectWine(event.target.value);
  };
  return (
    <div>
      <Form.Select
        size="lg"
        aria-label="filter by wine type"
        value={wineTypeSelected}
        onChange={wineTypeChangeHandler}
      >
        <option value={""} disabled>
          Select Wine Type
        </option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </Form.Select>
      <div className="products-container">
        <ProductsList wines={wines} /> {/*Esto debería ir en ProductContainer*/}
      </div>
    </div>
  );
}

export default ProductFilter;
