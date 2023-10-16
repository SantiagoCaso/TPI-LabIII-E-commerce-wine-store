import React, { useContext } from "react";
import DrunkMen from "./drunk-icon-19.jpg";
import "./PageNotFound.css";
import { ThemeContext } from "../Theme/useContext";

function PageNotFound() {
  const {theme} = useContext=(ThemeContext);

  return (
    <div className={theme}>
      <h1>404</h1>
      <h2>You drank too much wine</h2>
      <p>Pepito test passed</p>
      <div id="conteiner-404-img">
        <img src={DrunkMen} alt="drunk-men" id="drunk-men"></img>
      </div>
    </div>
  );
}

export default PageNotFound;
