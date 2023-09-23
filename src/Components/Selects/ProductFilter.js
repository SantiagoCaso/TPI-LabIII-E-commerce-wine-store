import Form from "react-bootstrap/Form";
import { React, useState } from "react";

function ProductFilter({ onSelectWine, types }) {
  const [wineTypeSelected, setWineTypeSelected] = useState("");
  const wineTypeChangeHandler = (event) => {
    setWineTypeSelected(event.target.value);
    onSelectWine(event.target.value);
  };
  return (
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
  );
}

export default ProductFilter;
