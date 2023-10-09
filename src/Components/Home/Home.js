import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../Theme/useContext";
import ProductsList from "../Products/ProductsList";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>We are wine {theme}</h1>
      <ProductsList />
    </div>
  );
};

export default Home;
