import React, { useContext, useEffect, useState } from "react";
import CardProduct from "./Product";
import { WinesContext } from "./WinesContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

const ProductsList = () => {
  const { wines } = useContext(WinesContext);
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
    <>
      {productsList.map((props, index) => (
        <>
          <CardProduct key={index} props={props} />
        </>
      ))}
    </>
  );
};

export default ProductsList;
