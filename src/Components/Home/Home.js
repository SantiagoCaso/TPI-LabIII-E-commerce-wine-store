import React from "react";
import "./Home.css";

const Home = ({ theme }) => {
  return (
    <div className={theme}>
      <h1>We are wine {theme}</h1>
    </div>
  );
};

export default Home;
