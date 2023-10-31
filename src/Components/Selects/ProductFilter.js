import Form from "react-bootstrap/Form";
import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ProductFilter(productList) {
  const [data, setData] = useState([]);
  const [wineType, setWineType] = useState();

  return (
    <div>
      <Form.Select size="lg" aria-label="filter by wine type">
        <option>Wine Type</option>
        <option value="">All</option>
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
    </div>
  );
}

export default ProductFilter;

// //Esto debería estar en Products.js
// function getWineType(wines) {
//   const types = wines.map((type) => type.type);
//   let uniqueTypes = types.filter(
//     (type, index) => types.indexOf(type) === index
//   );
//   return uniqueTypes;
// }
