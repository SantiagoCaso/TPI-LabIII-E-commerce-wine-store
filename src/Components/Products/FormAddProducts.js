import Form from "react-bootstrap/Form";
import SelectWineType from "../Selects/SelectWineType";
import "./FormAddProducts.css";

function FormAddProducts() {
  return (
    <div className="div-form-add-product">
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="name"
          placeholder="Wine name"
        />
        <label htmlFor="floatingInputCustom">Enter wine name</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Winery"
        />
        <label htmlFor="floatingInputCustom">Enter winery</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="Vintage"
        />
        <label htmlFor="floatingInputCustom">Enter Vintage</label>
      </Form.Floating>
      <SelectWineType />
    </div>
  );
}

export default FormAddProducts;
