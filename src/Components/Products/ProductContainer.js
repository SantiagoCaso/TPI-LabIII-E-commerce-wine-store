import React from "react";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";

// function Wines({ props }) {
//   return (
//     <>
//       {props.length > 0 &&
//         props.map((item, index) => <CardProduct key={index} book={item} />)}
//       {props.length === 0 && (
//         <div>
//           No has cargados libros aún o ningún libro cumple con el filtro.
//         </div>
//       )}
//     </>
//   );
// }

function ProductContainer() {
  return (
    <div>
      <h1>ProductContainer</h1>
      <FormAddProducts />
    </div>
  );
}

export default ProductContainer;
