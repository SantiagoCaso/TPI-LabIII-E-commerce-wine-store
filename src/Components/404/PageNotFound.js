import React from "react";
import DrunkMen from "./drunk-icon-19.jpg";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div>
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
