import React, { useState } from "react";
import CardProduct from "./Products";
import FormAddProducts from "./FormAddProducts";
import "./FormAddProducts.css";
import axios from "axios";

function ProductContainer() {
  // Prueba de axios para peticiones HTTP
  // axios
  //   .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //   .then((response) => {
  //     // Manejar los datos de la respuesta
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     // Manejar errores
  //     console.error("Error en la solicitud:", error);
  //   });

  return (
    <div>
      <h1>ProductContainer</h1>
      <FormAddProducts />
      <div className="div-products-container">
        <CardProduct />
      </div>
    </div>
  );
}

export default ProductContainer;
