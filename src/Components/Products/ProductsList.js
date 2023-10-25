import React, { useContext, useEffect, useState } from "react";
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
  );
};

export default ProductsList;
