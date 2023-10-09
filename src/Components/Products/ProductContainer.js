import React, { useContext } from "react";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";
import { ThemeContext } from "../Theme/useContext";

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
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      {/*Acá debería estar FormAddProducts, ProductsList y ProductFilter*/}
      {/*Para eso tenemos que pasar variables importantes como wines mediante useContext*/}
      {/*¿Cuales son las variables que necesitamos pasar mediante useContext?*/}
      <h1>ProductContainer</h1>
      <FormAddProducts />
    </div>
  );
}

export default ProductContainer;
