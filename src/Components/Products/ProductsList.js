import React, { useCallback, useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CardProduct from "./Product";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import "./ProductContainer.css";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const productsCollection = collection(db, "products");
  const [wineType, setWineType] = useState("");

  // Traer la collection de productos de firebase
  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollection);
        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        console.log(filteredData);
        setProductsList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getProductList();
  }, []);

  return (
    <div className="products-container">
      <h3>Filter wine by type</h3>
      <div className="product-filter">
        <Form.Select
          size="lg"
          aria-label="filter by wine type"
          value={wineType}
          onChange={(e) => setWineType(e.target.value)}
        >
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
      <div className="product-list">
        {productsList.length > 0 ? (
          productsList.map((props, index) => (
            <>
              <CardProduct key={index} props={props} />
            </>
          ))
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </div>
  );
};

export default ProductsList;
