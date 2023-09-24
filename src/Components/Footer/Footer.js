import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h3 style={{ color: "black" }}> ㅤ </h3>
            <ul>
              <li style={{ fontSize: "20px" }}>Privacy</li>
              <li style={{ fontSize: "20px" }}>Accesibility</li>
              <li style={{ fontSize: "20px" }}>How can we help you?</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Made in Argentina </h3>
            <ul>
              <li style={{ fontSize: "20px" }}>Santiago Ignacio Caso</li>
              <li style={{ fontSize: "20px" }}>Luciano Beltramino</li>
              <li style={{ fontSize: "20px" }}>Mora Vallejos</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 style={{ marginLeft: "36px" }}> Contact us! </h3>
            <ul>
              <li style={{ fontSize: "20px" }}>
                <img
                  src="/images/twitter-logo.png"
                  style={{ marginRight: "5px", width: "25px", height: "25px" }}
                />{" "}
                Twitter{" "}
              </li>
              <li style={{ fontSize: "20px" }}>
                <img
                  src="/images/facebook-logo.png"
                  style={{ marginRight: "5px", width: "25px", height: "25px" }}
                />{" "}
                Facebook{" "}
              </li>
              <li style={{ fontSize: "20px" }}>
                <img
                  src="/images/instagram-logo.png"
                  style={{ marginRight: "5px", width: "25px", height: "25px" }}
                />{" "}
                Instagram{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
